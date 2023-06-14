import NodeCache from 'node-cache'
import pkg from "@whiskeysockets/baileys";
import basic from "./helper/basic.js"
import { websocks } from './http.js';
import Reply from './reply.js';
import P from 'pino'
import qrcode from "qrcode"
import applog from './log/Logger.js';

const { delay, DisconnectReason, fetchLatestBaileysVersion, useMultiFileAuthState, makeCacheableSignalKeyStore, isJidBroadcast, Browsers } = pkg
const logger = P({ timestamp: () => `,"time":"${new Date().toJSON()}"` }).child({})
logger.level = 'trace'

const msgRetryCounterCache = new NodeCache()
const Session = new Map();

const startSock = async () => {
  const { state, saveCreds } = await useMultiFileAuthState('baileys_auth_info')
  const { version, isLatest } = await fetchLatestBaileysVersion()

  applog(`using WA v${version.join('.')}, isLatest: ${isLatest}`, "APP")

  /**
   * @type {import('@whiskeysockets/baileys').WASocket}
   */
  const sock = pkg.default({
    version,
    // logger,
    printQRInTerminal: true,
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, logger),
    },
    msgRetryCounterCache,
    generateHighQualityLinkPreview: true,
    shouldIgnoreJid: jid => isJidBroadcast(jid),
    browser: Browsers.ubuntu('Chrome')
  })

  sock.ev.on('connection.update', (conn) => {

    const { connection, lastDisconnect } = conn

    if (conn.qr) {
      qrcode.toDataURL(conn.qr, (err, uri) => {
        if (err) {
          return websocks.get('sock')?.send(JSON.stringify({
            event: "qr",
            err: true,
            payload: "qr code error " + err
          }))
        }

        websocks.get('sock')?.send(JSON.stringify({
          event: "qr",
          err: false,
          payload: uri
        }))
      })
    }

    const manual = Session.get("manual");

    if (connection === 'close') {
      if ((lastDisconnect?.error)?.output?.statusCode !== DisconnectReason.loggedOut) {
        if (!manual) {
          startSock()
        }
        applog('whatsapp clossed', "APP")
      } else {
        applog('Connection closed. You are logged out.', "APP")
      }
    }

    applog('connection update', "APP")
  })



  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('messages.upsert', (message) => {
    message.messages.forEach(async (msg) => {

      if (msg.key.fromMe) {
        return;
      }

      if (msg.key.remoteJid === 'status@broadcast') {
        return;
      }

      const reply = new Reply(msg)
      await reply.init(reply.service);

      await sock.readMessages([msg.key])

      await sock.presenceSubscribe(msg.key.remoteJid)
      await delay(500)
      await sock.sendPresenceUpdate('composing', msg.key.remoteJid)
      await delay(2000)
      await sock.sendPresenceUpdate('paused', msg.key.remoteJid)

      if (reply.error) {
        await sock.sendMessage(basic.numberFormatter(process.env.DEVELOPER_CONTACT), { text: reply.errText })
      }

      if (reply.controller === null) {

        await sock.sendMessage(
          msg.key.remoteJid,
          { text: reply.text }
        )

        return;
      }

      const controller = new reply.controller.default(reply.perkara ?? reply.nonPerkara, reply.balasan ?? null);

      await controller.init()

      if (controller.error) {
        await sock.sendMessage(
          basic.numberFormatter(process.env.DEVELOPER_CONTACT),
          { text: controller.errText }
        )
      }

      await sock.sendMessage(
        msg.key.remoteJid,
        { text: controller.text }
      )

    })
  })

  Session.set("WASock", sock)
}

const stopSock = (manual = false) => {
  Session.set("manual", manual);
  Session.get("WASock")?.end()
  Session.delete("WASock")
}

/**
 * @return {import ("@whiskeysockets/baileys").WASocket}
 */
const getSession = () => {

  return Session.get("WASock") ?? null;
}

const sendMessageWTyping = async (msg, jid) => {
  /**
   * @type {import ("@whiskeysockets/baileys").WASocket;}
   */
  const session = getSession()
  if (session) {

    await session.presenceSubscribe(jid)
    await delay(500)
    await session.sendPresenceUpdate('composing', jid)
    await delay(2000)

    await session.sendPresenceUpdate('paused', jid)

    await session.sendMessage(jid, msg)
    return false;
  }

  applog('No Session was Connected to Whatsapp', "APP")
}

function logoutWhatsapp(manual = false) {
  Session.set("manual", manual);
  Session.get("WASock")?.logout()
  Session.delete("WASock")
}

export {
  startSock,
  stopSock,
  logoutWhatsapp,
  sendMessageWTyping,
  getSession,
};