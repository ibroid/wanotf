import { PrismaClient } from '@prisma/client';
import moment from 'moment';
const prisma = new PrismaClient()
import { toFullDate } from "../helper/date.js"


class SidangController {
    text;
    error = false;
    errText = null;

    constructor({ perkara_id, nomor_perkara }, balasan) {
        this.perkara_id = perkara_id
        this.nomor_perkara = nomor_perkara
        this.balasan = balasan
    }

    init = async () => {

        let jadwal_sidang;

        try {
            jadwal_sidang = await prisma.perkara_jadwal_sidang.findMany({
                where: {
                    perkara_id: this.perkara_id
                }
            })
        } catch (error) {
            // sendMessageWTyping({ text: `Error pada saat membalas informasi jadwal sidang\n\Log: ${error}` }, numberFormatter(process.env.DEVELOPER_CONTACT));
            this.error = true;
            this.errText = `Error pada saat membalas informasi jadwal sidang\n\Log: ${error}`;

            // sendMessageWTyping({ text: "Terjadi kesalahan pada sistem kami. Silahkan hubungi kembali setelah beberapa saat. Mohon maaf atas ketidaknyaman nya" }, this.from);
            this.text = "Terjadi kesalahan pada sistem kami. Silahkan hubungi kembali setelah beberapa saat. Mohon maaf atas ketidaknyaman nya";
            return false;
        }

        const { balasan, balasan_lainya } = this.balasan;
        if (!jadwal_sidang) {
            // sendMessageWTyping({ text: balasan_lainya }, this.from);
            this.text = balasan_lainya;
            return false;
        }

        let textJadwalSidang = '';

        jadwal_sidang.forEach(row => {
            textJadwalSidang += `*Sidang ke ${row.urutan}* pada tanggal ${toFullDate(row.tanggal_sidang)} dengan agenda ${row.agenda}` + "\n";
        });

        const textBalasan = String(balasan)
            .replace('nomor_perkara', this.nomor_perkara)
            .replace('jadwal_sidang', textJadwalSidang)

        console.log(`Informasi jadwal sidang Terkirim ke ${this.from} pada pukul ${moment().format()}`)

        // sendMessageWTyping({ text: textBalasan }, this.from)
        this.text = textBalasan;
    }
}

export default SidangController