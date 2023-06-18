import fastify from "fastify";
import fastifyView from "@fastify/view";
import fastifyStatic from "@fastify/static";
import fastifyWebsocket from "@fastify/websocket";
import { configDotenv } from "dotenv";
import routes from "./web/routes.js"
import castNumber from "./web/middleware/CastNumber.js";
import path from "path";
import { fileURLToPath } from 'url';
import { serviceCrudHandler, createServiceSchema, viewServiceSchema } from "./web/handler/Service.js";

configDotenv()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const devHttp = process.argv.includes("--dev-http")

const http = await fastify()
const port = process.env.HTTP_PORT ?? 8000;
const host = process.env.HTTP_URL ?? 'localhost';

const websocks = new Map()

http.register(fastifyView, {
    engine: {
        ejs: await import("ejs")
    },
    viewExt: "ejs",
    root: path.join(__dirname, "web/views")
})

http.register(fastifyWebsocket)

http.register(fastifyStatic, {
    root: path.join(__dirname, 'web/static'),
    prefix: '/static/',
    wildcard: true
})

http.register(async function (core) {
    core.get("/socket", { websocket: true }, (conn) => {
        conn.socket.on("message", msg => {
            conn.socket.send(JSON.stringify({
                event: "connected",
                payload: "ok"
            }))
        })

        websocks.set("sock", conn.socket)
    })
})

http.register(await import("fastify-crud-generator"), {
    prefix: "/service",
    controller: serviceCrudHandler,
    create: {
        schema: createServiceSchema
    },
    view: {
        schema: viewServiceSchema
    }
})

http.addHook("preHandler", castNumber)

routes.forEach(route => {
    http.route(route)
})

if (devHttp) {
    (function () {
        http.listen({ host, port })
            .then((val) => {
                console.log('Http Server Running on ' + port)
            })
            .catch(err => console.log('Http Server Error :' + err))
    })()
}

export { http, port, host, websocks };