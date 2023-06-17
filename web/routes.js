import { startWhatsappHandler, stopWhatsappHandler } from "./handler/Engine.js";
import { sendMessageHandler } from "./handler/Message.js"
import { Prisma, PrismaClient } from "../prisma/generated/sipp_client/index.js";
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
            res.view("datasource_sql.ejs", { schemas: Prisma.dmmf.datamodel.models })
        }
    },
    {
        method: "POST",
        url: "/datasource_sql/test",
        schema: {
            body: {
                type: 'object',
                properties: {
                    query: {
                        type: 'string',
                        minLength: 1,
                    }
                },
                required: ['query']
            }
        },
        async handler(req, res) {
            try {
                const prismadb = new PrismaClient()
                console.log(req.body.query)
                const result = await prismadb.$queryRaw`SELECT * FROM perkara WHERE nomor_perkara = '12/Pdt.G/2023/PA.JU'`
                console.log(result)
                return {
                    status: "Berhasil",
                    message: "Query Berjalan"
                }
            } catch (error) {
                return {
                    status: "Failed",
                    message: "Error : " + error
                }
            }
        }
    },
    {
        method: "POST",
        url: "/datasource_sql/get_field",
        schema: {
            body: {
                type: 'object',
                properties: {
                    schemaName: {
                        type: 'string',
                        minLength: 1,
                        pattern: '[a-zA-Z]+',
                    }
                },
                required: ['schemaName']
            }
        },
        handler(req, res) {
            try {
                const allFields = Prisma.dmmf.datamodel.models.filter((v, i, a) => {
                    return v.name === req.body.schemaName
                });

                const selfFields = allFields[0].fields.filter((v, i, a) => {
                    return v.kind === 'scalar'
                });

                return {
                    status: "Success",
                    data: selfFields
                }
            } catch (error) {
                return {
                    status: "Failed",
                    message: "Error : " + error
                }
            }

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


