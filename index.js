import { startSock, getSession } from "./whatsapp.js";
import Reply from "./reply.js";
import nodeCleanup from "node-cleanup"
import jobs from "./notification.js";

(async function initialize() {

  await startSock()

  jobs.start()

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




