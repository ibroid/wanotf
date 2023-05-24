import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
import { sendMessageWTyping } from '../whatsapp.js';
import { toFullDate } from '../helper/date.js';
import { jenisTrans, rupiah } from "../helper/nominal.js"
import basic from "../helper/basic.js"
const { numberFormatter, reverseNumberFormatter } = basic;
import angkaTerbilang from '@develoka/angka-terbilang-js';
import moment from 'moment';

class TransaksiController {
    constructor({ perkara_id, nomor_perkara }, balasan, from) {
        this.perkara_id = perkara_id
        this.nomor_perkara = nomor_perkara
        this.balasan = balasan
        this.from = from
    }

    send = async () => {

        let pembayaran;
        try {
            pembayaran = await prisma.perkara_biaya.findMany({
                where: {
                    perkara_id: this.perkara_id
                }
            })

        } catch (error) {
            sendMessageWTyping({ text: `Error pada saat membalas informasi transaksi\n\Log: ${error}` }, numberFormatter(process.env.DEVELOPER_CONTACT));

            sendMessageWTyping({ text: "Terjadi kesalahan pada sistem kami. Silahkan hubungi kembali setelah beberapa saat. Mohon maaf atas ketidaknyaman nya" }, this.from);
            return false
        }

        const { balasan, balasan_lainya } = this.balasan;

        if (!pembayaran) {
            sendMessageWTyping({ text: balasan_lainya }, this.from)
            return false
        }

        let num = 1;

        let textRiwayatPembayaran = '';
        let saldoMasuk = 0;
        let saldoKeluar = 0;

        pembayaran.forEach(row => {
            if (row.jenis_transaksi == 1) {
                saldoMasuk += parseFloat(String(row.jumlah).replace('.00', ''));
            } else {
                saldoKeluar += parseFloat(String(row.jumlah).replace('.00', ''));
            }

            textRiwayatPembayaran += `*${num++}. Transaksi ${jenisTrans(row.jenis_transaksi)} untuk pembayaran ${row.uraian}* pada tanggal ${toFullDate(row.tanggal_transaksi)} sejumlah ${angkaTerbilang(String(row.jumlah).replace('.00', ''))} rupiah (${rupiah(String(row.jumlah).replace('.00', ''))})` + "\n"
        });

        textRiwayatPembayaran += "\n";
        textRiwayatPembayaran += "*Saldo Masuk* : " + rupiah(saldoMasuk.toString()) + "\n";
        textRiwayatPembayaran += "*Saldo Keluar* : " + rupiah(saldoKeluar.toString()) + "\n";
        textRiwayatPembayaran += "*Sisa Saldo* : " + rupiah(String(saldoMasuk - saldoKeluar));

        const textBalasan = String(balasan)
            .replace('nomor_perkara', this.nomor_perkara)
            .replace('riwayat_pembayaran', textRiwayatPembayaran)

        console.log(`Informasi Transaksi Terkirim ke ${this.from} pada pukul ${moment().format()}`)

        sendMessageWTyping({ text: textBalasan }, this.from)

    }
}

export default TransaksiController