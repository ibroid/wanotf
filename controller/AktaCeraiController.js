const { perkara_akta_cerai, perkara } = require("../models");
const client = require("../whatsapp");
const { toFullDate } = require("../helper/date");

class AktaCeraiController {
  constructor({ perkara_id }, balasan, from) {
    this.perkara_id = perkara_id;
    this.balasan = balasan;
    this.from = from;
  }
  send = async () => {
    const data = await perkara_akta_cerai.findOne({
      include: [{ model: perkara }],
      where: {
        perkara_id: this.perkara_id,
      },
      raw: true,
    });

    const { balasan, balasan_lainya } = this.balasan;

    if (data) {
      const textBalasan = data.tgl_akta_cerai
        ? balasan
            .replace("nomor_perkara", data.perkara.nomor_perkara)
            .replace("tanggal_akta_cerai", toFullDate(data.tgl_akta_cerai))
        : balasan_lainya;
      const messageResult = await client
        .sendMessage(this.from, textBalasan)
        .then((res) => res)
        .catch((err) => console.log(err));
    } else {
      const messageResult = await client
        .sendMessage(this.from, balasan_lainya)
        .then((res) => res)
        .catch((err) => console.log(err));
    }
  };
}

module.exports = AktaCeraiController;
