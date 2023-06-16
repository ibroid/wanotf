import { startWhatsappHandler, stopWhatsappHandler } from "./handler/Engine.js";
import { sendMessageHandler } from "./handler/Message.js"
import { Prisma } from "../prisma/generated/sipp_client/index.js";
/**
 * @type {import("fastify/types/route").RouteOptions[]}
 */
const routes = [
    {
        method: "GET",
        url: "/",
        handler: (request, reply) => {
            reply.view("index.ejs", {
                menu: 'dashboard'
            })
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
        method: "GET",
        url: "/services",
        handler(req, res) {
            res.view("services.ejs")
        }
    },
    {
        method: "GET",
        url: "/message_template",
        handler(req, res) {
            res.view("message_template.ejs")
        }
    },
    {
        method: "GET",
        url: "/key_value",
        handler(req, res) {
            res.view("key_value.ejs")
        }
    },
    {
        method: "GET",
        url: "/datasource_sql",
        handler(req, res) {
            console.log(Prisma.dmmf.datamodel.models)
            res.view("datasource_sql.ejs", { schemas: "asa" })
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
                        type: 'string',
                        nullable: false,
                        minLength: 1
                    },
                    number: {
                        type: 'string',
                        minLength: 10
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
    },
    {
        method: "POST",
        url: "/api/logout_whatsapp",
        handler: stopWhatsappHandler
    },

];

export default routes;


