const { cleanString, numberFormatter } = require('../helper/basic');
const { PrismaClient } = require('@prisma/client');
const { isNomorPerkara } = require('../helper/perkara');
const { client } = require('../whatsapp');
const prisma = new PrismaClient()
const {
	register_alternatif,
	register_balasan,
	register_pemberitahuan }
	= require('../messages');

const socket = require('../socket');

class Reply {
	constructor(message) {
		this.message = message;
		this.socket = socket;

		this.init();
		this.sendLog()
	}

	init() {
		const service = this.message.body.split('#');
		if (service.length > 1) return this.replyToService(cleanString(service[0]), service[1]);
		if (cleanString(this.message.body) == 'info') return this.replyInfo();

		console.log('Pesan masuk permintaan informasi awal')
		const pesan = register_alternatif.find(row => row.item == "awal")
		this.message.reply(pesan.text)
		this.sendLogOut(pesan.text)
		return false;
	}

	async replyToService(service, identifier) {
		const getService = register_balasan.find(element => element.kata_kunci == service)
		console.log('Pesan masuk permintaan informasi ' + service)

		if (!getService) {
			const serviceNotFound = register_alternatif.find(element => element.code == 404 && element.item == "service");
			this.message.reply(serviceNotFound.text)
			this.sendLogOut(serviceNotFound.text)
			return false;
		}

		const Controller = require('../controller/' + getService.controller);

		if (isNomorPerkara(identifier) == true) {
			let data;

			try {
				data = await prisma.perkara.findUnique({
					where: {
						nomor_perkara: identifier
					}
				})

			} catch (error) {
				client.sendMessage(numberFormatter(process.env.DEVELOPER_CONTACT), `Error pada saat mencari perkara\n\n${error}`);

				client.sendMessage(numberFormatter(this.from), "Terjadi kesalahan pada sistem kami. Silahkan hubungi kembali setelah beberapa saat. Mohon maaf atas ketidaknyaman nya");

				return false;
			}

			if (!data) {
				const dataNotFound = register_alternatif.find(element => element.code == 404 && element.item == "nomor_perkara");

				this.message.reply(dataNotFound.text)
				this.sendLogOut(dataNotFound.text)
				return false;
			}

			const pesan = new Controller(data, getService, this.message)
			pesan.send()
			return false;
		}

		const pesan = new Controller(identifier, getService, this.message)
		pesan.send()
	}

	replyInfo() {
		let textServices = '';
		const textSelamatDatang = register_pemberitahuan.find(row => row.keperluan == "pesan_awal")

		register_balasan.forEach(element => {
			textServices += `${element.judul} ${element.contoh}` + "\n";
		});

		const pesan = textSelamatDatang.pesan.replace('daftar_layanan', textServices)
		this.message.reply(pesan)
		this.sendLogOut(pesan)
	}

	async sendLog() {
		const contact = await this.message.getContact()
		this.socket.emit('sendLogMessageIn', {
			number: contact.number,
			name: contact.name,
			message: this.message.body,
			message_id: this.message.id.id,
		})
	}

	async sendLogOut(replyMessage) {
		const contact = await this.message.getContact()
		this.socket.emit('sendLogMessageOut', {
			number: contact.number,
			message: replyMessage,
			reference_id: this.message.id.id,
		})
	}
}

module.exports = Reply;