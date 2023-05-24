import basicHelper from './helper/basic.js';
import { PrismaClient } from '@prisma/client';
import isNomorPerkara from './helper/perkara.js';

const prisma = new PrismaClient()
import templateText from './template.js';

const { cleanString, numberFormatter } = basicHelper;
const { register_alternatif, register_balasan, register_pemberitahuan } = templateText;


class Reply {

    text;
    errText;
    service = null;

    /**
     * @type {boolean}
    */
    error = false;

    /**
     * @param {import("@whiskeysockets/baileys").WAMessage} WAMessage 
     */
    constructor(WAMessage) {
        this.messageInstance = WAMessage;

        const textMessage = WAMessage.message.extendedTextMessage.text ?? null;

        if (!templateText) {
            return false;
        }

        this.service = textMessage.split("#");

        if (this.service.length > 1) {
            return this.init(cleanString(this.service[0]), this.service[1])
        }

        if (cleanString(textMessage) === 'info') {
            let textServices = '';
            const textSelamatDatang = register_pemberitahuan.find(row => row.keperluan === "pesan_awal")

            register_balasan.forEach(element => {
                textServices += `${element.judul} ${element.contoh}` + "\n";
            });

            const pesan = textSelamatDatang.pesan.replace('daftar_layanan', textServices)

            this.text = pesan
            return false;
        }

        console.log('Pesan masuk permintaan informasi awal')
        const pesan = register_alternatif.find(row => row.item == "awal");

        this.text = pesan.text;
        return false;
    }

    async init(service, identifier) {
        const getService = register_balasan.find(element => element.kata_kunci == service)
        console.log('Pesan masuk permintaan informasi ' + service)

        if (!getService) {
            const serviceNotFound = register_alternatif.find(element => element.code == 404 && element.item == "service");

            this.text = serviceNotFound.text

            return false;
        }

        this.service = await import('./controller/' + getService.controller);

        if (isNomorPerkara(identifier) == true) {
            let data;

            try {
                data = await prisma.perkara.findUnique({
                    where: {
                        nomor_perkara: identifier
                    }
                })

            } catch (error) {

                this.error = true;
                this.errText = `Error pada saat mencari perkara\n\n${error}`;

                this.text = "Terjadi kesalahan pada sistem kami. Silahkan hubungi kembali setelah beberapa saat. Mohon maaf atas ketidaknyaman nya";

                return false;
            }

            if (!data) {
                const dataNotFound = register_alternatif.find(element => element.code == 404 && element.item == "nomor_perkara");

                this.text = dataNotFound.text
                return false;
            }

            // const pesan = new Controller.default(data, getService, this.messageInstance.key.remoteJid)

            // this.text = pesan.text;
            return false;
        }

        // const pesan = new Controller.default(identifier, getService, this.messageInstance.key.remoteJid)

        // this.text = pesan.text;

        return false;
    }
}

export default Reply;