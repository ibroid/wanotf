import { PrismaClient } from "../../prisma/generated/local_client/index.js";

const prisma = new PrismaClient();

const serviceCrudHandler = {
    list: async (req, reply) => {
        try {
            const data = await prisma.service.findMany()
            return {
                status: "Success",
                data,
                message: "Berhasil mengambil data"
            }
        } catch (error) {
            return {
                status: "Failed",
                message: "Error : " + error
            }
        }
    },

    /**
     * @type {import("fastify/types/route").RouteHandler}  
     */
    create: async (req, reply) => {
        try {
            await prisma.service.create({
                data: req.body
            })
        } catch (error) {
            return {
                status: "Failed",
                message: "Error : " + error
            }
        }

        return {
            status: "Success",
            message: "Berhasil Menambahkan data Service"
        }
    },

    /**
     * @type {import("fastify/types/route").RouteHandler}  
     */
    view: async (req, reply) => {

        try {
            const data = await prisma.service.findFirstOrThrow({
                where: {
                    id: parseFloat(req.params.id)
                }
            })
            return {
                status: "Success",
                data,
                message: "Berhasil mengambil data"
            }
        } catch (error) {
            return {
                status: "Failed",
                message: "Error : " + error
            }
        }
    },

    /**
     * @type {import("fastify/types/route").RouteHandler}  
     */
    update: async (req, reply) => {
        try {
            await prisma.service.update({
                data: req.body,
                where: {
                    id: parseFloat(req.params.id)
                }
            })
        } catch (error) {
            return {
                status: "Failed",
                message: "Error : " + error
            }
        }
        return {
            status: "Success",
            message: "Berhasil Mengubah data Service"
        }
    },

    /**
     * @type {import("fastify/types/route").RouteHandler}  
     */
    delete: async (req, reply) => {
        try {
            await prisma.service.delete({
                where: {
                    id: parseInt(req.params.id)
                }
            })
        } catch (error) {
            return {
                status: "Failed",
                message: "Error : " + error
            }
        }
        return {
            status: "Success",
            message: "Berhasil Menghapus data Service"
        }
    }
}

const createServiceSchema = {
    body: {
        type: 'object',
        properties: {
            title: {
                type: 'string',
                maxLength: 64,
                nullable: false,
                pattern: '[A-Za-z]+',
                minLength: 8,
            },
            keyword: {
                type: 'string',
                maxLength: 64,
                nullable: false,
                pattern: '[A-Za-z]+',
                minLength: 1
            },
            sample: {
                type: 'string',
                nullable: false,
                pattern: '[A-Za-z]+',
                minLength: 8
            },
            desc: {
                type: 'string',
                maxLength: 64,
                nullable: false,
                pattern: '[A-Za-z]+',
                minLength: 8
            },
            separator: {
                type: 'string',
                pattern: '^.$',
            },
        },
        required: [
            'title',
            'keyword',
            'sample',
            'desc',
        ]
    }
}

const viewServiceSchema = {
    params: {
        type: 'object',
        properties: {
            id: {
                type: 'number'
            }
        },
        required: ['id']
    }
}



export { serviceCrudHandler, createServiceSchema, viewServiceSchema };