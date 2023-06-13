import { websocks } from "../http";

/**
 * @param {String} msg 
 * @param {String} time 
 * @param {"WA" | "APP"} type 
 */
function sockLogger(msg, time, type) {

    websocks.get("sock")?.send({
        event: "log",
        payload: {
            msg,
            time,
            type
        }
    })
}

export default sockLogger;