const { perkara, perkara_jadwal_sidang } = require('../models');
const client = require('../whatsapp');
const { toFullDateWithTime } = require('../helper/date');
class SidangController {
    constructor({ perkara_id, nomor_perkara }, balasan, from) {
        this.perkara_id = perkara_id
        this.nomor_perkara = nomor_perkara
        this.balasan = balasan
        this.from = from
    }
    send = async () => {
        const { balasan, balasan_lainya } = this.balasan;

        const jadwal_sidang = await perkara_jadwal_sidang.findAll({
            where: {
                perkara_id: this.perkara_id
            },
            raw: true
        })

        let textJadwalSidang = '';

        jadwal_sidang.forEach(row => {
            textJadwalSidang += `*Sidang ke ${row.urutan}* pada tanggal ${toFullDateWithTime(row.tanggal_sidang)} dengan agenda ${row.agenda}` + "\n";
        });

        const textBalasan = (jadwal_sidang) ? balasan
            .replace('nomor_perkara', this.nomor_perkara)
            .replace('jadwal_sidang', textJadwalSidang) : balasan_lainya

        const messageResult = await client.sendMessage(this.from, textBalasan)
            .then(res => res)
            .catch(err => console.log(err))

    }
}

module.exports = SidangController