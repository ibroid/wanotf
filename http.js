import fastify from "fastify";
import { configDotenv } from "dotenv";
import fastifyView from "@fastify/view";
import routes from "./web/routes.js"
import castNumber from "./web/middleware/CastNumber.js";

configDotenv()

const devHttp = process.argv.includes("--dev-http")

const http = fastify()
const port = process.env.HTTP_PORT ?? 8000;
const host = process.env.HTTP_URL ?? 'localhost';

http.register(fastifyView, {
    engine: {
        ejs: await import("ejs")
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

export { http, port, host };