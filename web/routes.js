import { startWhatsappHandler, stopWhatsappHandler } from "./handler/Engine.js";
import { sendMessageHandler } from "./handler/Message.js"

/**
 * @type {import("fastify/types/route").RouteOptions[]}
 */
const routes = [
    {
        method: "GET",
        url: "/",
        handler: (request, reply) => {
            reply.view("index.ejs")
        }
    },
    {
        method: "GET",
        url: "/api",
        handler(request, reply) {
            return {
                status: process.env.MODE,
                version: "NA"
            }
        }
    },
    {
        method: "GET",
        url: "/template/*",
        handler(request, reply) {
            reply.sendFile('template/' + request.params['*'])
        }
    },
    {
        method: "POST",
        url: "/api/send_message",
        schema: {
            body: {
                type: 'object',
                properties: {
                    text: {
                        type: 'string'
                    },
                    number: {
                        type: 'string'
                    }
                },
                required: ['text', 'number'],
            }
        },
        handler: sendMessageHandler,
    },
    {
        method: "POST",
        url: "/api/start_whatsapp",
        handler: startWhatsappHandler
    },
    {
        method: "POST",
        url: "/api/stop_whatsapp",
        handler: stopWhatsappHandler
    }

];

export default routes;


