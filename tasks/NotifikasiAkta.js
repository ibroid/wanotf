import { PrismaClient } from '@prisma/client';
import template from '../template.js';
import moment from 'moment';
import { sendMessageWTyping } from '../whatsapp.js';

const prisma = new PrismaClient()
const now = moment().locale('id').format('YYYY-MM-DD');
const { register_pemberitahuan } = template
export default async function NotifikasiAkta() {

	console.log("Memulai notifikasi akta cerai")
	const data = await prisma.perkara_akta_cerai.findMany({
		select: {
			nomor_akta_cerai: true,
			perkara_id: true,
			tgl_akta_cerai: true,
			perkara: {
				select: {
					nomor_perkara: true,
					perkara_pihak1: {
						select: {
							nama: true,
							pihak: {
								select: {
									telepon: true
								}
							}
						}
					}
				},
			}
		},
		where: {
			tgl_akta_cerai: new Date(now)
		}
	})

	console.log(`Terdapat ${data.length} jadwal sidang untuk dikirim notifikasi`)

	const registerAkta = register_pemberitahuan.find(
		(Element) => Element.keperluan == "pemberitahuan_akta"
	);

	if (!data || (Array.isArray(data) && data.length === 0)) {
		console.log('Data akta cerai tidak ada. Notifikasi akta cerai tidak terjalankan');
		return;
	}



	data.forEach((row, i) => {

		const telepon = row.perkara.perkara_pihak1[0].pihak.telepon;

		if (!telepon) {
			return;
		}

		let textBalasan = registerAkta.pesan;
		textBalasan = String(textBalasan).replace('nomor_perkara', row.perkara.nomor_perkara)
		textBalasan = String(textBalasan).replace('nomor_perkara', row.perkara.nomor_perkara)

		setTimeout(async () => {
			try {
				const notifMessage = `Notifikasi akta cerai nomor ${row.perkara.nomor_perkara} Terkirim ke ${telepon} pada pukul ${moment().format()}`;

				await sendMessageWTyping({ text: textBalasan }, numberFormatter(telepon))
				console.log(notifMessage);

				await sendMessageWTyping({ text: notifMessage }, numberFormatter(process.env.DEVELOPER_CONTACT));

			} catch (error) {
				const errMessage = `Error saat notifikasi akta cerai nomor ${row.perkara.nomor_perkara} ke ${telepon}. Error : ${error}`;

				await sendMessageWTyping({ text: errMessage }, numberFormatter(process.env.DEVELOPER_CONTACT))

				console.log(errMessage)

			}

		}, 2000 * 60 * i)
	})
}