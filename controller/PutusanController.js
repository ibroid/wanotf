const client = require("../whatsapp");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const Logger = require('../logger');
const moment = require('moment');

class PutusanController {
  constructor({ perkara_id, nomor_perkara }, balasan, from) {
    this.nomor_perkara = nomor_perkara;
    this.perkara_id = perkara_id;
    this.balasan = balasan;
    this.from = from;
  }
  send = async () => {
    const data = await prisma.perkara_putusan.findUnique({
      where: {
        perkara_id: this.perkara_id
      }
    })
    const { balasan_lainya, balasan } = this.balasan;

    if (data) {
      client.sendMessage(
        this.from,
        balasan
          .replace("nomor_perkara", this.nomor_perkara)
          .replace("amar_putusan", data.amar_putusan))
        .then((res) => {

          // const logger = new Logger("host", `Mengirim Informasi Putusan Ke ${this.from}`, "balasan");
          // logger.start();
          console.log(`Pesan Terkirim ke ${this.from} pada pukul ${moment().format()}`)


        })
        .catch((err) => console.log(err));

    } else {
      client
        .sendMessage(this.from, balasan_lainya)
        .then((res) => res)
        .catch((err) => console.log(err));
    }
  };
}

module.exports = PutusanController;
