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
		if (service.length > 1) return this.replyToService(service[0].toLowerCase());

	}

	async sendLog() {
		const contact = await this.message.getContact()
		this.socket.emit('sendLogMessageIn', {
			number: contact.number,
			name: contact.name,
			message: this.message.body,
		})
	}

	async replyToService(service) {
		const getService = register_balasan.find(element => element.kata_kunci == service)

		if (getService) {
			const Controller = require('../controller/' + getService.controller);
			const message = new Controller()
			message.send()
		}

	}
}

module.exports = Reply;