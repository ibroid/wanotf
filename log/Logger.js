import moment from "moment"
import sockLogger from "./SockLogger.js";
const now = moment().locale('id').format('YYYY-MM-DD HH:mm:ss');

/**
 * @param {String} msg
 * @param {"WA" | "APP"} type 
 */
function applog(msg, type = "APP") {
    console.log(`Log: ${msg}. Time :${now}`)
    sockLogger(msg, now, type)
}

export default applog