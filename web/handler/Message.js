import { getSession } from "../../whatsapp.js";

/**
 * @type {import("fastify/types/route").RouteHandler}
 */
async function sendMessageHandler(request, reply) {

    const session = getSession()
    const { number, text } = request.body

    if (!session) {
        return {
            status: "Fail",
            message: "Whatsapp Engine not Running",
        }
    }

    try {

        await session.sendMessage(number, { text })

    } catch (error) {

        return {
            status: "Failed",
            message: "Error : " + error
        }

    }

    return {
        status: "Success",
        message: "Pesan telah dikirim ke " + request.body.number
    }
}


export {
    sendMessageHandler
}