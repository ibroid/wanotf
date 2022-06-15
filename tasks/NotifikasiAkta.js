const client = require("../whatsapp");
const { numberFormatter } = require("../helper/basic");
const Logger = require('../logger');
const { PrismaClient } = require('@prisma/client');
const { register_pemberitahuan } = require("../messages");
const prisma = new PrismaClient()
const moment = require('moment');
const now = moment().locale('id').format('YYYY-MM-DD');

module.exports = {
    start: async () => {
        const data = await prisma.perkara_akta_cerai.findMany({
            select: {
                nomor_akta_cerai: true,
                perkara_id: true,
                tgl_akta_cerai: true,
                perkara: {
                    select: {
                        nomor_perkara: true,
                        perkara_pihak1: {
                            select: {
                                nama: true,
                                pihak: {
                                    select: {
                                        telepon: true
                                    }
                                }
                            }
                        }
                    },
                }
            },
            where: {
                tgl_akta_cerai: new Date(now)
            }
        })

        const registerAkta = register_pemberitahuan.find(
            (Element) => Element.keperluan == "pemberitahuan_akta"
        );

        if (data) {

            data.forEach(async row => {

                const telepon = row.perkara.perkara_pihak1[0].pihak.telepon;

                let textBalasan = registerAkta.pesan;
                textBalasan = String(textBalasan).replace('nomor_perkara', row.perkara.nomor_perkara)
                textBalasan = String(textBalasan).replace('nomor_perkara', row.perkara.nomor_perkara)

                if (telepon) {
                    try {
                        // await client.sendMessage(numberFormatter(telepon), textBalasan)
                        await client.sendMessage(numberFormatter(process.env.DEVELOPER_CONTACT), textBalasan)
                            .then(res => {

                                console.log(`Notifikasi Terkirim ke ${telepon} pada pukul ${moment().format()}`);

                                // const logger = new Logger('host', `Pemberitahuan Jadwal Sidang Pertama kepada pihak dengan nomor ${telepon}`, 'notifikasi')

                                // logger.start()

                            })
                    } catch (error) {
                        await client
                            .sendMessage(numberFormatter(String(process.env.DEVELOPER_CONTACT)), "Terdapat error \n\n" + error)
                            .then((res) => res)
                            .catch((err) => console.log(err));

                    }

                }
            })
        }

    }
}


