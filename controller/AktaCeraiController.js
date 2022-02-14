const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const client = require("../whatsapp");
const Logger = require('../logger');
const moment = require('moment');
const { toFullDate } = require("../helper/date");

class AktaCeraiController {
  constructor({ perkara_id }, balasan, from) {
    this.perkara_id = perkara_id;
    this.balasan = balasan;
    this.from = from;
  }
  send = async () => {
    const data = await prisma.perkara_akta_cerai.findUnique({
      where: {
        perkara_id: this.perkara_id
      },
      include: {
        perkara: true
      }
    })

    const { balasan, balasan_lainya } = this.balasan;

    if (data) {
      const textBalasan = data.tgl_akta_cerai
        ? balasan
          .replace("nomor_perkara", data.perkara.nomor_perkara)
          .replace("tanggal_akta_cerai", toFullDate(data.tgl_akta_cerai))
        : balasan_lainya;

      await client
        .sendMessage(this.from, textBalasan)
        .then((res) => {

          const logger = new Logger("host", `Mengirim Informasi Akta Ke ${this.from}`, "balasan");
          console.log(`Pesan Terkirim ke ${this.from} pada pukul ${moment().format()}`)

          logger.start();

        })
        .catch((err) => console.log(err));

    } else {
      await client
        .sendMessage(this.from, balasan_lainya)
        .then((res) => res)
        .catch((err) => console.log(err));
    }
  };
}

module.exports = AktaCeraiController;
