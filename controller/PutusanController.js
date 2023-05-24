import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import moment from "moment";
import { sendMessageWTyping } from "../whatsapp.js";
import basic from "../helper/basic.js"
const { numberFormatter } = basic;

class PutusanController {
  constructor({ perkara_id, nomor_perkara }, balasan, from) {
    this.nomor_perkara = nomor_perkara;
    this.perkara_id = perkara_id;
    this.balasan = balasan;
    this.from = from;
  }
  send = async () => {
    let data;
    try {
      data = await prisma.perkara_putusan.findUnique({
        where: {
          perkara_id: this.perkara_id
        }
      })
    } catch (error) {
      sendMessageWTyping({ text: `Error pada saat membalas informasi putusan\n\Log: ${error}` }, numberFormatter(process.env.DEVELOPER_CONTACT));

      sendMessageWTyping({ text: "Terjadi kesalahan pada sistem kami. Silahkan hubungi kembali setelah beberapa saat. Mohon maaf atas ketidaknyaman nya" }, this.from);
      return false;
    }

    const { balasan_lainya, balasan } = this.balasan;

    if (!data) {
      sendMessageWTyping({ text: balasan_lainya }, this.from)
      return false;
    }

    const textBalasan = String(balasan).replace("nomor_perkara", this.nomor_perkara).replace("amar_putusan", data.amar_putusan)

    sendMessageWTyping({ text: textBalasan }, this.from)
    console.log(`Pesan Terkirim ke ${this.from} pada pukul ${moment().format()}`)

  };
}

export default PutusanController;
