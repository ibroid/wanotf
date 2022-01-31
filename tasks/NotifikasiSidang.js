const {
  perkara_jadwal_sidang,
  Sequelize,
  perkara_pihak1,
  pihak,
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
    const data = await perkara_jadwal_sidang.findAll({
      include: [
        {
          model: perkara_pihak1,
          attributes: ["nama"],
          include: [{ model: pihak, attributes: ["telepon", "nama"] }],
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

    const registerJadwalSidang = register_pemberitahuan.find(
      (Element) => Element.keperluan == "pemberitahuan_sidang"
    );

    if (data) {
      data.forEach(async (row) => {
        const textBalasan = registerJadwalSidang.pesan
          .replace("nama_pihak", row.perkara_pihak1.nama)
          .replace("urutan_sidang", row.urutan)
          .replace("ruang_sidang", row.ruangan ? row.ruangan : "Asyuraih")
          .replace("tanggal_sidang", toFullDate(row.tanggal_sidang));
        const { telepon } = row.perkara_pihak1.pihak;

        try {
          const resM = await client
            .sendMessage(numberFormatter(telepon.toString()), textBalasan)
            .then((res) => res)
            .catch((err) => console.log(err));
        } catch (error) {
          console.log(err);
        }
      });
    }
  },
};
