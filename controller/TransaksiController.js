const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const client = require('../whatsapp');
const { toFullDate } = require('../helper/date');
const { rupiah, jenisTrans } = require('../helper/nominal');
const angkaTerbilang = require('@develoka/angka-terbilang-js');

const Logger = require('../logger');
const moment = require('moment');

class TransaksiController {
    constructor({ perkara_id, nomor_perkara }, balasan, from) {
        this.perkara_id = perkara_id
        this.nomor_perkara = nomor_perkara
        this.balasan = balasan
        this.from = from
    }

    send = async () => {
        const { balasan, balasan_lainya } = this.balasan;

        const pembayaran = await prisma.perkara_biaya.findMany({
            where: {
                perkara_id: this.perkara_id
            }
        })
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

        const textBalasan = (pembayaran) ? balasan
            .replace('nomor_perkara', this.nomor_perkara)
            .replace('riwayat_pembayaran', textRiwayatPembayaran) : balasan_lainya

        await client.sendMessage(this.from, textBalasan)
            .then(res => {

                const logger = new Logger("host", `Mengirim Informasi Transaksi Ke ${this.from}`, "balasan");

                console.log(`Pesan Terkirim ke ${this.from} pada pukul ${moment().format()}`)

                logger.start();

            })
            .catch(err => console.log(err))

    }
}

module.exports = TransaksiController