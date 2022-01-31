const {
  perkara_akta_cerai,
  pihak,
  perkara_pihak1,
  Sequelize,
} = require("../models");
const moment = require("moment");
const client = require("../whatsapp");
const { Op } = Sequelize;
const register_pemberitahuan = require("../database/register_pemberitahuan.json");
const now = moment().local("id");
const { numberFormatter } = require("../helper/basic");
const { toFullDate } = require("../helper/date");

module.exports = {
  start: async () => {
    const data = await perkara_akta_cerai.findAll({
      include: [
        {
          model: perkara_pihak1,
          attributes: ["nama"],
          include: [{ model: pihak, attributes: ["nama", "telepon"] }],
        },
      ],
      where: {
        diinput_tanggal: {
          [Op.lt]: now.format("YYYY-MM-DD HH:mm:ss"),
          [Op.gt]: now.subtract({ hour: 1 }).format("YYYY-MM-DD HH:mm:ss"),
        },
      },
      raw: true,
    });

    const registerAktaCerai = register_pemberitahuan.find(
      (Element) => Element.keperluan == "pemberitahuan_akta"
    );

    if (data) {
      data.forEach(async (row) => {
        const { telepon } = row.perkara_pihak1.pihak;
        try {
          const resM = await client
            .sendMessage(
              numberFormatter(telepon.toString()),
              registerAktaCerai.pesan
            )
            .then((res) => res)
            .catch((err) => console.log(err));
        } catch (error) {
          console.log(err);
        }
      });
    }
  },
};
