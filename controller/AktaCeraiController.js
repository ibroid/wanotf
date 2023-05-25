import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
import moment from 'moment';
import { toFullDate } from "../helper/date.js";
import { sendMessageWTyping } from "../whatsapp.js";
import basic from "../helper/basic.js"
class AktaCeraiController {

  text;
  error = false;
  errText = null;

  constructor({ perkara_id }, balasan) {
    this.perkara_id = perkara_id;
    this.balasan = balasan;
  }

  init = async () => {
    let data;
    try {
      data = await prisma.perkara_akta_cerai.findUnique({
        where: {
          perkara_id: this.perkara_id
        },
        include: {
          perkara: true
        }
      })
    } catch (error) {
      // sendMessageWTyping({ text: `Error pada saat membalas informasi akta cerai\n\Log: ${error}` }, basic.numberFormatter(process.env.DEVELOPER_CONTACT));
      this.error = true;
      this.errText = `Error pada saat membalas informasi akta cerai\n\Log: ${error}`;

      // sendMessageWTyping({ text: "Terjadi kesalahan pada sistem kami. Silahkan hubungi kembali setelah beberapa saat. Mohon maaf atas ketidaknyaman nya" }, this.from);
      this.text = "Terjadi kesalahan pada sistem kami. Silahkan hubungi kembali setelah beberapa saat. Mohon maaf atas ketidaknyaman nya";
      return false;
    }

    const { balasan, balasan_lainya } = this.balasan;

    if (!data) {
      sendMessageWTyping({ text: balasan_lainya }, this.from);
      return false;
    }

    const textBalasan = data.tgl_akta_cerai
      ? balasan
        .replace("nomor_perkara", data.perkara.nomor_perkara)
        .replace("tanggal_akta_cerai", toFullDate(data.tgl_akta_cerai))
      : balasan_lainya;

    // sendMessageWTyping({ text: textBalasan }, this.from)
    this.text = textBalasan;

    console.log(`Informasi AKta cerai Terkirim ke ${this.from} pada pukul ${moment().format()}`)

  };
}

export default AktaCeraiController;
