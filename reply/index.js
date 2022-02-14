const {
  register_alternatif,
  register_balasan,
  register_pemberitahuan } = require('../messages');

const moment = require('moment');
const Logger = require('../logger');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = {
  init: async (message) => {
    const logger = new Logger(message.from, message.body, "pesan_masuk");

    logger.start();

    console.log(`Pesan masuk dari ${message.from} pada pukul ${moment().format()}`)

    const tujuan = message.body.split('#')

    if (tujuan.length > 1) {

      const balasan = register_balasan.find(element => element.kata_kunci == tujuan[0].toLowerCase())

      if (balasan) {
        const data = await prisma.perkara.findUnique({
          where: {
            nomor_perkara: tujuan[1]
          }
        })

        if (data) {

          const controller = require('../controller/' + balasan.controller);

          const pesan = new controller(data, balasan, message.from);
          pesan.send()

        } else {

          const notFoundText = register_alternatif.find(element => element.code == 404 && element.item == "perkara");

          if (notFoundText) message.reply(notFoundText.text)


        }
      } else {

        const notFoundText = register_alternatif.find(element => element.code == 404 && element.item == "service");

        if (notFoundText) message.reply(notFoundText)


      }

    } else {

      if (String(message.body).toLocaleLowerCase() == 'info') {

        let textServices = '';
        const textSelamatDatang = register_pemberitahuan.find(row => row.keperluan == "pesan_awal")

        register_balasan.forEach(element => {
          textServices += `${element.judul} ${element.contoh}` + "\n";
        });

        const pesan = textSelamatDatang.pesan.replace('daftar_layanan', textServices)
        if (pesan) message.reply(pesan)




      } else {

        const pesan = register_alternatif.find(row => row.item == "awal")
        if (pesan) message.reply(pesan.text)


      }


    }
  }
}

