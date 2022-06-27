const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const { client } = require('../whatsapp');
const { toFullDate } = require('../helper/date');
const { rupiah, jenisTrans } = require('../helper/nominal');
const { numberFormatter, reverseNumberFormatter } = require('../helper/basic');
const angkaTerbilang = require('@develoka/angka-terbilang-js');
const socket = require('../socket');
const moment = require('moment');

class TransaksiController {
    constructor({ perkara_id, nomor_perkara }, balasan, { from, id }) {
        this.perkara_id = perkara_id
        this.nomor_perkara = nomor_perkara
        this.balasan = balasan
        this.from = from
        this.id = id
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
            client.sendMessage(numberFormatter(process.env.DEVELOPER_CONTACT), `Error pada saat membalas informasi transaksi\n\Log: ${error}`);

            client.sendMessage(numberFormatter(this.from), "Terjadi kesalahan pada sistem kami. Silahkan hubungi kembali setelah beberapa saat. Mohon maaf atas ketidaknyaman nya");
            return false
        }

        const { balasan, balasan_lainya } = this.balasan;

        if (!pembayaran) {
            client.sendMessage(this.from, balasan_lainya).catch(err => console.log(err))
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
        client.sendMessage(this.from, textBalasan)
            .then(res => {
                console.log(`Informasi Transaksi Terkirim ke ${this.from} pada pukul ${moment().format()}`)
                socket.emit('sendLogMessageOut', {
                    number: reverseNumberFormatter(this.from),
                    message: textBalasan,
                    reference_id: this.id.id,
                })
            })
            .catch(err => console.log(err))

    }
}

module.exports = TransaksiController