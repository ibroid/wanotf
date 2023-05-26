import basic from "../helper/basic.js"
import moment from 'moment';
import { PrismaClient } from '@prisma/client';
import template from "../template.js";
import { sendMessageWTyping } from "../whatsapp.js";

const { reverseNumberFormatter, numberFormatter } = basic
const { register_pemberitahuan } = template;
const prisma = new PrismaClient()

const now = moment().locale('id').format('YYYY-MM-DD');

export default async function NotifikasiSidang() {
  console.log("Memulai notifikasi jadwal sidang");

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

  console.log(`Terdapat ${data.length} jadwal sidang untuk dikirim notifikasi`)

  const registerJadwalSidang = register_pemberitahuan.find(
    (Element) => Element.keperluan == "pemberitahuan_sidang"
  );

  if (!data || (Array.isArray(data) && data.length === 0)) {
    console.log('Data sidang tidak ada. Notifikasi sidang tidak terjalankan')
    return;
  }

  data.forEach((row, i) => {
    const pengaju = row.perkara_pihak1[0];

    if (!pengaju.pihak.telepon) {
      console.log('Data Pihak tidak ada. Notifikasi sidang tidak terjalankan')
      return;

    }
    const jadwalSidang = row.perkara_jadwal_sidang[0];

    if (!jadwalSidang) {
      console.log('Jadwal sidang tidak ada. Notifikasi sidang tidak terjalankan')
      return;
    }

    const textNotifikasi = registerJadwalSidang.pesan
      .replace("nama_pihak", pengaju.pihak.nama)
      .replace("nomor_perkara", row.nomor_perkara)
      .replace("urutan_sidang", (jadwalSidang.urutan) ? jadwalSidang.urutan : " ")
      .replace("ruang_sidang", (jadwalSidang.ruangan) ? jadwalSidang.ruangan : "Asyuraih")
      .replace("tanggal_sidang", moment(jadwalSidang.tanggal_sidang).locale('id').format('dddd LL'));

    setTimeout(async () => {

      try {
        const notifMessage = `Notifikasi sidang nomor ${row.nomor_perkara} Terkirim ke ${pengaju.pihak.telepon} pada pukul ${moment().format()}`;

        await sendMessageWTyping({ text: textNotifikasi }, numberFormatter(pengaju.pihak.telepon))


        console.log(notifMessage);

        await sendMessageWTyping({ text: notifMessage }, numberFormatter(process.env.DEVELOPER_CONTACT))

      } catch (error) {
        const errMessage = `Error saat notifikasi sidang nomor ${row.nomor_perkara} ke ${ros.pihak.telepon}. Error : ${error}`;

        await sendMessageWTyping({ text: errMessage }, numberFormatter(process.env.DEVELOPER_CONTACT))

        console.log(errMessage)
      }

    }, 1000 * 60 * i)
  })
}

