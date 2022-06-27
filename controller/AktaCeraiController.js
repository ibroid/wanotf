const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const { numberFormatter, reverseNumberFormatter } = require('../helper/basic');
const { client } = require("../whatsapp");
const moment = require('moment');
const { toFullDate } = require("../helper/date");

class AktaCeraiController {
  constructor({ perkara_id }, balasan, { from, id }) {
    this.perkara_id = perkara_id;
    this.balasan = balasan;
    this.from = from;
    this.id = id;
  }
  send = async () => {
    let data;
    try {
      data = await prisma.perkara_akta_cerai.findUnique({
        where: {
          perkara_id: this.perkara_id
        },
        include: {
          perkara: true
        }
      })
    } catch (error) {
      client.sendMessage(process.env.DEVELOPER_CONTACT, `Error pada saat membalas informasi akta cerai\n\Log: ${error}`);

      client.sendMessage(this.from, "Terjadi kesalahan pada sistem kami. Silahkan hubungi kembali setelah beberapa saat. Mohon maaf atas ketidaknyaman nya");
      return false;
    }

    const { balasan, balasan_lainya } = this.balasan;

    if (!data) {
      client.sendMessage(this.from, balasan_lainya).catch((err) => console.log(err));
      return false;
    }

    const textBalasan = data.tgl_akta_cerai
      ? balasan
        .replace("nomor_perkara", data.perkara.nomor_perkara)
        .replace("tanggal_akta_cerai", toFullDate(data.tgl_akta_cerai))
      : balasan_lainya;

    client.sendMessage(this.from, textBalasan)
      .then(() => {

        console.log(`Informasi AKta cerai Terkirim ke ${this.from} pada pukul ${moment().format()}`)
        socket.emit('sendLogMessageOut', {
          number: reverseNumberFormatter(this.from),
          message: textBalasan,
          reference_id: this.id.id,
        })
      }
      )
      .catch((err) => console.log(err));

  };
}

module.exports = AktaCeraiController;
