const { error } = require('qrcode-terminal');
const { client } = require('../whatsapp');
const axios = require('axios').default;
const moment = require('moment');
const { reverseNumberFormatter, numberFormatter } = require('../helper/basic');
class AntrianController {
	constructor(identifier, balasan, { from, id }) {
		this.identifier = identifier;
		this.balasan = balasan;
		this.id = id;
		this.from = from;
	}

	send() {
		axios.get('http://api.pa-jakartautara.go.id/antrian/sidang/on_call')
			.then(async (result) => {
				console.log(result.data)
				if (!result.data) {

					client.sendMessage(this.from, "Persidangan belum dimulai atau sudah selesai");
					return false;
				}
				const { balasan, balasan_lainya } = this.balasan;

				let textBalasan = "";
				if (balasan[this.identifier]) {

					let isiText = "*Nomor Antrian Yang Sedang Dipanggil*\n";
					result.data.forEach(({ nomor_antrian_sidang, updated_at }, i) => {
						isiText += `${++i}. Ruang : ${nomor_antrian_sidang.nama_ruang}\nNomor Antrian : ${nomor_antrian_sidang.nomor_urut}\nNomor Perkara : ${nomor_antrian_sidang.nomor_perkara}\nPihak Penggugat : ${nomor_antrian_sidang.pihak_satu}\nPihak Tergugat : ${nomor_antrian_sidang.pihak_dua}\nDipanggil pada ${moment(updated_at).fromNow()}`
					})

					textBalasan.replace('antrian_saat_ini', isiText)
				} else {
					textBalasan += balasan_lainya;
				}

				await client.sendMessage(this.from, textBalasan).then(res => {
					console.log(`Informasi antrian sidang Terkirim ke ${this.from} pada pukul ${moment().format()}`)
					socket.emit('sendLogMessageOut', {
						number: reverseNumberFormatter(this.from),
						message: textBalasan,
						reference_id: this.id.id,
					});
				});

				return false

			})
			.catch(error => {
				console.log(error)
				client.sendMessage(numberFormatter(process.env.DEVELOPER_CONTACT), `Error pada saat membalas informasi antrian sidang\n${error}`);

				client.sendMessage(this.from, "Terjadi kesalahan pada sistem kami. Silahkan hubungi kembali setelah beberapa saat. Mohon maaf atas ketidaknyaman nya");
				return false;
			})
	}
}

module.exports = AntrianController;