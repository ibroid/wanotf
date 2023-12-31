import basicHelper from './helper/basic.js';
import { PrismaClient } from '@prisma/client';
import isNomorPerkara from './helper/perkara.js';

const prisma = new PrismaClient()
import templateText from './template.js';
import applog from './log/Logger.js';

const { cleanString } = basicHelper;
const { register_alternatif, register_balasan, register_pemberitahuan } = templateText;


class Reply {

    text;
    errText;
    /**
     * @type {Array}
     */
    service = [];
    controller = null;
    perkara = null;
    nonPerkara = null;
    balasan;

    /**
     * @type {boolean}
    */
    error = false;

    /**
     * @param {import("@whiskeysockets/baileys").WAMessage} WAMessage 
     */
    constructor(WAMessage) {
        this.messageInstance = WAMessage;

        const textMessage = WAMessage.message?.extendedTextMessage?.text ?? null;

        if (!textMessage) {
            return;
        }

        this.service = textMessage.split("#");

        if (cleanString(textMessage) === 'info') {
            let textServices = '';
            const textSelamatDatang = register_pemberitahuan.find(row => row.keperluan === "pesan_awal")

            register_balasan.forEach(element => {
                textServices += `${element.judul} ${element.contoh}` + "\n";
            });

            const pesan = textSelamatDatang.pesan.replace('daftar_layanan', textServices)

            this.text = pesan
            return;
        }

        if (this.service.length > 1) {
            return;
        }

        applog('Pesan masuk permintaan informasi awal')
        const pesan = register_alternatif.find(row => row.item == "awal");

        this.text = pesan.text;
        return;
    }

    /**
     * @param {Array} services 
     * @returns 
     */
    async init(services) {

        if (services.length > 1) {

            const service = services[0]
            const identifier = services[1]

            const getService = register_balasan.find(element => element.kata_kunci == service)

            this.balasan = getService;

            applog('Pesan masuk permintaan informasi ' + service)

            if (!getService) {
                const serviceNotFound = register_alternatif.find(element => element.code == 404 && element.item == "service");

                this.text = serviceNotFound.text
                turn;
            }

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

                    return;
                }

                if (!data) {
                    const dataNotFound = register_alternatif.find(element => element.code == 404 && element.item == "nomor_perkara");

                    this.text = dataNotFound.text
                    return;
                }

                this.perkara = data;
                this.controller = await import('./controller/' + getService.controller);

                return;
            }

            this.nonPerkara = identifier;
            this.controller = await import('./controller/' + getService.controller);

            return;
        }

    }
}

export default Reply;