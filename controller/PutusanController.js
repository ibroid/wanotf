const client = require("../whatsapp");
const { toFullDate } = require("../helper/date");
const { perkara_putusan } = require("../models");

class PutusanController {
  constructor({ perkara_id, nomor_perkara }, balasan, from) {
    this.nomor_perkara = nomor_perkara;
    this.perkara_id = perkara_id;
    this.balasan = balasan;
    this.from = from;
  }
  send = async () => {
    const data = await perkara_putusan.findOne({
      where: {
        perkara_id: this.perkara_id,
      },
    });
    const { balasan_lainya, balasan } = this.balasan;

    if (data) {
      const resM = client
        .sendMessage(
          this.from,
          balasan
            .replace("nomor_perkara", this.nomor_perkara)
            .replace("amar_putusan", data.amar_putusan)
        )
        .then((res) => res)
        .catch((err) => console.log(err));
    } else {
      const resM = client
        .sendMessage(this.from, balasan_lainya)
        .then((res) => res)
        .catch((err) => console.log(err));
    }
  };
}

module.exports = PutusanController;
