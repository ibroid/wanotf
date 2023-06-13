import { startSock, getSession } from "./whatsapp.js";
import nodeCleanup from "node-cleanup"
import jobs from "./notification.js";
import { http, host, port } from "./http.js";

(async function initialize() {

  http.ready((err) => {
    if (err) console.log('Http Server Error :' + err);

    console.log('Http Server Running on ' + port)

    // startSock()
  })

  http.listen({
    host,
    port
  })

  jobs.start()

})()

nodeCleanup(() => {
  const autologout = process.argv.includes('--auto-logout')

  const session = getSession();

  if (session && autologout) {
    console.log("Logout from Whatsapp before close the application")
    session.logout()
  }
})




