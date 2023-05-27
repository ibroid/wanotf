import axios from 'axios';
import moment from 'moment';
import basic from "../helper/basic.js";

const { reverseNumberFormatter, numberFormatter } = basic;

class AntrianController {
	text;
	error = false;
	errText = null;

	constructor(identifier, balasan) {
		this.identifier = identifier;
		this.balasan = balasan;
	}

	async init() {
		this.text = "Untuk sementara informasi antrian belum bisa di proses. Silahkan kunjungi link alternatif berikut untuk melihat antrian\n\nhttps://antrian.pajakartautara.id/"
	}
}

export default AntrianController;