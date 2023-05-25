import { PrismaClient } from '@prisma/client';
import template from '../template.js';

const prisma = new PrismaClient()
import moment from 'moment';

const now = moment().locale('id').format('YYYY-MM-DD');

const { register_pemberitahuan } = template

export default async function NotifikasiAkta() {

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

	const registerAkta = register_pemberitahuan.find(
		(Element) => Element.keperluan == "pemberitahuan_akta"
	);

	console.log(data)

	// if (data) {

	// 	data.forEach(async row => {

	// 		const telepon = row.perkara.perkara_pihak1[0].pihak.telepon;

	// 		let textBalasan = registerAkta.pesan;
	// 		textBalasan = String(textBalasan).replace('nomor_perkara', row.perkara.nomor_perkara)
	// 		textBalasan = String(textBalasan).replace('nomor_perkara', row.perkara.nomor_perkara)

	// 		if (telepon) {
	// 			try {
	// 				await client.sendMessage(numberFormatter(String(telepon)), textBalasan)
	// 					// await client.sendMessage(numberFormatter(process.env.DEVELOPER_CONTACT), textBalasan)
	// 					.then(res => {

	// 						console.log(`Notifikasi Terkirim ke ${telepon} pada pukul ${moment().format()}`);

	// 					})
	// 			} catch (error) {
	// 				await client
	// 					.sendMessage(numberFormatter(String(process.env.DEVELOPER_CONTACT)), "Terdapat error \n\n" + error)
	// 					.then((res) => res)
	// 					.catch((err) => console.log(err));

	// 			}

	// 		}
	// 	})
	// }
}