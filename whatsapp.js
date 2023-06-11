import NodeCache from 'node-cache'
import pkg from "@whiskeysockets/baileys";
import basic from "./helper/basic.js"

const { delay, DisconnectReason, fetchLatestBaileysVersion, getAggregateVotesInPollMessage, makeInMemoryStore, proto, useMultiFileAuthState, makeCacheableSignalKeyStore, isJidBroadcast, Browsers } = pkg

import Reply from './reply.js';

import P from 'pino'

const logger = P({ timestamp: () => `,"time":"${new Date().toJSON()}"` }).child({})
logger.level = 'trace'

// external map to store retry counts of messages when decryption/encryption fails
// keep this out of the socket itself, so as to prevent a message decryption/encryption loop across socket restarts
const msgRetryCounterCache = new NodeCache()

const Session = new Map();

// start a connection
const startSock = async () => {
  const { state, saveCreds } = await useMultiFileAuthState('baileys_auth_info')
  // fetch latest version of WA Web
  const { version, isLatest } = await fetchLatestBaileysVersion()
  console.log(`using WA v${version.join('.')}, isLatest: ${isLatest}`)

  /**
   * @type {import('@whiskeysockets/baileys').WASocket}
   */
  const sock = pkg.default({
    version,
    // logger,
    printQRInTerminal: true,
    auth: {
      creds: state.creds,
      /** caching makes the store faster to send/recv messages */
      keys: makeCacheableSignalKeyStore(state.keys, logger),
    },
    msgRetryCounterCache,
    generateHighQualityLinkPreview: true,
    // ignore all broadcast messages -- to receive the same
    // comment the line below out
    shouldIgnoreJid: jid => isJidBroadcast(jid),
    browser: Browsers.ubuntu('Chrome')
  })

  // the process function lets you process all events that just occurred
  // efficiently in a batch

  sock.ev.on('connection.update', (conn) => {

    const { connection, lastDisconnect } = conn

    if (connection === 'close') {
      // reconnect if not logged out
      if ((lastDisconnect?.error)?.output?.statusCode !== DisconnectReason.loggedOut) {
        startSock()
      } else {
        console.log('Connection closed. You are logged out.')
      }
    }

    console.log('connection update')
  })

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('messages.upsert', (message) => {
    message.messages.forEach(async (msg) => {

      if (msg.key.fromMe !== true) {
        return false;
      }

      if (msg.key.remoteJid !== 'status@broadcast') {

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

      if (reply.controller !== null) {
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
      } else {
        await sock.sendMessage(
          msg.key.remoteJid,
          { text: reply.text }
        )
      }
    })
  })

  Session.set("WASock", sock)

  return sock;
}

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

  console.log('No Session was Connected to Whatsapp')
}

export {
  startSock,
  sendMessageWTyping,
  getSession,
};