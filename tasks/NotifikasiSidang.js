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
    const data = await prisma.perkara.findMany({
      select: {
        nomor_perkara: true,
        perkara_jadwal_sidang: {
          select: {
            tanggal_sidang: true,
            agenda: true,
            urutan: true,
            ruangan: true
          },
          where: {
            urutan: 1
          },
        },
        perkara_pihak1: {
          select: {
            pihak: {
              select: {
                nama: true,
                alamat: true,
                telepon: true
              }
            }
          }
        }
      },
      where: {
        tanggal_pendaftaran: new Date(now)
      },

    })

    const registerJadwalSidang = register_pemberitahuan.find(
      (Element) => Element.keperluan == "pemberitahuan_sidang"
    );

    if (data) {
      data.forEach(row => {
        row.perkara_pihak1.forEach(async ros => {

          const jadwalSidang = row.perkara_jadwal_sidang[0]

          const textBalasan = registerJadwalSidang.pesan
            .replace("nama_pihak", ros.pihak.nama)
            .replace("nomor_perkara", row.nomor_perkara)
            .replace("urutan_sidang", jadwalSidang.urutan)
            .replace("ruang_sidang", (jadwalSidang.urutan) ? jadwalSidang.ruangan : "Asyuraih")
            .replace("tanggal_sidang", moment(jadwalSidang.tanggal_sidang).locale('id').format('dddd LL'));

          if (ros.pihak.telepon) {

            try {
              await client
                // .sendMessage(numberFormatter(String(ros.pihak.telepon)), textBalasan)
                .sendMessage(numberFormatter(String(process.env.DEVELOPER_CONTACT)), textBalasan)
                .then((res) => {

                  console.log(`Notifikasi Terkirim ke ${ros.pihak.telepon} pada pukul ${moment().format()}`);

                  // const logger = new Logger('host', `Pemberitahuan Jadwal Sidang Pertama kepada pihak dengan nomor ${ros.pihak.telepon}`, 'notifikasi')

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
      })
    }
  },
};
