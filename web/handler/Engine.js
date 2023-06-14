import { startSock, getSession, stopSock, logoutWhatsapp } from "../../whatsapp.js";


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

function logoutWhatsappHandler() {
    try {
        logoutWhatsapp()
    } catch (error) {
        return {
            status: "Failed",
            message: "Error :" + error
        }
    }
    return {
        status: "Success",
        message: "Whatsapp was logged out"
    }
}

export {
    startWhatsappHandler,
    stopWhatsappHandler
}