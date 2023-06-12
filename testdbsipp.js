import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

prisma.sys_config.findMany()
    .then((val) => {
        val.forEach(row => {
            console.log(`${row.name} : ${row.value}`)
        })
    })
    .catch(err => console.log(err))
    .finally(() => console.log('Done Showing Info'))