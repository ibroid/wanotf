const { PrismaClient } = require('@prisma/client');
const moment = require('moment');
const prisma = new PrismaClient()
const { client } = require('../whatsapp');
const socket = require('../socket');
const { numberFormatter, reverseNumberFormatter } = require('../helper/basic');
const { toFullDate } = require('../helper/date');

class SidangController {
    constructor({ perkara_id, nomor_perkara }, balasan, { from, id }) {
        this.perkara_id = perkara_id
        this.nomor_perkara = nomor_perkara
        this.balasan = balasan
        this.from = from
        this.id = id
    }

    send = async () => {

        let jadwal_sidang;

        try {
            jadwal_sidang = await prisma.perkara_jadwal_sidang.findMany({
                where: {
                    perkara_id: this.perkara_id
                }
            })
        } catch (error) {
            client.sendMessage(process.env.DEVELOPER_CONTACT, `Error pada saat membalas informasi jadwal sidang\n\Log: ${error}`);

            client.sendMessage(this.from, "Terjadi kesalahan pada sistem kami. Silahkan hubungi kembali setelah beberapa saat. Mohon maaf atas ketidaknyaman nya");
            return false;
        }

        const { balasan, balasan_lainya } = this.balasan;
        if (!jadwal_sidang) {
            client.sendMessage(this.from, balasan_lainya);
            return false;
        }

        let textJadwalSidang = '';

        jadwal_sidang.forEach(row => {
            textJadwalSidang += `*Sidang ke ${row.urutan}* pada tanggal ${toFullDate(row.tanggal_sidang)} dengan agenda ${row.agenda}` + "\n";
        });

        const textBalasan = String(balasan)
            .replace('nomor_perkara', this.nomor_perkara)
            .replace('jadwal_sidang', textJadwalSidang)

        client.sendMessage(this.from, textBalasan)
            .then(res => {
                console.log(`Informasi jadwal sidang Terkirim ke ${this.from} pada pukul ${moment().format()}`)
                socket.emit('sendLogMessageOut', {
                    number: reverseNumberFormatter(this.from),
                    message: textBalasan,
                    reference_id: this.id.id,
                });
            }).catch(err => console.log(err))

    }
}

module.exports = SidangController