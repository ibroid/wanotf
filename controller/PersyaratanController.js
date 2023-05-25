import moment from 'moment';
import { sendMessageWTyping } from '../whatsapp.js';

class PersyaratanController {
    text;
    error = false;
    errText = null;

    constructor(identifier, balasan) {
        this.balasan = balasan
        this.identifier = identifier
    }

    init = async () => {

        const { balasan, balasan_lainya } = this.balasan;


        let textBalasan = '';
        if (balasan[this.identifier]) {
            balasan[this.identifier].forEach((row, i) => {
                textBalasan += `${++i}. ${row}\n`
            })
        } else {
            textBalasan += balasan_lainya
        }

        // sendMessageWTyping({ text: textBalasan }, this.from)
        this.text = textBalasan;

        console.log(`Informasi persyaratan perkara Terkirim ke ${this.from} pada pukul ${moment().format()}`)
    }
}

export default PersyaratanController;