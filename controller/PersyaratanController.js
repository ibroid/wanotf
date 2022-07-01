const { PrismaClient } = require('@prisma/client');
const moment = require('moment');
const prisma = new PrismaClient()
const { client } = require('../whatsapp');
const socket = require('../socket');
const { reverseNumberFormatter } = require('../helper/basic');
const { toFullDate } = require('../helper/date');

class SidangController {
    constructor(identifier, balasan, { from, id }) {
        this.balasan = balasan
        this.from = from
        this.id = id
        this.identifier = identifier
    }

    send = () => {

        const { balasan, balasan_lainya } = this.balasan;


        let textBalasan = '';
        if (balasan[this.identifier]) {
            balasan[this.identifier].forEach((row, i) => {
                textBalasan += `${++i}. ${row}\n`
            })
        } else {
            textBalasan += balasan_lainya
        }
        // const textBalasan = (balasan[this.identifier]) ? balasan[this.identifier] : balasan_lainya;

        client.sendMessage(this.from, textBalasan)
            .then(res => {
                console.log(`Informasi persyaratan perkara Terkirim ke ${this.from} pada pukul ${moment().format()}`)
                socket.emit('sendLogMessageOut', {
                    number: reverseNumberFormatter(this.from),
                    message: textBalasan,
                    reference_id: this.id.id,
                });
            }).catch(err => console.log(err))

    }
}

module.exports = SidangController