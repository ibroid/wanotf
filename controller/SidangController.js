const { PrismaClient } = require('@prisma/client');
const Logger = require('../logger');
const moment = require('moment');
const prisma = new PrismaClient()
const client = require('../whatsapp');

const { toFullDate } = require('../helper/date');

class SidangController {
    constructor({ perkara_id, nomor_perkara }, balasan, from) {
        this.perkara_id = perkara_id
        this.nomor_perkara = nomor_perkara
        this.balasan = balasan
        this.from = from
    }

    send = async () => {
        const { balasan, balasan_lainya } = this.balasan;

        const jadwal_sidang = await prisma.perkara_jadwal_sidang.findMany({
            where: {
                perkara_id: this.perkara_id
            }
        })

        let textJadwalSidang = '';

        jadwal_sidang.forEach(row => {
            textJadwalSidang += `*Sidang ke ${row.urutan}* pada tanggal ${toFullDate(row.tanggal_sidang)} dengan agenda ${row.agenda}` + "\n";
        });

        const textBalasan = (jadwal_sidang) ? balasan
            .replace('nomor_perkara', this.nomor_perkara)
            .replace('jadwal_sidang', textJadwalSidang) : balasan_lainya

        await client.sendMessage(this.from, textBalasan)
            .then(res => {

                // const logger = new Logger("host", `Mengirim Informasi Sidang Ke ${this.from}`, "balasan");
                // logger.start();

                console.log(`Pesan Terkirim ke ${this.from} pada pukul ${moment().format()}`)


            })
            .catch(err => console.log(err))

    }
}

module.exports = SidangController