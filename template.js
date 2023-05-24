
export default {
    register_alternatif: [
        {
            "id": 1,
            "code": 404,
            "item": "nomor_perkara",
            "text": "Nomor Perkara tidak ditemukan silahkan periksa kembali nomor perkara anda. Pastikan format nomor perkara sudah sesuai.\nContoh format nomor perkara 123/Pdt.G/2021/PA.JU",
            "desc": "Pesan ini dikirim apabila pengirim salah menulis nomor perkara"
        },
        {
            "id": 2,
            "code": 404,
            "item": "service",
            "text": "Mohon maaf layanan informasi yang anda minta tidak ada atau belum tersedia.",
            "desc": "Pesan ini dikirim apabila pengirim salah menulis format layanan"
        },
        {
            "id": 3,
            "code": 402,
            "item": "awal",
            "text": "*Assalamualaikum Warohmatullah*\nTerima kasih telah menghubungi\n\nMohon Maaf layanan ini baru saja aktif kembali.\nUntuk menggunakan layanan ini silahkan ketik \"info\"",
            "desc": "Pesan ini dikirim apabila pengirim tidak memulai dengan mengetik info"
        }
    ],
    register_balasan: [
        {
            "id": 1,
            "judul": "*Informasi Sidang*",
            "kata_kunci": "sidang",
            "contoh": "\nketik: sidang#nomor_perkara_anda\nContoh: sidang#123/Pdt.G/2021/PA.JU\n",
            "balasan": "Berikut jadwal sidang perkara nomor nomor_perkara\n\njadwal_sidang",
            "balasan_lainya": "Perkara anda belum ditentukan jadwal sidang oleh majelis hakim",
            "controller": "SidangController.js",
            "kata_cari": []
        },
        {
            "id": 2,
            "judul": "*Informasi Akta Cerai*",
            "kata_kunci": "akta",
            "contoh": "\nketik: akta#nomor_perkara_anda\nContoh: akta#123/Pdt.G/2021/PA.JU\n",
            "balasan": "Akta cerai anda sudah terbit pada tanggal tanggal_akta_cerai.\n Anda bisa mengambil langsung akta cerai anda di kantor Pengadilan Agama Jakarta Utara atau anda bisa mengambil nya melalui drive thru untuk pengambilan lebih cepat. Untuk pengambilan akta lewat drive thru silahkan register disini https://drive-thru.pajakartautara.id/page/pesan?data=nomor_perkara",
            "balasan_lainya": "Mohon maaf akta cerai anda belum terbit",
            "controller": "AktaCeraiController.js",
            "kata_cari": [
                "nomor_perkara",
                "tanggal_akta_cerai"
            ]
        },
        {
            "id": 3,
            "judul": "*Riwayat Transaksi Perkara*",
            "kata_kunci": "transaksi",
            "contoh": "\nketik: transaksi#nomor_perkara_anda\nContoh: transaksi#123/Pdt.G/2021/PA.JU\n",
            "balasan": "Berikut adalah riwayat transaksi dari perkara nomor nomor_perkara.\n\nriwayat_pembayaran",
            "balasan_lainya": "Belum ada riwayat pembayaran",
            "controller": "TransaksiController.js",
            "kata_cari": [
                "nomor_perkara",
                "riwayat_pembayaran"
            ]
        },
        {
            "id": 4,
            "judul": "*Informasi Putusan Perkara*",
            "kata_kunci": "putusan",
            "contoh": "\nketik: putusan#nomor_perkara_anda\nContoh: putusan#123/Pdt.G/2021/PA.JU\n",
            "balasan": "Berikut amar putusan perkara nomor nomor_perkara\n\namar_putusan",
            "balasan_lainya": "Perkara anda belum putus. Silahkan datang pada sidang yang akan datang.",
            "controller": "PutusanController.js",
            "kata_cari": [
                "nomor_perkara",
                "amar_putusan"
            ]
        },
        {
            "id": 5,
            "judul": "*Informasi Persyaratan*",
            "kata_kunci": "persyaratan",
            "contoh": "\nketik: persyaratan#kode_perkara\nContoh: persyaratan#PC\nPilihan Kode Perkara: \n1. Perceraian (Kode : *PC*)\n2. Dispensasi Nikah (Kode : *DN*)\n3. Isbat Nikah (Kode : *IN*)\n4. Penetapan Ahli Waris (Kode : *PAW*)\n5.Harta Bersama (Kode : *HB*)\n6. Wali Adhol (Kode : *WA*)\n7. Adopsi Anak (Kode : *AA*)\n8. Perwalian (Kode : *PW*)\n9. Ijin Poligami (Kode : *IP*)\n10. Pembatalan Nikah (Kode : *PN*)\n11. Asal Usul Anak (Kode : *ASA*)\n",
            "balasan": {
                "PC": [
                    "Surat Gugatan yang ditujukan kepada Ketua Pengadilan Agama Jakarta Utara dengan dibuat sendiri (Pada halaman berikut http://gugatanmandiri.badilag.net/gugatan_mandiri) ataupun dengan bantuan Pos Bantuan Hukum (POSBAKUM) yang sudah tersedia di Kantor Pengadilan Agama Jakarta Utara",
                    "Asli Buku Nikah/Duplikat Kutipan Akta Nikah beserta 1 Lembar Fotokopi yang dimateraikan Rp. 10.000,- dan dicap leges di kantor pos",
                    "Fotokopi KTP atau Resi KTP Lembar Fotokopi yang dimateraikan Rp. 10.000,- dan dicap leges di kantor pos;",
                    "Surat Keterangan Lurah setempat (bila Suami atau Istri anda tidak diketahui alamatnya yang pasti);",
                    "Surat Ijin Atasan (bagi PNS/TNI/POLRI/BUMN/BUMD);"
                ],
                "IN": [
                    "Surat Permohonan yang ditujukan kepada Ketua Pengadilan Agama Jakarta Utara dengan dibuat sendiri (Pada halaman berikut http://gugatanmandiri.badilag.net/gugatan_mandiri) ataupun dengan bantuan Pos Bantuan Hukum (POSBAKUM) yang sudah tersedia di Kantor Pengadilan Agama Jakarta Utara;",
                    "Fotocopi KTP Pemohon yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Surat Keterangan KUA setempat (menerangkan bahwa NIKAH nya tidak terdapat di Register Nikah KUA setempat);"
                ],
                "PAW": [
                    "Surat Permohonan yang ditujukan kepada Ketua Pengadilan Agama Jakarta Utara dengan dibuat sendiri (Pada halaman berikut http://gugatanmandiri.badilag.net/gugatan_mandiri) ataupun dengan bantuan Pos Bantuan Hukum (POSBAKUM) yang sudah tersedia di Kantor Pengadilan Agama Jakarta Utara;",
                    "Fotocopy KTP Pemohon dan semua ahli waris sebanyak 1 lembar A4 (tidak boleh dipotong) yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopy akta nikah pewaris sebanyak 1 lembar yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopy Kartu Keluarga Pewaris 1 lembar yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopy akta kelahiran semua anak dari pewaris sebanyak 1 lembar yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopi surat kematian (Suami/Isteri) sebanyak 1 lembar yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopy surat kematian orang tua pewaris sebanyak 1 lembar yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Surat keterangan dari Kelurahan yang menyatakan dengan sebenarnya bahwa ahli waris (misalnya: Suami, Istri, Anak) dari almarhum……. guna mengurus Penetapan Ahli Waris di Pengadilan Agama Jakarta Utara;",
                    "Fotocopy surat keterangan ahli waris sebanyak 1 lembar yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos."
                ],
                "DN": [
                    "Surat Permohonan yang ditujukan kepada Ketua Pengadilan Agama Jakarta Utara dengan dibuat sendiri (Pada halaman berikut http://gugatanmandiri.badilag.net/gugatan_mandiri) ataupun dengan bantuan Pos Bantuan Hukum (POSBAKUM) yang sudah tersedia di Kantor Pengadilan Agama Jakarta Utara digandakan sebanyak 8 rangkap;",
                    "Fotocopi KTP Pemohon / para Pemohon sebanyak 1 lembar A4 (tidak boleh dipotong) yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopi Kartu Keluarga Pemohon sebanyak 1 lembar yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopi akta nikah / duplikat kutipan akta nikah yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopi akta kelahiran calon suami yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopi akta kelahiran calon isteri yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopi akta nikah orang tua calon yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Surat keterangan pemberitahuan adanya halangan / kekurangan persyaratan nikah dari KUA;",
                    "Surat keterangan status dari Kelurahan;"
                ],
                "HB": [
                    "Surat Permohonan yang ditujukan kepada Ketua Pengadilan Agama Jakarta Utara dengan dibuat sendiri (Pada halaman berikut http://gugatanmandiri.badilag.net/gugatan_mandiri) ataupun dengan bantuan Pos Bantuan Hukum (POSBAKUM) yang sudah tersedia di Kantor Pengadilan Agama Jakarta Utara;",
                    "Fotocopi akta cerai 1 muka (tidak boleh dipotong) yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopi KTP sebanyak 1 lembar A4 (tidak boleh dipotong) yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopi semua tanda bukti harta yang dimiliki bersama yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;"
                ],
                "WA": [
                    "Surat Permohonan yang ditujukan kepada Ketua Pengadilan Agama Jakarta Utara dengan dibuat sendiri (Pada halaman berikut http://gugatanmandiri.badilag.net/gugatan_mandiri) ataupun dengan bantuan Pos Bantuan Hukum (POSBAKUM) yang sudah tersedia di Kantor Pengadilan Agama Jakarta Utara;",
                    "Surat penolakan dari KUA;",
                    "Surat keterangan adanya halangan / kurang persyaratan dari KUA;",
                    "Fotocopi KTP Pemohon (calon suami dan istri) masing-masing 1 lembar A4 (tidak boleh dipotong) yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopi kartu keluarga Pemohon yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopi buku nikah orang tua Pemohon yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopi akta cerai (bila orang tua telah bercerai) yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopi akta kelahiran anak yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos (asli harus ada);"
                ],
                "AA": [
                    "Surat Permohonan yang ditujukan kepada Ketua Pengadilan Agama Jakarta Utara dengan dibuat sendiri (Pada halaman berikut http://gugatanmandiri.badilag.net/gugatan_mandiri) ataupun dengan bantuan Pos Bantuan Hukum (POSBAKUM) yang sudah tersedia di Kantor Pengadilan Agama Jakarta Utara;",
                    "Fotocopi surat nikah Pemohon (Suami dan Istri) dan orang tua anak yang mau diangkat masing-masing 1 lembar A4 (tidak boleh dipotong) yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopi KTP Pemohon dan orang tua anak yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopi Kartu Keluarga Pemohon dan orang tua anak yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopi akta kelahiran anak yang mau diangkat atau surat keterangan kelahiran dari Bidan yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Surat keterangan kelakuan baik dari Kepolisian;",
                    "Surat keterangan kesehatan dari Dokter;",
                    "Surat keterangan penghasilah disahkan oleh Kelurahan;",
                    "Surat rekomendasi dari Dinas Sosial;"
                ],
                "PW": [
                    "Surat Permohonan yang ditujukan kepada Ketua Pengadilan Agama Jakarta Utara dengan dibuat sendiri (Pada halaman berikut http://gugatanmandiri.badilag.net/gugatan_mandiri) ataupun dengan bantuan Pos Bantuan Hukum (POSBAKUM) yang sudah tersedia di Kantor Pengadilan Agama Jakarta Utara;",
                    "Fotocopi KTP Pemohon 1 lembar A4 1 muka (atas bawah tidak boleh dipotong) yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopi akta nikah/akta cerai apabila bercerai yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopi akta kelahiran anak-anak yang belum dewasa 1 lembar yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopi sertifikat tanah / surat lain yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;"
                ],
                "IP": [
                    "Surat Permohonan (rangkat 8) yang ditujukan kepada Ketua Pengadilan Agama Jakarta Utara dengan dibuat sendiri (Pada halaman berikut http://gugatanmandiri.badilag.net/gugatan_mandiri) ataupun dengan bantuan Pos Bantuan Hukum (POSBAKUM) yang sudah tersedia di Kantor Pengadilan Agama Jakarta Utara;",
                    "Fotocopi KTP Pemohon, Isteri Pertama dan Calon Isteri Kedua masing-masing 1 lembar A4 1 muka (atas bawah tidak boleh dipotong) yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopi Kartu Keluarga Pemohon yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopi Buku Nikah Pemohon yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Surat keterangan status calon isteri dari Lurah/Desa (jika janda melampirkan surat cerai/surat kematian)",
                    "Surat Ijin Atasan (bagi PNS/TNI/POLRI/BUMN/BUMD);",
                    "Surat penyataan berlaku adil dari Pemohon;",
                    "Surat penyataan bersedia dimadu dari Isteri Pertama;",
                    "Surat pernyataan tidak keberatan dimadu dari calon isteri kedua;",
                    "Daftar harta bersama antara Pemohon dengan isteri pertama yang diketahui Lurah setempat;"
                ],
                "PN": [
                    "Surat Gugatan/Permohonan yang ditujukan kepada Ketua Pengadilan Agama Jakarta Utara dengan dibuat sendiri (Pada halaman berikut http://gugatanmandiri.badilag.net/gugatan_mandiri) ataupun dengan bantuan Pos Bantuan Hukum (POSBAKUM) yang sudah tersedia di Kantor Pengadilan Agama Jakarta Utara;",
                    "Fotocopi KTP Penggugat/Pemohon 1 lembar A4 1 muka (atas bawah tidak boleh dipotong) yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Asli buku nikah/duplikat kutipan akta nikah beserta 1 lembar fotocopi yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Surat keterang Lurah yang diketahui Camat setempat (bila suami/isteri ghoib dan tidak diketahui alamatnya yang pasti)",
                    "Surat kuasa dari Pejabat KUA dari Kepala KUA atau orang yang dikuasakan untuk mengajukan gugatan;"
                ],
                "AN": [
                    "Surat Permohonan yang ditujukan kepada Ketua Pengadilan Agama Jakarta Utara dengan dibuat sendiri (Pada halaman berikut http://gugatanmandiri.badilag.net/gugatan_mandiri) ataupun dengan bantuan Pos Bantuan Hukum (POSBAKUM) yang sudah tersedia di Kantor Pengadilan Agama Jakarta Utara;",
                    "Asli buku nikah/duplikat kutipan akta nikah beserta 1 lembar fotocopi yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopi KTP Pemohon 1 lembar A4 1 muka (atas bawah tidak boleh dipotong) yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopi Kartu Keluarga Pemohon 1 lembar yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos;",
                    "Fotocopi akta kelahiran anak 1 lembar yang dimateraikan Rp 10.000,- dan dicap leges di kantor pos"
                ]
            },
            "balasan_lainya": "Kode perkara yang anda masukan salah. Silahkan coba kembali",
            "controller": "PersyaratanController.js",
            "kata_cari": []
        },
        // {
        //     "id": 6,
        //     "judul": "*Informasi Antrian Berjalan*",
        //     "kata_kunci": "antrian",
        //     "contoh": "\nketik: antrian#jenis_antrian\nContoh: 1. antrian#sidang (Menampilkan Informasi Antrian Sidang)\n2. antrian#ptsp (Menampilkan Antrian Pelayanan PTSP)",
        //     "balasan": {
        //         "sidang": "antrian_saat_ini\nUntuk melihat nomor antrian yang sudah di panggil dan yang belum di panggil silahkan balas dengan mengetik antrian#riwayat_sidang",
        //         "ptsp": ""
        //     },
        //     "balasan_lainya": "Jenis antrian tidak dietmukan silahkan coba lagi",
        //     "controller": "AntrianController.js",
        //     "kata_cari": []
        // }
    ],
    register_pemberitahuan: [
        {
            "id": 1,
            "pesan": `*SELAMAT DATANG DI LAYANAN INFORMASI DAN NOTIFIKASI PERKARA*\nMohon Perhatian bahwa layanan ini adalah layanan otomatis yang dikirim oleh sistem dari Pengadilan Agama Jakarta Utara. Mohon maaf nomor ini tidak menerima telefon. Untuk mencari informasi silahkan gunakan layanan dibawah ini dengan menggunakan kata kunci sebagai berikut\n\ndaftar_layanan`,
            "keperluan": "pesan_awal"
        },
        {
            "id": 2,
            "pesan": "*PEMBERITAHUAN SIDANG*\n\nUntuk : nama_pihak\nNomor Perkara: nomor_perkara\nSidang Ke : urutan_sidang\nTanggal Sidang : tanggal_sidang\nPukul : 08:00\nRuang Sidang : ruang_sidang\n\nSilahkan tunggu surat resmi panggilan sidang yang akan di antar oleh jurusita pengadilan. Apabila bapa/ibu menemukan tanggal sidang yang berbeda dengan tanggal sidang pada surat panggilan, Silahkan ikuti tanggal sidang yang tertera dalam Surat Panggilan.\n\n_Pesan ini dikirim secara otomatis oleh Layanan Informasi dan Notifikasi Perkara Pengadilan Agama Jakarta Utara_",
            "keperluan": "pemberitahuan_sidang"
        },
        {
            "id": 3,
            "pesan": "*PEMBERITAHUAN AKTA CERAI*\n\nAkta cerai anda Nomor Perkara nomor_perkara sudah terbit anda bisa mengambil nya besok lusa di kantor pengadilan agama jakarta utara atau menggunakan layanan drive thru dengan cara register disini https://drive-thru.pajakartautara.id//page/pesan?data=nomor_perkara. Pastikan anda membawa fotocopy KTP dan uang untuk pembayaran PNBP.\n\n_Pesan ini dikirim secara otomatis oleh Layanan Informasi dan Notifikasi Perkara Pengadilan Agama Jakarta Utara_",
            "keperluan": "pemberitahuan_akta"
        }
    ]
}