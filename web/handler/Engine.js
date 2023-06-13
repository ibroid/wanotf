import { startSock, getSession, stopSock } from "../../whatsapp.js";


/**
 * @type {import("fastify/types/route").RouteHandler}
 */

async function startWhatsappHandler() {
    const waSession = getSession();
    if (waSession) {
        return {
            status: "Failed",
            message: "Whatsapp already running"
        }
    }
    try {
        await startSock()
    } catch (error) {
        return {
            status: "Failed",
            message: "Error :" + error
        }
    }

    return {
        status: "Success",
        message: "Whatsapp is running"
    }
}

function stopWhatsappHandler() {
    try {
        stopSock(true)
    } catch (error) {
        return {
            status: "Failed",
            message: "Error :" + error
        }
    }

    return {
        status: "Success",
        message: "Whatsapp stop running"
    }
}

export {
    startWhatsappHandler,
    stopWhatsappHandler
}