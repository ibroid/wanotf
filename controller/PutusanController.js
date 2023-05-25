import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import moment from "moment";
import { sendMessageWTyping } from "../whatsapp.js";
import basic from "../helper/basic.js"
const { numberFormatter } = basic;

class PutusanController {

  text;
  error = false;
  errText = null;

  constructor({ perkara_id, nomor_perkara }, balasan) {
    this.nomor_perkara = nomor_perkara;
    this.perkara_id = perkara_id;
    this.balasan = balasan;
  }
  init = async () => {
    let data;
    try {
      data = await prisma.perkara_putusan.findUnique({
        where: {
          perkara_id: this.perkara_id
        }
      })
    } catch (error) {
      this.error = true;
      this.errText = `Error pada saat membalas informasi putusan\n\Log: ${error}`;

      this.text = "Terjadi kesalahan pada sistem kami. Silahkan hubungi kembali setelah beberapa saat. Mohon maaf atas ketidaknyaman nya";
      return false;
    }

    const { balasan_lainya, balasan } = this.balasan;

    if (!data) {
      this.text = balasan_lainya;
      return false;
    }

    const textBalasan = String(balasan).replace("nomor_perkara", this.nomor_perkara).replace("amar_putusan", data.amar_putusan)

    this.text = textBalasan;

    console.log(`Pesan Terkirim ke ${this.from} pada pukul ${moment().format()}`)
  };
}

export default PutusanController;
