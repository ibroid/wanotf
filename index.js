import { startSock, getSession } from "./whatsapp.js";
import Reply from "./reply.js";
import nodeCleanup from "node-cleanup"

(async function initialize() {

  const sock = await startSock()


})()

nodeCleanup(() => {
  const autologout = process.argv.includes('--auto-logout')
  /**
   * @type {import ("@whiskeysockets/baileys").WASocket;}
   */
  const session = getSession();

  if (session && autologout) {
    console.log("Logout from Whatsapp before close the application")
    session.logout()
  }

})




