import moment from 'moment';
import { sendMessageWTyping } from '../whatsapp.js';

class PersyaratanController {
    constructor(identifier, balasan, from) {
        this.balasan = balasan
        this.from = from
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

        sendMessageWTyping({ text: textBalasan }, this.from)
        console.log(`Informasi persyaratan perkara Terkirim ke ${this.from} pada pukul ${moment().format()}`)
    }
}

export default PersyaratanController;