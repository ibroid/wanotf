const register_balasan = require('../database/register_balasan.json');
const register_pemberitahuan = require('../database/register_pemberitahuan.json');
const moment = require('moment');
const client = require('../whatsapp');
const { perkara } = require('../models');
const Logger = require('../logger');
const con = require('../tasks');

module.exports = {
  init: async (message) => {
    const tujuan = message.body.split('#')
    if (tujuan.length > 1) {
      const balasan = register_balasan.find(element => element.kata_kunci == tujuan[0].toLowerCase())
      if (balasan) {
        const data = await perkara.findOne({
          where: {
            nomor_perkara: tujuan[1]
          }
        })
        if (data) {
          const controller = require('../controller/' + balasan.controller);
          const pesan = new controller(data, balasan, message.from)
          pesan.send()
          const log = new Logger(message.from, message.body, balasan.balasan, "balasan")
          log.start()
        } else {
          const perkaraNotFound = "Nomor Perkara tidak ditemukan silahkan periksa kembali nomor perkara anda. Pastikan format nomor perkara sudah sesuai.\nContoh format nomor perkara 123/Pdt.G/2021/PA.JU"
          message.reply(perkaraNotFound)
          const log = new Logger(message.from, message.body, perkaraNotFound, "balasan")
          log.start()
        }
      } else {
        const noServiceText = "Mohon maaf layanan informasi yang anda minta tidak ada atau belum tersedia."
        message.reply(noServiceText)
        const log = new Logger(message.from, message.body, noServiceText, "balasan")
        log.start()
      }
    } else {
      let textServices = '';
      const textSelamatDatang = register_pemberitahuan.find(row => row.keperluan == "pesan_awal")
      register_balasan.forEach(element => {
        textServices += `${element.judul} ${element.contoh}` + "\n";
      });
      try {
        const pesan = textSelamatDatang.pesan.replace('daftar_layanan', textServices)
        client.sendMessage(message.from, pesan)
        const log = new Logger(message.from, message.body, pesan, "balasan")
        log.start()
      } catch (error) {
        console.log(error)
        console.log(`Error: gagal membalas kepada ${message.from} pada pukul ${moment().format()}`)
      }
    }
  }
}

