import { websocks } from "../http.js";

/**
 * @param {String} msg 
 * @param {String} time 
 * @param {"WA" | "APP"} type 
 */
function sockLogger(msg, time, type) {

    try {
        websocks.get("sock")?.send(JSON.stringify({
            event: "log",
            payload: {
                msg,
                time,
                type
            }
        }))
    } catch (error) {
        console.log('cannot send sock log')
    }

}

export default sockLogger;