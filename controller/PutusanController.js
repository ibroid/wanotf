const { client } = require("../whatsapp");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const moment = require('moment');
const { numberFormatter, reverseNumberFormatter } = require('../helper/basic');

class PutusanController {
  constructor({ perkara_id, nomor_perkara }, balasan, { from, id }) {
    this.nomor_perkara = nomor_perkara;
    this.perkara_id = perkara_id;
    this.balasan = balasan;
    this.from = from;
    this.id = id;
  }
  send = async () => {
    let data;
    try {
      data = await prisma.perkara_putusan.findUnique({
        where: {
          perkara_id: this.perkara_id
        }
      })
    } catch (error) {
      client.sendMessage(process.env.DEVELOPER_CONTACT, `Error pada saat membalas informasi putusan\n\Log: ${error}`);

      client.sendMessage(this.from, "Terjadi kesalahan pada sistem kami. Silahkan hubungi kembali setelah beberapa saat. Mohon maaf atas ketidaknyaman nya");
      return false;
    }

    const { balasan_lainya, balasan } = this.balasan;

    if (!data) {
      client
        .sendMessage(this.from, balasan_lainya)
        .then((res) => res)
        .catch((err) => console.log(err));
      return false;
    }

    const textBalasan = String(balasan).replace("nomor_perkara", this.nomor_perkara).replace("amar_putusan", data.amar_putusan)

    client.sendMessage(this.from, textBalasan)
      .then((res) => {
        console.log(`Pesan Terkirim ke ${this.from} pada pukul ${moment().format()}`)
        socket.emit('sendLogMessageOut', {
          number: reverseNumberFormatter(this.from),
          message: textBalasan,
          reference_id: this.id.id,
        })
      })
      .catch((err) => console.log(err));

  };
}

module.exports = PutusanController;
