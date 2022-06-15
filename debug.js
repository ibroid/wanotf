const { PrismaClient } = require('@prisma/client');
const { register_pemberitahuan } = require("./messages");
const prisma = new PrismaClient()
const moment = require('moment');
const now = moment().locale('id').format('YYYY-MM-DD');

async function debug() {
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
        data.forEach(row => {
            const telepon = row.perkara.perkara_pihak1[0].pihak.telepon;
            const nomor_perkara = row.perkara.nomor_perkara;
            let textBalasan = registerAkta.pesan;
            textBalasan = String(textBalasan).replace('nomor_perkara', nomor_perkara)
            textBalasan = String(textBalasan).replace('nomor_perkara', nomor_perkara)
            if (telepon) {
                console.log(`Kirim pesan ke ${telepon} dengan pesan ${textBalasan}`);
            }
        })
    }
}


debug();
