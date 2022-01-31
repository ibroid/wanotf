const { perkara_biaya } = require('../models');
const client = require('../whatsapp');
const { toFullDate } = require('../helper/date');
const { rupiah, jenisTrans } = require('../helper/nominal');
const angkaTerbilang = require('@develoka/angka-terbilang-js');
class TransaksiController {
    constructor({ perkara_id, nomor_perkara }, balasan, from) {
        this.perkara_id = perkara_id
        this.nomor_perkara = nomor_perkara
        this.balasan = balasan
        this.from = from
    }
    send = async () => {
        const { balasan, balasan_lainya } = this.balasan;
        const pembayaran = await perkara_biaya.findAll({
            where: {
                perkara_id: this.perkara_id
            },
            raw: true
        });
        let num = 1;

        let textRiwayatPembayaran = '';
        let saldoMasuk = 0;
        let saldoKeluar = 0;
        pembayaran.forEach(row => {
            if (row.jenis_transaksi == 1) {
                saldoMasuk += parseFloat(row.jumlah.replace('.00', ''));
            } else {
                saldoKeluar += parseFloat(row.jumlah.replace('.00', ''));
            }

            textRiwayatPembayaran += `*${num++}. Transaksi ${jenisTrans(row.jenis_transaksi)} untuk pembayaran ${row.uraian}* pada tanggal ${toFullDate(row.tanggal_transaksi)} sejumlah ${angkaTerbilang(row.jumlah.replace('.00', ''))} rupiah (${rupiah(row.jumlah.replace('.00', ''))})` + "\n"
        });

        textRiwayatPembayaran += "\n";
        textRiwayatPembayaran += "*Saldo Masuk* : " + rupiah(saldoMasuk.toString()) + "\n";
        textRiwayatPembayaran += "*Saldo Keluar* : " + rupiah(saldoKeluar.toString()) + "\n";
        textRiwayatPembayaran += "*Sisa Saldo* : " + rupiah(String(saldoMasuk - saldoKeluar));

        const textBalasan = (pembayaran) ? balasan
            .replace('nomor_perkara', this.nomor_perkara)
            .replace('riwayat_pembayaran', textRiwayatPembayaran) : balasan_lainya

        const messageResult = await client.sendMessage(this.from, textBalasan)
            .then(res => res)
            .catch(err => console.log(err))

    }
}

module.exports = TransaksiController