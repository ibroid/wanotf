import moment from "moment"
import sockLogger from "./SockLogger";
const now = moment().locale('id').format('YYYY-MM-DD HH:mm:ss');

/**
 * @param {String} msg
 * @param {"WA" | "APP"} type 
 */
function applog(msg, type) {
    console.log(`Log: ${msg}. Time :${now}`)
    sockLogger(msg, now, type)
}

export default applog