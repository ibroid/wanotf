const { cleanString } = require('../helper/basic');
const { PrismaClient } = require('@prisma/client');
const { isNomorPerkara } = require('../helper/perkara');

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

		const pesan = register_alternatif.find(row => row.item == "awal")
		if (pesan) this.message.reply(pesan.text)
		return false;
	}

	async sendLog() {
		const contact = await this.message.getContact()
		this.socket.emit('sendLogMessageIn', {
			number: contact.number,
			name: contact.name,
			message: this.message.body,
		})
	}

	async replyToService(service, identifier) {
		const getService = register_balasan.find(element => element.kata_kunci == service)

		if (!getService) {
			const serviceNotFound = register_alternatif.find(element => element.code == 404 && element.item == "service");

			this.message.reply(serviceNotFound)
		}

		const Controller = require('../controller/' + getService.controller);

		if (isNomorPerkara(identifier) == true) {
			const data = await prisma.perkara.findUnique({
				where: {
					nomor_perkara: tujuan[1]
				}
			})

			if (!data) {
				const dataNotFound = register_alternatif.find(element => element.code == 404 && element.item == "perkara");

				this.message.reply(dataNotFound.text)
			}

			const pesan = new Controller(data, getService, this.message.from)
			pesan.send()
		}
	}

	replyInfo() {
		let textServices = '';
		const textSelamatDatang = register_pemberitahuan.find(row => row.keperluan == "pesan_awal")

		register_balasan.forEach(element => {
			textServices += `${element.judul} ${element.contoh}` + "\n";
		});

		const pesan = textSelamatDatang.pesan.replace('daftar_layanan', textServices)
		if (pesan) this.message.reply(pesan)
	}
}

module.exports = Reply;