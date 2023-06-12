import basic from "../../helper/basic.js"

/**
 * @type {import("fastify/types/hooks").onRequestHookHandler}
 */
function castNumber(request, reply, done) {
    if (request?.body?.number) {
        request.body.number = basic.numberFormatter(request.body.number)
    }
    done()
}

export default castNumber