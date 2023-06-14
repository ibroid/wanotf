
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.15.0
 * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
 */
Prisma.prismaVersion = {
  client: "4.15.0",
  engine: "8fbc245156db7124f997f4cecdd8d1219e360944"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.ActiopaulianawebScalarFieldEnum = {
  IDPerkara: 'IDPerkara',
  tglPendaftaranAction: 'tglPendaftaranAction',
  keterangan: 'keterangan'
};

exports.Prisma.AgamaScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  keterangan: 'keterangan',
  aktif: 'aktif',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Agenda_sidangScalarFieldEnum = {
  id: 'id',
  alur_perkara_id: 'alur_perkara_id',
  nama: 'nama',
  keterangan: 'keterangan',
  aktif: 'aktif',
  urutan: 'urutan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Alur_perkaraScalarFieldEnum = {
  id: 'id',
  kode: 'kode',
  nama: 'nama',
  keterangan: 'keterangan',
  aktif: 'aktif',
  urutan: 'urutan',
  jenis_pengadilan: 'jenis_pengadilan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.AlurperkarawebScalarFieldEnum = {
  id: 'id',
  nama: 'nama'
};

exports.Prisma.An_antrian_acScalarFieldEnum = {
  AN_ID: 'AN_ID',
  perkara_id: 'perkara_id',
  AN_AMBIL: 'AN_AMBIL',
  AN_MASUK: 'AN_MASUK',
  AN_LOKET: 'AN_LOKET',
  AN_DIPANGGIL: 'AN_DIPANGGIL'
};

exports.Prisma.An_antrian_daftarScalarFieldEnum = {
  AN_ID: 'AN_ID',
  AN_AMBIL: 'AN_AMBIL',
  AN_MASUK: 'AN_MASUK',
  AN_LOKET: 'AN_LOKET',
  AN_DIPANGGIL: 'AN_DIPANGGIL'
};

exports.Prisma.An_antrian_informasiScalarFieldEnum = {
  AN_ID: 'AN_ID',
  perkara_id: 'perkara_id',
  AN_AMBIL: 'AN_AMBIL',
  AN_MASUK: 'AN_MASUK',
  AN_LOKET: 'AN_LOKET',
  AN_DIPANGGIL: 'AN_DIPANGGIL'
};

exports.Prisma.An_antrian_kasirScalarFieldEnum = {
  AN_ID: 'AN_ID',
  perkara_id: 'perkara_id',
  AN_AMBIL: 'AN_AMBIL',
  AN_MASUK: 'AN_MASUK',
  AN_LOKET: 'AN_LOKET',
  AN_DIPANGGIL: 'AN_DIPANGGIL'
};

exports.Prisma.An_antrian_sidangScalarFieldEnum = {
  AN_TANGGAL: 'AN_TANGGAL',
  perkara_id: 'perkara_id',
  AN_MASUK: 'AN_MASUK',
  LOK_ALAMAT: 'LOK_ALAMAT',
  AN_ID: 'AN_ID',
  AN_DIPANGGIL: 'AN_DIPANGGIL',
  AN_JENIS_SIDANG: 'AN_JENIS_SIDANG'
};

exports.Prisma.AntrianScalarFieldEnum = {
  id: 'id',
  nomor_antrian: 'nomor_antrian',
  tanggal_sidang: 'tanggal_sidang',
  ruang_id: 'ruang_id',
  perkara_id: 'perkara_id',
  status: 'status',
  urutan: 'urutan'
};

exports.Prisma.Api_antrianScalarFieldEnum = {
  id: 'id',
  table: 'table',
  data_id: 'data_id',
  method: 'method'
};

exports.Prisma.Api_antrian_batchScalarFieldEnum = {
  id: 'id',
  endpoint: 'endpoint',
  method: 'method',
  body: 'body'
};

exports.Prisma.Api_ref_tableScalarFieldEnum = {
  table: 'table',
  target: 'target',
  id: 'id',
  efiling_id: 'efiling_id',
  fields: 'fields',
  documents: 'documents',
  joins: 'joins',
  where: 'where'
};

exports.Prisma.ArsipScalarFieldEnum = {
  id: 'id',
  no_ruang: 'no_ruang',
  no_lemari: 'no_lemari',
  no_rak: 'no_rak',
  no_berkas: 'no_berkas',
  nomor_arsip: 'nomor_arsip',
  perkara_id: 'perkara_id',
  nomor_perkara: 'nomor_perkara',
  tanggal_masuk_arsip: 'tanggal_masuk_arsip',
  nama_penerima: 'nama_penerima',
  nama_penyerah: 'nama_penyerah',
  lengkap: 'lengkap',
  status: 'status',
  keterangan: 'keterangan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Arsip_pinjamScalarFieldEnum = {
  id: 'id',
  arsip_id: 'arsip_id',
  tanggal_pinjam: 'tanggal_pinjam',
  batas_waktu: 'batas_waktu',
  tanggal_kembali: 'tanggal_kembali',
  petugas_peminjam: 'petugas_peminjam',
  petugas_penerima: 'petugas_penerima',
  keterangan: 'keterangan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.BandingdetilwebScalarFieldEnum = {
  ID: 'ID',
  IDPerkara: 'IDPerkara',
  nama: 'nama',
  IDStatusPihak: 'IDStatusPihak',
  statusPihak: 'statusPihak',
  pihakNama: 'pihakNama',
  pihakDiwakili: 'pihakDiwakili',
  pemohonNama: 'pemohonNama',
  tglPermohonan: 'tglPermohonan',
  tglPemberitahuanPermohonan: 'tglPemberitahuanPermohonan',
  tglPenerimaanMemori: 'tglPenerimaanMemori',
  tglPenyerahanMemori: 'tglPenyerahanMemori',
  tglPenerimaanKontra: 'tglPenerimaanKontra',
  tglPenyerahanKontra: 'tglPenyerahanKontra',
  tglPemberitahuanInzage: 'tglPemberitahuanInzage',
  tglPelaksanaanInzage: 'tglPelaksanaanInzage',
  tglPemberitahuanPutusanBanding: 'tglPemberitahuanPutusanBanding',
  tglCabut: 'tglCabut',
  keterangan: 'keterangan'
};

exports.Prisma.BandingwebScalarFieldEnum = {
  IDPerkara: 'IDPerkara',
  noPerkarabanding: 'noPerkarabanding',
  tglPermohonanBanding: 'tglPermohonanBanding',
  pemohonBanding: 'pemohonBanding',
  tglPemberitahuanPermohonan: 'tglPemberitahuanPermohonan',
  tglPenerimaanMemori: 'tglPenerimaanMemori',
  tglPenyerahanMemori: 'tglPenyerahanMemori',
  tglPenerimaanKontra: 'tglPenerimaanKontra',
  tglPenyerahanKontra: 'tglPenyerahanKontra',
  tglPemberitahuanInzagePembanding: 'tglPemberitahuanInzagePembanding',
  tglPemberitahuanInzageTerbanding: 'tglPemberitahuanInzageTerbanding',
  tglPelaksanaanInzagePembanding: 'tglPelaksanaanInzagePembanding',
  tglPelaksanaanInzageTerbanding: 'tglPelaksanaanInzageTerbanding',
  tglPengirimanBerkas: 'tglPengirimanBerkas',
  nomorSuratPengiriman: 'nomorSuratPengiriman',
  tglPenerimaanKembaliBerkas: 'tglPenerimaanKembaliBerkas',
  hakimPertama: 'hakimPertama',
  hakimKedua: 'hakimKedua',
  hakimKetiga: 'hakimKetiga',
  hakimKeempat: 'hakimKeempat',
  hakimKelima: 'hakimKelima',
  paniteraPengganti: 'paniteraPengganti',
  tglPutusan: 'tglPutusan',
  noPutusanBanding: 'noPutusanBanding',
  amarPutusan: 'amarPutusan',
  tglMinutasi: 'tglMinutasi',
  tglPemberitahuanPutusanPembanding: 'tglPemberitahuanPutusanPembanding',
  tglPemberitahuanPutusanTerbanding: 'tglPemberitahuanPutusanTerbanding',
  keterangan: 'keterangan'
};

exports.Prisma.BantahantagihanwebScalarFieldEnum = {
  ID: 'ID',
  IDPerkaraPascaPailit: 'IDPerkaraPascaPailit',
  IDPerkara: 'IDPerkara',
  tglPengajuan: 'tglPengajuan',
  pemohon: 'pemohon',
  kedudukanPemohon: 'kedudukanPemohon',
  hasil: 'hasil'
};

exports.Prisma.BarangbuktiwebScalarFieldEnum = {
  IDBarangBukti: 'IDBarangBukti',
  IDPerkara: 'IDPerkara',
  noPerkara: 'noPerkara',
  tglPenerimaan: 'tglPenerimaan',
  jenisBB: 'jenisBB',
  tempatSimpan: 'tempatSimpan',
  tempatPenyerahan: 'tempatPenyerahan',
  penerima: 'penerima',
  tglPenyerahan: 'tglPenyerahan',
  Catatan: 'Catatan'
};

exports.Prisma.Berpadu_pelimpahanScalarFieldEnum = {
  berkas_id: 'berkas_id',
  alur_perkara_id: 'alur_perkara_id',
  pemohon: 'pemohon',
  nomor_pelimpahan: 'nomor_pelimpahan',
  tanggal_pelimpahan: 'tanggal_pelimpahan',
  nomor_dakwaan: 'nomor_dakwaan',
  tanggal_dakwaan: 'tanggal_dakwaan',
  pasal_dakwaan: 'pasal_dakwaan',
  amar_dakwaan: 'amar_dakwaan',
  kode_satker_penyidik: 'kode_satker_penyidik',
  kode_satker_penuntut: 'kode_satker_penuntut',
  daftar_tersangka: 'daftar_tersangka',
  detail: 'detail',
  dokumen_dakwaan: 'dokumen_dakwaan'
};

exports.Prisma.Berpadu_pelimpahan_registerScalarFieldEnum = {
  berkas_id: 'berkas_id',
  nomor_perkara: 'nomor_perkara',
  tanggal_pendaftaran: 'tanggal_pendaftaran',
  perkara_id: 'perkara_id',
  flag: 'flag'
};

exports.Prisma.Biaya_perkaraScalarFieldEnum = {
  alur_perkara_id: 'alur_perkara_id',
  jenis_biaya_id: 'jenis_biaya_id',
  jumlah: 'jumlah',
  keterangan: 'keterangan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Bukti_tilangScalarFieldEnum = {
  id: 'id',
  kode: 'kode',
  nama: 'nama',
  keterangan: 'keterangan'
};

exports.Prisma.Ci_sessionsScalarFieldEnum = {
  id: 'id',
  ip_address: 'ip_address',
  timestamp: 'timestamp',
  data: 'data'
};

exports.Prisma.DataumumwebScalarFieldEnum = {
  IDPerkara: 'IDPerkara',
  tglPendaftaran: 'tglPendaftaran',
  klasifikasiPerkara: 'klasifikasiPerkara',
  IDJenisPerkara: 'IDJenisPerkara',
  jenisPerkara: 'jenisPerkara',
  noPerkara: 'noPerkara',
  tglSurat: 'tglSurat',
  noSurat: 'noSurat',
  petitumDakwaan: 'petitumDakwaan',
  dipublikasikan: 'dipublikasikan',
  prodeo: 'prodeo',
  nilai_sengketa: 'nilai_sengketa',
  IDProses: 'IDProses',
  statusAkhir: 'statusAkhir',
  pihakPertama: 'pihakPertama',
  pihakKedua: 'pihakKedua',
  pihakKetiga: 'pihakKetiga',
  pihakKeempat: 'pihakKeempat',
  tglPutusan: 'tglPutusan',
  tglMinutasi: 'tglMinutasi',
  pasalDakwaan: 'pasalDakwaan',
  tglBHT: 'tglBHT'
};

exports.Prisma.Delegasi_file_keluarScalarFieldEnum = {
  id: 'id',
  delegasi_id: 'delegasi_id',
  id_pn_asal: 'id_pn_asal',
  id_pn_tujuan: 'id_pn_tujuan',
  perkara_id: 'perkara_id',
  file: 'file',
  status_file: 'status_file',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Delegasi_file_masukScalarFieldEnum = {
  id: 'id',
  delegasi_id: 'delegasi_id',
  id_pn_asal: 'id_pn_asal',
  id_pn_tujuan: 'id_pn_tujuan',
  perkara_id: 'perkara_id',
  file: 'file',
  status_file: 'status_file',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Delegasi_keluarScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  nomor_perkara: 'nomor_perkara',
  id_pn_asal: 'id_pn_asal',
  kode_satker_asal: 'kode_satker_asal',
  pn_asal_text: 'pn_asal_text',
  id_pn_tujuan: 'id_pn_tujuan',
  kode_satker_tujuan: 'kode_satker_tujuan',
  pn_tujuan_text: 'pn_tujuan_text',
  tgl_delegasi: 'tgl_delegasi',
  id_jenis_delegasi: 'id_jenis_delegasi',
  jenis_delegasi_text: 'jenis_delegasi_text',
  tgl_surat: 'tgl_surat',
  tgl_pengiriman: 'tgl_pengiriman',
  nomor_surat: 'nomor_surat',
  tgl_sidang: 'tgl_sidang',
  namadokumen: 'namadokumen',
  document: 'document',
  document_size: 'document_size',
  document_mime: 'document_mime',
  tgl_resi: 'tgl_resi',
  nomor_resi: 'nomor_resi',
  biaya: 'biaya',
  pihak: 'pihak',
  catatan: 'catatan',
  status_kirim: 'status_kirim',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Delegasi_masukScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  nomor_perkara: 'nomor_perkara',
  id_pn_asal: 'id_pn_asal',
  kode_satker_asal: 'kode_satker_asal',
  pn_asal_text: 'pn_asal_text',
  id_pn_tujuan: 'id_pn_tujuan',
  kode_satker_tujuan: 'kode_satker_tujuan',
  pn_tujuan_text: 'pn_tujuan_text',
  tgl_delegasi: 'tgl_delegasi',
  id_jenis_delegasi: 'id_jenis_delegasi',
  jenis_delegasi_text: 'jenis_delegasi_text',
  tgl_surat: 'tgl_surat',
  tgl_pengiriman: 'tgl_pengiriman',
  nomor_surat: 'nomor_surat',
  tgl_sidang: 'tgl_sidang',
  namadokumen: 'namadokumen',
  document: 'document',
  document_size: 'document_size',
  document_mime: 'document_mime',
  tgl_resi: 'tgl_resi',
  nomor_resi: 'nomor_resi',
  biaya: 'biaya',
  status_kirim: 'status_kirim',
  pihak: 'pihak',
  catatan: 'catatan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Delegasi_masuk_riwayatScalarFieldEnum = {
  delegasi_id: 'delegasi_id',
  proses_id: 'proses_id',
  waktu: 'waktu'
};

exports.Prisma.Delegasi_proses_keluarScalarFieldEnum = {
  delegasi_id: 'delegasi_id',
  tgl_surat_diterima: 'tgl_surat_diterima',
  perkara_id: 'perkara_id',
  tgl_penunjukan_jurusita: 'tgl_penunjukan_jurusita',
  jurusita_id: 'jurusita_id',
  jurusita_nama: 'jurusita_nama',
  id_pn_asal: 'id_pn_asal',
  pn_asal_text: 'pn_asal_text',
  kode_satker_asal: 'kode_satker_asal',
  id_pn_tujuan: 'id_pn_tujuan',
  pn_tujuan_text: 'pn_tujuan_text',
  kode_satker_tujuan: 'kode_satker_tujuan',
  tgl_relaas: 'tgl_relaas',
  nomor_relaas: 'nomor_relaas',
  tgl_pengiriman_relaas: 'tgl_pengiriman_relaas',
  nomor_surat_pengantar_relaas: 'nomor_surat_pengantar_relaas',
  id_status_delegasi: 'id_status_delegasi',
  status_delegasi: 'status_delegasi',
  namadokumen: 'namadokumen',
  document: 'document',
  document_size: 'document_size',
  document_mime: 'document_mime',
  tgl_resi: 'tgl_resi',
  nomor_resi: 'nomor_resi',
  biaya: 'biaya',
  catatan: 'catatan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Delegasi_proses_masukScalarFieldEnum = {
  delegasi_id: 'delegasi_id',
  tgl_surat_diterima: 'tgl_surat_diterima',
  perkara_id: 'perkara_id',
  tgl_penunjukan_jurusita: 'tgl_penunjukan_jurusita',
  jurusita_id: 'jurusita_id',
  jurusita_nama: 'jurusita_nama',
  id_pn_asal: 'id_pn_asal',
  pn_asal_text: 'pn_asal_text',
  kode_satker_asal: 'kode_satker_asal',
  id_pn_tujuan: 'id_pn_tujuan',
  pn_tujuan_text: 'pn_tujuan_text',
  kode_satker_tujuan: 'kode_satker_tujuan',
  tgl_relaas: 'tgl_relaas',
  nomor_relaas: 'nomor_relaas',
  tgl_pengiriman_relaas: 'tgl_pengiriman_relaas',
  nomor_surat_pengantar_relaas: 'nomor_surat_pengantar_relaas',
  id_status_delegasi: 'id_status_delegasi',
  status_delegasi: 'status_delegasi',
  namadokumen: 'namadokumen',
  document: 'document',
  document_size: 'document_size',
  document_mime: 'document_mime',
  tgl_resi: 'tgl_resi',
  nomor_resi: 'nomor_resi',
  biaya: 'biaya',
  catatan: 'catatan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.DelegasikeluarwebScalarFieldEnum = {
  ID: 'ID',
  IDPerkara: 'IDPerkara',
  noPerkara: 'noPerkara',
  idPNAsal: 'idPNAsal',
  kodeSatkerAsal: 'kodeSatkerAsal',
  pnAsalText: 'pnAsalText',
  IDPNTujuan: 'IDPNTujuan',
  kodeSatkerTujuan: 'kodeSatkerTujuan',
  pnTujuanText: 'pnTujuanText',
  tglDelegasi: 'tglDelegasi',
  IDJenisDelegasi: 'IDJenisDelegasi',
  jenisDelegasiText: 'jenisDelegasiText',
  tglSurat: 'tglSurat',
  tglPengiriman: 'tglPengiriman',
  noSurat: 'noSurat'
};

exports.Prisma.DelegasimasukwebScalarFieldEnum = {
  ID: 'ID',
  IDPerkara: 'IDPerkara',
  noPerkara: 'noPerkara',
  idPNAsal: 'idPNAsal',
  kodeSatkerAsal: 'kodeSatkerAsal',
  pnAsalText: 'pnAsalText',
  IDPNTujuan: 'IDPNTujuan',
  kodeSatkerTujuan: 'kodeSatkerTujuan',
  pnTujuanText: 'pnTujuanText',
  tglDelegasi: 'tglDelegasi',
  IDJenisDelegasi: 'IDJenisDelegasi',
  jenisDelegasiText: 'jenisDelegasiText',
  tglSurat: 'tglSurat',
  tglPengiriman: 'tglPengiriman',
  noSurat: 'noSurat'
};

exports.Prisma.DelegasiproseskeluarwebScalarFieldEnum = {
  IDDelegasi: 'IDDelegasi',
  tglSuratDiterima: 'tglSuratDiterima',
  IDPerkara: 'IDPerkara',
  IDJurusita: 'IDJurusita',
  jurusitaNama: 'jurusitaNama',
  idPNAsal: 'idPNAsal',
  pnAsalText: 'pnAsalText',
  kodeSatkerAsal: 'kodeSatkerAsal',
  idPNTujuan: 'idPNTujuan',
  pnTujuanText: 'pnTujuanText',
  kodeSatkertTujuan: 'kodeSatkertTujuan',
  tglRelaas: 'tglRelaas',
  nomorRelaas: 'nomorRelaas',
  tglPengirimanRelaas: 'tglPengirimanRelaas',
  nomorSuratPengantarRelaas: 'nomorSuratPengantarRelaas',
  idStatusDeleasgi: 'idStatusDeleasgi',
  statusDelegasi: 'statusDelegasi',
  catatan: 'catatan'
};

exports.Prisma.DelegasiprosesmasukwebScalarFieldEnum = {
  IDDelegasi: 'IDDelegasi',
  tglSuratDiterima: 'tglSuratDiterima',
  IDPerkara: 'IDPerkara',
  IDJurusita: 'IDJurusita',
  jurusitaNama: 'jurusitaNama',
  idPNAsal: 'idPNAsal',
  pnAsalText: 'pnAsalText',
  kodeSatkerAsal: 'kodeSatkerAsal',
  idPNTujuan: 'idPNTujuan',
  pnTujuanText: 'pnTujuanText',
  kodeSatkertTujuan: 'kodeSatkertTujuan',
  tglRelaas: 'tglRelaas',
  nomorRelaas: 'nomorRelaas',
  tglPengirimanRelaas: 'tglPengirimanRelaas',
  nomorSuratPengantarRelaas: 'nomorSuratPengantarRelaas',
  idStatusDeleasgi: 'idStatusDeleasgi',
  statusDelegasi: 'statusDelegasi',
  catatan: 'catatan'
};

exports.Prisma.Dirput_antrianScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  status: 'status',
  last_tried: 'last_tried',
  keterangan: 'keterangan',
  tgl_masuk: 'tgl_masuk'
};

exports.Prisma.Dirput_dokumenScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  dokumen_ref_id: 'dokumen_ref_id',
  filename: 'filename',
  path_filename: 'path_filename',
  created_by: 'created_by',
  created_date: 'created_date',
  updated_by: 'updated_by',
  updated_date: 'updated_date',
  pihak_detil_id: 'pihak_detil_id',
  keterangan: 'keterangan',
  flag_sync: 'flag_sync',
  pengajuan_id: 'pengajuan_id',
  published: 'published',
  link_dirput: 'link_dirput'
};

exports.Prisma.Dirput_dokumen_refScalarFieldEnum = {
  dokumen_ref_id: 'dokumen_ref_id',
  jenis_pengadilan: 'jenis_pengadilan',
  alur_perkara_id: 'alur_perkara_id',
  pengajuan_id: 'pengajuan_id',
  keterangan_file: 'keterangan_file',
  urutan: 'urutan',
  format: 'format'
};

exports.Prisma.Dirput_pengajuanScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  pengajuan_guid: 'pengajuan_guid',
  nomor_perkara: 'nomor_perkara',
  nomor_surat_pengantar: 'nomor_surat_pengantar',
  tgl_surat_pengantar: 'tgl_surat_pengantar',
  no_resi_pos: 'no_resi_pos',
  status_pengajuan: 'status_pengajuan',
  tgl_status_pengajuan: 'tgl_status_pengajuan',
  barcode: 'barcode',
  pengajuan_id: 'pengajuan_id',
  id_surat_pengantar: 'id_surat_pengantar'
};

exports.Prisma.Dirput_perkaraScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  putusan_id: 'putusan_id',
  nomor_perkara: 'nomor_perkara',
  pengajuan_id: 'pengajuan_id',
  nomor_perkara_key: 'nomor_perkara_key'
};

exports.Prisma.Dirput_refScalarFieldEnum = {
  guid: 'guid',
  title: 'title',
  category: 'category',
  alur_perkara_id: 'alur_perkara_id',
  sub_category: 'sub_category',
  description: 'description',
  parentguid: 'parentguid'
};

exports.Prisma.Dirput_sipp_refScalarFieldEnum = {
  id: 'id',
  alur_perkara_id: 'alur_perkara_id',
  jenis_perkara_id: 'jenis_perkara_id',
  nama_alur: 'nama_alur',
  jenis_perkara: 'jenis_perkara',
  guid: 'guid',
  parentguid: 'parentguid'
};

exports.Prisma.Diversi_anak_blm_12tahunScalarFieldEnum = {
  id: 'id',
  urutan: 'urutan',
  register_id: 'register_id',
  pihak_anak: 'pihak_anak'
};

exports.Prisma.Diversi_anak_orang_tuaScalarFieldEnum = {
  id: 'id',
  diversi_register_id: 'diversi_register_id',
  urutan: 'urutan',
  pihak_anak: 'pihak_anak',
  pihak_orang_tua: 'pihak_orang_tua',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Diversi_jenis_kesepakatan_diversiScalarFieldEnum = {
  id: 'id',
  diversi_register_id: 'diversi_register_id',
  jenis_kesepakatan_diversi: 'jenis_kesepakatan_diversi',
  perkara_id: 'perkara_id'
};

exports.Prisma.Diversi_korban_orang_tuaScalarFieldEnum = {
  id: 'id',
  diversi_register_id: 'diversi_register_id',
  urutan: 'urutan',
  pihak_anak: 'pihak_anak',
  pihak_orang_tua: 'pihak_orang_tua',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Diversi_pembimbing_kemasyarakatanScalarFieldEnum = {
  id: 'id',
  diversi_register_id: 'diversi_register_id',
  urutan: 'urutan',
  pihak_id: 'pihak_id',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Diversi_penasihat_hukumScalarFieldEnum = {
  id: 'id',
  diversi_register_id: 'diversi_register_id',
  urutan: 'urutan',
  pengacara_id: 'pengacara_id',
  anak_id: 'anak_id',
  aktif: 'aktif',
  aktif_mulai: 'aktif_mulai',
  aktif_sampai: 'aktif_sampai',
  no_surat_kuasa: 'no_surat_kuasa',
  tgl_surat_kuasa: 'tgl_surat_kuasa',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Diversi_penyidikScalarFieldEnum = {
  id: 'id',
  diversi_register_id: 'diversi_register_id',
  urutan: 'urutan',
  pihak_id: 'pihak_id',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Diversi_registerScalarFieldEnum = {
  id: 'id',
  no_urut: 'no_urut',
  no_diversi: 'no_diversi',
  tgl_permohonan_diversi: 'tgl_permohonan_diversi',
  pemohon_diversi: 'pemohon_diversi',
  asal_berkas: 'asal_berkas',
  no_reg_penyidik: 'no_reg_penyidik',
  no_reg_penuntut_umum: 'no_reg_penuntut_umum',
  no_perkara: 'no_perkara',
  perkara_id: 'perkara_id',
  pihak_penasihat_hukum: 'pihak_penasihat_hukum',
  pihak_pk_bapas: 'pihak_pk_bapas',
  pihak_penyidik: 'pihak_penyidik',
  pihak_penuntut: 'pihak_penuntut',
  no_berita_acara: 'no_berita_acara',
  tgl_berita_acara: 'tgl_berita_acara',
  pasal_sangkaan_dakwaan: 'pasal_sangkaan_dakwaan',
  tgl_kesepakatan_diversi: 'tgl_kesepakatan_diversi',
  isi_kesepakatan_diversi: 'isi_kesepakatan_diversi',
  tanggal_penetapan_kpn: 'tanggal_penetapan_kpn',
  tgl_pengiriman_penetapan_kpn: 'tgl_pengiriman_penetapan_kpn',
  amar: 'amar',
  tgl_pelaksanaan_isi_diversi: 'tgl_pelaksanaan_isi_diversi',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Diversi_register_blm_12tahunScalarFieldEnum = {
  id: 'id',
  no_urut: 'no_urut',
  nomor_permohonan: 'nomor_permohonan',
  tgl_permohonan: 'tgl_permohonan',
  nomor_penetapan: 'nomor_penetapan',
  tgl_penetapan: 'tgl_penetapan',
  nomor_lap_kemasyarakatan: 'nomor_lap_kemasyarakatan',
  tgl_lap_kemasyarakatan: 'tgl_lap_kemasyarakatan',
  nomor_kep_penyidik: 'nomor_kep_penyidik',
  tgl_kep_penyidik: 'tgl_kep_penyidik',
  isi_kep_penyidik: 'isi_kep_penyidik',
  tgl_tindak_pidana: 'tgl_tindak_pidana',
  uraian_tindak_pidana: 'uraian_tindak_pidana'
};

exports.Prisma.DiversiwebScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  diversi_register_id: 'diversi_register_id',
  pihak_diversi: 'pihak_diversi',
  no_reg_penyidik: 'no_reg_penyidik',
  no_reg_penuntut_umum: 'no_reg_penuntut_umum',
  tgl_penetapan_musyawarah: 'tgl_penetapan_musyawarah',
  tgl_musyawarah: 'tgl_musyawarah',
  kesepakatan_melaksanakan_diversi: 'kesepakatan_melaksanakan_diversi',
  tgl_kesepakatan_diversi: 'tgl_kesepakatan_diversi',
  tgl_laporan_hakim: 'tgl_laporan_hakim',
  tgl_penetapan_kesepakatan_diversi: 'tgl_penetapan_kesepakatan_diversi',
  no_penetapan_kesepakatan: 'no_penetapan_kesepakatan',
  tgl_lap_pembimbing_masyarakat: 'tgl_lap_pembimbing_masyarakat',
  hasil_lap_pembimbing_masyarakat: 'hasil_lap_pembimbing_masyarakat',
  nomor_laporan_pembimbing_masyarakat: 'nomor_laporan_pembimbing_masyarakat',
  hasil_diversi: 'hasil_diversi',
  dibuka_kembali: 'dibuka_kembali',
  no_dibuka_kembali: 'no_dibuka_kembali',
  tgl_dibuka_kembali: 'tgl_dibuka_kembali',
  tgl_pelaksanaan_isi_diversi: 'tgl_pelaksanaan_isi_diversi'
};

exports.Prisma.Ecourt_antrian_cabutScalarFieldEnum = {
  antrian_id: 'antrian_id',
  efiling_id: 'efiling_id',
  ecourt_pihak_id: 'ecourt_pihak_id',
  tahapan_id: 'tahapan_id',
  status_antrian: 'status_antrian',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Ecourt_antrian_pendaftaranScalarFieldEnum = {
  antrian_id: 'antrian_id',
  efiling_id: 'efiling_id',
  pendaftaran_id: 'pendaftaran_id',
  tahapan_id: 'tahapan_id',
  status_antrian: 'status_antrian',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Ecourt_bandingScalarFieldEnum = {
  id_pendaftaran_banding: 'id_pendaftaran_banding',
  efiling_id: 'efiling_id',
  pendaftar_pihak_id: 'pendaftar_pihak_id',
  kuasa_pihak_id: 'kuasa_pihak_id',
  nomor_perkara: 'nomor_perkara',
  tanggal_putusan: 'tanggal_putusan',
  tanggal_permohonan_banding: 'tanggal_permohonan_banding',
  nomor_va: 'nomor_va',
  jumlah_skum: 'jumlah_skum',
  tanggal_bayar: 'tanggal_bayar',
  status_pendaftaran_banding_id: 'status_pendaftaran_banding_id',
  status_pendaftaran_banding_text: 'status_pendaftaran_banding_text'
};

exports.Prisma.Ecourt_biayaScalarFieldEnum = {
  id: 'id',
  flag: 'flag',
  flag_delete: 'flag_delete'
};

exports.Prisma.Ecourt_cabutScalarFieldEnum = {
  cabut_id: 'cabut_id',
  efiling_id: 'efiling_id',
  nomor_perkara: 'nomor_perkara',
  ecourt_pihak_id: 'ecourt_pihak_id',
  tahapan_id: 'tahapan_id',
  tanggal_permohonan_cabut: 'tanggal_permohonan_cabut',
  status_permohonan_cabut: 'status_permohonan_cabut',
  keterangan: 'keterangan',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Ecourt_hakimScalarFieldEnum = {
  id: 'id',
  flag: 'flag'
};

exports.Prisma.Ecourt_jadwal_sidangScalarFieldEnum = {
  id: 'id',
  flag: 'flag',
  flag_delete: 'flag_delete'
};

exports.Prisma.Ecourt_jurusitaScalarFieldEnum = {
  id: 'id',
  flag: 'flag'
};

exports.Prisma.Ecourt_kuasa_hukumScalarFieldEnum = {
  efiling_id: 'efiling_id',
  pendaftaran_id: 'pendaftaran_id',
  ecourt_pengacara_id: 'ecourt_pengacara_id',
  ecourt_pihak_id: 'ecourt_pihak_id',
  tahapan_id: 'tahapan_id',
  status_pihak: 'status_pihak',
  aktif: 'aktif'
};

exports.Prisma.Ecourt_paniteraScalarFieldEnum = {
  id: 'id',
  flag: 'flag'
};

exports.Prisma.Ecourt_pengacaraScalarFieldEnum = {
  ecourt_pengacara_id: 'ecourt_pengacara_id',
  sipp_pihak_id: 'sipp_pihak_id'
};

exports.Prisma.Ecourt_pengacara_tmpScalarFieldEnum = {
  pihak_id: 'pihak_id',
  mulai_berlaku: 'mulai_berlaku',
  akhir_berlaku: 'akhir_berlaku'
};

exports.Prisma.Ecourt_perkara_hakimScalarFieldEnum = {
  id: 'id',
  flag: 'flag',
  flag_delete: 'flag_delete'
};

exports.Prisma.Ecourt_perkara_jurusitaScalarFieldEnum = {
  id: 'id',
  flag: 'flag',
  flag_delete: 'flag_delete'
};

exports.Prisma.Ecourt_perkara_paniteraScalarFieldEnum = {
  id: 'id',
  flag: 'flag',
  flag_delete: 'flag_delete'
};

exports.Prisma.Ecourt_pihakScalarFieldEnum = {
  ecourt_pihak_id: 'ecourt_pihak_id',
  efiling_id: 'efiling_id',
  sipp_pihak_id: 'sipp_pihak_id',
  pihak_id: 'pihak_id',
  status_pihak_id: 'status_pihak_id',
  verifikasi_pihak: 'verifikasi_pihak'
};

exports.Prisma.Ecourt_prodeoScalarFieldEnum = {
  id: 'id',
  efiling_id: 'efiling_id',
  jenis_prodeo: 'jenis_prodeo',
  status: 'status',
  document: 'document',
  document_penetapan: 'document_penetapan',
  keterangan: 'keterangan',
  info: 'info',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Ecourt_putusanScalarFieldEnum = {
  perkara_id: 'perkara_id',
  flag: 'flag',
  flag_delete: 'flag_delete'
};

exports.Prisma.Ecourt_ref_sinkScalarFieldEnum = {
  jenis_data_id: 'jenis_data_id',
  jenis_data: 'jenis_data'
};

exports.Prisma.Ecourt_sink_logScalarFieldEnum = {
  jenis_data_id: 'jenis_data_id',
  sink_timestamp: 'sink_timestamp'
};

exports.Prisma.EksekusidetilwebScalarFieldEnum = {
  ID: 'ID',
  IDEksekusi: 'IDEksekusi',
  IDPerkara: 'IDPerkara',
  nama: 'nama',
  IDStatusPihak: 'IDStatusPihak',
  statusPihak: 'statusPihak',
  pihakDimohonkan: 'pihakDimohonkan',
  tglPemberitahuanPermohonan: 'tglPemberitahuanPermohonan'
};

exports.Prisma.EksekusiwebScalarFieldEnum = {
  ID: 'ID',
  IDPerkara: 'IDPerkara',
  IDAlurPerkara: 'IDAlurPerkara',
  noPerkaraPN: 'noPerkaraPN',
  PutusanPN: 'PutusanPN',
  noPerkaraBanding: 'noPerkaraBanding',
  putusanBanding: 'putusanBanding',
  noPerkaraKasasi: 'noPerkaraKasasi',
  putusanKasasi: 'putusanKasasi',
  noPerkaraPK: 'noPerkaraPK',
  putusanPK: 'putusanPK',
  eksekusiPutusan: 'eksekusiPutusan',
  eksekusiNomorPerkara: 'eksekusiNomorPerkara',
  eksekusiAmarPutusan: 'eksekusiAmarPutusan',
  pihakPemohonEksekusi: 'pihakPemohonEksekusi',
  permohonanEsekusi: 'permohonanEsekusi',
  pemohonEksekusi: 'pemohonEksekusi',
  paraPihak: 'paraPihak',
  penetapanTeguranEksekusi: 'penetapanTeguranEksekusi',
  nomorPenetapanTeguranEksekusi: 'nomorPenetapanTeguranEksekusi',
  pelaksanaanTeguranEksekusi: 'pelaksanaanTeguranEksekusi',
  pelaksanaanTeguranEksekusiKedua: 'pelaksanaanTeguranEksekusiKedua',
  penetapanSitaEksekusi: 'penetapanSitaEksekusi',
  nomorPenetapanSitaEksekusi: 'nomorPenetapanSitaEksekusi',
  pelaksanaanSitaEksekusi: 'pelaksanaanSitaEksekusi',
  jurusitaNama: 'jurusitaNama',
  penetapanPerintahEksekusiLelang: 'penetapanPerintahEksekusiLelang',
  pelaksanaanEksekusiLelang: 'pelaksanaanEksekusiLelang',
  penyerahanHasilLelang: 'penyerahanHasilLelang',
  penetapanPerintahEksekusiRill: 'penetapanPerintahEksekusiRill',
  pelaksanaanEksekusiRill: 'pelaksanaanEksekusiRill',
  penetapanNoneksekusi: 'penetapanNoneksekusi',
  diterimaPermohonan: 'diterimaPermohonan',
  panggilanParapihak: 'panggilanParapihak',
  penetapanKetua: 'penetapanKetua',
  skObjekTidakPunyaKekuatanHukum: 'skObjekTidakPunyaKekuatanHukum',
  suratTergugatObjekNonExecutable: 'suratTergugatObjekNonExecutable',
  panggilanPihakNonExecutable: 'panggilanPihakNonExecutable',
  upayaKesepakatanKompensasi: 'upayaKesepakatanKompensasi',
  penetapanKetuaKompensasi: 'penetapanKetuaKompensasi',
  upayaHukumKma: 'upayaHukumKma',
  penetapanKmaKompensasi: 'penetapanKmaKompensasi',
  uangpaksaPutusanHakim: 'uangpaksaPutusanHakim',
  uangpaksaPenetapanKetua: 'uangpaksaPenetapanKetua',
  suratKetuaTergugatUangpaksa: 'suratKetuaTergugatUangpaksa',
  suratPeringatanUangpaksa: 'suratPeringatanUangpaksa',
  perintahKetuaSaksiAdministratif: 'perintahKetuaSaksiAdministratif',
  sanksiAministratifDariPejabat: 'sanksiAministratifDariPejabat',
  pengumumanKetuaPaniteraJs: 'pengumumanKetuaPaniteraJs',
  pengumumanMedia: 'pengumumanMedia',
  surat_Pesiden: 'surat_Pesiden',
  suratLembagaPerwakilanRakyat: 'suratLembagaPerwakilanRakyat',
  alasanEksekusi: 'alasanEksekusi',
  catatanEksekusi: 'catatanEksekusi',
  prodeoEksekusi: 'prodeoEksekusi',
  statusEksekusiText: 'statusEksekusiText',
  alasanEksekusiTidakDilaksanakan: 'alasanEksekusiTidakDilaksanakan',
  pelaksanaanEksekusiNama: 'pelaksanaanEksekusiNama',
  prodeo: 'prodeo',
  tglPendaftaranAction: 'tglPendaftaranAction'
};

exports.Prisma.EpaymentScalarFieldEnum = {
  id: 'id',
  nomor_va: 'nomor_va',
  jumlah_bayar: 'jumlah_bayar',
  tanggal_bayar: 'tanggal_bayar'
};

exports.Prisma.Epayment_virtual_accountScalarFieldEnum = {
  epayment_id: 'epayment_id',
  perkara_id: 'perkara_id',
  alur_perkara_id: 'alur_perkara_id',
  tahapan_id: 'tahapan_id',
  jenis_biaya: 'jenis_biaya',
  trx_id: 'trx_id',
  kode_bank: 'kode_bank',
  nama_bank: 'nama_bank',
  va_id: 'va_id',
  customer_name: 'customer_name',
  email: 'email',
  telepon: 'telepon',
  nominal: 'nominal',
  created_time: 'created_time',
  expired_date: 'expired_date',
  status_bayar: 'status_bayar',
  is_jurnal: 'is_jurnal'
};

exports.Prisma.Faktor_perceraianScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  aktif: 'aktif',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.GrasiwebScalarFieldEnum = {
  ID: 'ID',
  IDPerkara: 'IDPerkara',
  IDAlurPerkara: 'IDAlurPerkara',
  tglPermohonan: 'tglPermohonan',
  namaTerdakwa: 'namaTerdakwa',
  namaPemohon: 'namaPemohon',
  tglPertimbanganMA: 'tglPertimbanganMA',
  tglPengirimanBerkas: 'tglPengirimanBerkas',
  tglPenerimaanBerkas: 'tglPenerimaanBerkas',
  tglPutusan: 'tglPutusan',
  noPutusan: 'noPutusan',
  amarPutusan: 'amarPutusan',
  tglPemberitahuanPutusan: 'tglPemberitahuanPutusan',
  tglPemberitahuanTembusan: 'tglPemberitahuanTembusan',
  keterangan: 'keterangan'
};

exports.Prisma.Hakim_maScalarFieldEnum = {
  id: 'id',
  status_hakim_id: 'status_hakim_id',
  kode: 'kode',
  nip: 'nip',
  nama: 'nama',
  nama_gelar: 'nama_gelar',
  aktif: 'aktif',
  keterangan: 'keterangan',
  foto: 'foto',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Hakim_pnScalarFieldEnum = {
  id: 'id',
  status_hakim_id: 'status_hakim_id',
  kode: 'kode',
  nip: 'nip',
  pangkat: 'pangkat',
  jabatan: 'jabatan',
  nama: 'nama',
  nama_gelar: 'nama_gelar',
  aktif: 'aktif',
  mulai: 'mulai',
  keterangan: 'keterangan',
  foto: 'foto',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Hakim_ptScalarFieldEnum = {
  id: 'id',
  status_hakim_id: 'status_hakim_id',
  kode: 'kode',
  nip: 'nip',
  pangkat: 'pangkat',
  jabatan: 'jabatan',
  nama: 'nama',
  nama_gelar: 'nama_gelar',
  aktif: 'aktif',
  keterangan: 'keterangan',
  foto: 'foto',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.HakimpengawaswebScalarFieldEnum = {
  ID: 'ID',
  IDPerkara: 'IDPerkara',
  IDPerkaraPascaPailit: 'IDPerkaraPascaPailit',
  tglPengangkatan: 'tglPengangkatan',
  noPengangkatan: 'noPengangkatan',
  IDHakim: 'IDHakim',
  nama: 'nama',
  aktif: 'aktif'
};

exports.Prisma.HakimwebScalarFieldEnum = {
  IDPerkara: 'IDPerkara',
  IDHakim: 'IDHakim',
  IDTahapan: 'IDTahapan',
  tglPenetapan: 'tglPenetapan',
  posisiHakim: 'posisiHakim',
  urutan: 'urutan',
  nama: 'nama',
  aktif: 'aktif',
  jenisAcara: 'jenisAcara'
};

exports.Prisma.Hari_liburScalarFieldEnum = {
  tanggal: 'tanggal',
  keterangan: 'keterangan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal'
};

exports.Prisma.HartapailitwebScalarFieldEnum = {
  IDPerkara: 'IDPerkara',
  IDAlurPerkara: 'IDAlurPerkara',
  tglPendaftaran: 'tglPendaftaran',
  noPerkara: 'noPerkara',
  paraPihak: 'paraPihak',
  IDPutusan: 'IDPutusan',
  tglPutusan: 'tglPutusan',
  noPutusan: 'noPutusan',
  hakimPengawas: 'hakimPengawas',
  kurator: 'kurator',
  tglInsolvensi: 'tglInsolvensi',
  tglPenetapanHakimPengawas: 'tglPenetapanHakimPengawas',
  noPenetapanHakimPengawas: 'noPenetapanHakimPengawas',
  amarPenetapanHakimPengawas: 'amarPenetapanHakimPengawas',
  panitera: 'panitera',
  jurusita: 'jurusita',
  tglPelelangan: 'tglPelelangan',
  tglPembagian: 'tglPembagian',
  kreditur: 'kreditur',
  jumlahPembagian: 'jumlahPembagian',
  catatan: 'catatan'
};

exports.Prisma.HasilpemungutansuarawebScalarFieldEnum = {
  ID: 'ID',
  IDProses: 'IDProses',
  IDPerkara: 'IDPerkara',
  IDPerkaraPascaPailit: 'IDPerkaraPascaPailit',
  tglPemungutan: 'tglPemungutan',
  amar: 'amar',
  hasilPemungutan: 'hasilPemungutan'
};

exports.Prisma.IkrarwebScalarFieldEnum = {
  IDPerkara: 'IDPerkara',
  tglPenetapanMajelis: 'tglPenetapanMajelis',
  majelisHakim: 'majelisHakim',
  tglPenetapanPP: 'tglPenetapanPP',
  paniteraPengganti: 'paniteraPengganti',
  tglPenetapanJurusita: 'tglPenetapanJurusita',
  jurusita: 'jurusita',
  tglPenetapanSidang: 'tglPenetapanSidang',
  tglSidangPertama: 'tglSidangPertama',
  tglIkrar: 'tglIkrar',
  IDStatusPenetapan: 'IDStatusPenetapan',
  amarPutusan: 'amarPutusan'
};

exports.Prisma.Izin_penggeledahanScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  nomor_perkara: 'nomor_perkara',
  tanggal_permohonan: 'tanggal_permohonan',
  penggeledah: 'penggeledah',
  tersangka_id: 'tersangka_id',
  tersangka_nama: 'tersangka_nama',
  laporan_penggeledahan: 'laporan_penggeledahan',
  catatan_penggeledahan: 'catatan_penggeledahan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Izin_penyitaanScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  nomor_perkara: 'nomor_perkara',
  tanggal_permohonan: 'tanggal_permohonan',
  penggeledah: 'penggeledah',
  tersangka_id: 'tersangka_id',
  tersangka_nama: 'tersangka_nama',
  laporan_penyitaan: 'laporan_penyitaan',
  catatan_penyitaan: 'catatan_penyitaan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Jabatan_hakimScalarFieldEnum = {
  id: 'id',
  kode: 'kode',
  nama: 'nama',
  keterangan: 'keterangan',
  aktif: 'aktif',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.JadwalsidangwebScalarFieldEnum = {
  ID: 'ID',
  IDPerkara: 'IDPerkara',
  tglSidang: 'tglSidang',
  jamSidang: 'jamSidang',
  selesaiSidang: 'selesaiSidang',
  agenda: 'agenda',
  ruangan: 'ruangan',
  sidangKeliling: 'sidangKeliling',
  dihadiriOleh: 'dihadiriOleh',
  ditunda: 'ditunda',
  alasanDitunda: 'alasanDitunda',
  verzet: 'verzet',
  keterangan: 'keterangan'
};

exports.Prisma.Jenis_alur_perkaraScalarFieldEnum = {
  alur_perkara_id: 'alur_perkara_id',
  jenis_perkara_id: 'jenis_perkara_id'
};

exports.Prisma.Jenis_biayaScalarFieldEnum = {
  id: 'id',
  tahapan_id: 'tahapan_id',
  jenis_transaksi: 'jenis_transaksi',
  kategori_id: 'kategori_id',
  kode: 'kode',
  nama: 'nama',
  jumlah: 'jumlah',
  keterangan: 'keterangan',
  aktif: 'aktif',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Jenis_delegasiScalarFieldEnum = {
  id: 'id',
  urutan: 'urutan',
  jenis_delegasi: 'jenis_delegasi'
};

exports.Prisma.Jenis_dokumenScalarFieldEnum = {
  id: 'id',
  alur_perkara_id: 'alur_perkara_id',
  kode: 'kode',
  nama: 'nama',
  keterangan: 'keterangan',
  aktif: 'aktif',
  urutan: 'urutan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Jenis_identitasScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Jenis_intervensiScalarFieldEnum = {
  id: 'id',
  kode: 'kode',
  nama: 'nama',
  keterangan: 'keterangan'
};

exports.Prisma.Jenis_kendaraanScalarFieldEnum = {
  id: 'id',
  kode: 'kode',
  nama: 'nama',
  keterangan: 'keterangan'
};

exports.Prisma.Jenis_penahananScalarFieldEnum = {
  id: 'id',
  kode: 'kode',
  urutan: 'urutan',
  nama: 'nama',
  batas_waktu: 'batas_waktu',
  batas_waktu_anak: 'batas_waktu_anak',
  keterangan: 'keterangan',
  jenis_pengadilan: 'jenis_pengadilan',
  aktif: 'aktif',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Jenis_perkaraScalarFieldEnum = {
  id: 'id',
  parent_id: 'parent_id',
  kode: 'kode',
  nama: 'nama',
  nama_lengkap: 'nama_lengkap',
  format_nomor: 'format_nomor',
  keterangan: 'keterangan',
  tipe_level: 'tipe_level',
  aktif: 'aktif',
  urutan: 'urutan',
  level: 'level',
  lft: 'lft',
  rgt: 'rgt',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Jenis_pihakScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  keterangan: 'keterangan',
  aktif: 'aktif',
  jenis_pengadilan: 'jenis_pengadilan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Jenis_tahananScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  keterangan: 'keterangan',
  aktif: 'aktif',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.JenisperkarawebScalarFieldEnum = {
  id: 'id',
  idalurperkara: 'idalurperkara',
  nama: 'nama'
};

exports.Prisma.JurusitaScalarFieldEnum = {
  id: 'id',
  kode: 'kode',
  nip: 'nip',
  nama: 'nama',
  nama_gelar: 'nama_gelar',
  jabatan: 'jabatan',
  keterangan: 'keterangan',
  aktif: 'aktif',
  foto: 'foto',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.JurusitawebScalarFieldEnum = {
  IDJs: 'IDJs',
  IDPerkara: 'IDPerkara',
  IDTahapan: 'IDTahapan',
  tglPenetapan: 'tglPenetapan',
  nama: 'nama',
  aktif: 'aktif'
};

exports.Prisma.KabupatenScalarFieldEnum = {
  id: 'id',
  propinsi_id: 'propinsi_id',
  kode: 'kode',
  nama: 'nama',
  keterangan: 'keterangan',
  aktif: 'aktif',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.KasasidetilwebScalarFieldEnum = {
  ID: 'ID',
  IDPerkara: 'IDPerkara',
  nama: 'nama',
  IDStatusPihak: 'IDStatusPihak',
  statusPihak: 'statusPihak',
  pihak_nama: 'pihak_nama',
  pihak_diwakili: 'pihak_diwakili',
  pemohon_nama: 'pemohon_nama',
  tglPermohonan: 'tglPermohonan',
  tglPemberitahuanPermohonan: 'tglPemberitahuanPermohonan',
  tglPenerimaanMemori: 'tglPenerimaanMemori',
  tglPenyerahanMemori: 'tglPenyerahanMemori',
  tglPenerimaanKontra: 'tglPenerimaanKontra',
  tglPenyerahanKontra: 'tglPenyerahanKontra',
  tglPemberitahuanInzage: 'tglPemberitahuanInzage',
  tglPelaksanaanInzage: 'tglPelaksanaanInzage',
  tglPemberitahuanPutusanKasasi: 'tglPemberitahuanPutusanKasasi',
  tglCabut: 'tglCabut'
};

exports.Prisma.KasasiwebScalarFieldEnum = {
  IDPerkara: 'IDPerkara',
  noPerkaraKasasi: 'noPerkaraKasasi',
  tglPermohonankasasi: 'tglPermohonankasasi',
  pemohonkasasi: 'pemohonkasasi',
  tglPengirimanBerkas: 'tglPengirimanBerkas',
  noSuratPengiriman: 'noSuratPengiriman',
  tglPenerimaanKembaliBerkas: 'tglPenerimaanKembaliBerkas',
  hakimPertama: 'hakimPertama',
  hakimKedua: 'hakimKedua',
  hakimKetiga: 'hakimKetiga',
  hakimKeempat: 'hakimKeempat',
  hakimKelima: 'hakimKelima',
  paniteraPengganti: 'paniteraPengganti',
  tglPutusan: 'tglPutusan',
  noPutusankasasi: 'noPutusankasasi',
  amarPutusan: 'amarPutusan',
  tglMinutasi: 'tglMinutasi',
  tglBeritaPutusan: 'tglBeritaPutusan',
  namaMediaBerita: 'namaMediaBerita',
  tglSuratKabar: 'tglSuratKabar',
  namaSuratKabar: 'namaSuratKabar',
  prodeo: 'prodeo',
  keterangan: 'keterangan'
};

exports.Prisma.Kategori_biayaScalarFieldEnum = {
  id: 'id',
  kode: 'kode',
  nama: 'nama',
  keterangan: 'keterangan',
  aktif: 'aktif',
  urutan: 'urutan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Kejaksaan_negeriScalarFieldEnum = {
  id: 'id',
  kode_kejati: 'kode_kejati',
  kode_kejari: 'kode_kejari',
  nama_instansi: 'nama_instansi',
  kode_satker_pn: 'kode_satker_pn',
  aktif: 'aktif',
  jenis_pengadilan: 'jenis_pengadilan'
};

exports.Prisma.Kejaksaan_tinggiScalarFieldEnum = {
  id: 'id',
  kode: 'kode',
  nama: 'nama',
  aktif: 'aktif'
};

exports.Prisma.Kuesioner_ikmScalarFieldEnum = {
  id: 'id',
  no: 'no',
  pertanyaan: 'pertanyaan'
};

exports.Prisma.Kuesioner_ipkScalarFieldEnum = {
  id: 'id',
  no: 'no',
  pertanyaan: 'pertanyaan'
};

exports.Prisma.KuratorScalarFieldEnum = {
  id: 'id',
  pihak_id: 'pihak_id',
  nama: 'nama',
  alamat_kantor: 'alamat_kantor',
  telepon_kantor: 'telepon_kantor',
  fax_kantor: 'fax_kantor',
  tanggal_ijin: 'tanggal_ijin',
  nomor_ijin: 'nomor_ijin',
  mulai_ijin: 'mulai_ijin',
  sampai_ijin: 'sampai_ijin',
  masa_berlaku: 'masa_berlaku',
  tanggal_penyumpahan: 'tanggal_penyumpahan',
  tanggal_pendaftaran_pn: 'tanggal_pendaftaran_pn',
  keterangan: 'keterangan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.KuratorwebScalarFieldEnum = {
  ID: 'ID',
  IDUrutan: 'IDUrutan',
  IDPerkara: 'IDPerkara',
  IDPerkaraPascaPailit: 'IDPerkaraPascaPailit',
  tglPengangkatan: 'tglPengangkatan',
  nama: 'nama',
  noPenunjukan: 'noPenunjukan',
  aktif: 'aktif',
  jenis: 'jenis',
  urutan: 'urutan'
};

exports.Prisma.LaporanpublisitaswebScalarFieldEnum = {
  ID: 'ID',
  IDPerkaraPascaPailit: 'IDPerkaraPascaPailit',
  IDPerkara: 'IDPerkara',
  IDUrutan: 'IDUrutan',
  tglPublisitas: 'tglPublisitas',
  IDJenisMedia: 'IDJenisMedia',
  jenisMedia: 'jenisMedia'
};

exports.Prisma.Lembaga_pemasyarakatanScalarFieldEnum = {
  id: 'id',
  kode_satker: 'kode_satker',
  id_propinsi: 'id_propinsi',
  propinsi: 'propinsi',
  id_kabupaten: 'id_kabupaten',
  kabupaten: 'kabupaten',
  nama: 'nama',
  alamat: 'alamat',
  jenis: 'jenis',
  kode_pos: 'kode_pos',
  kanwil: 'kanwil',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Map_ditjenpasScalarFieldEnum = {
  kode_satker_sdp: 'kode_satker_sdp',
  kode_satker: 'kode_satker'
};

exports.Prisma.MediasiwebScalarFieldEnum = {
  IDMediasi: 'IDMediasi',
  IDTahapan: 'IDTahapan',
  IDPerkara: 'IDPerkara',
  jenisMediasi: 'jenisMediasi',
  tglPenetapan: 'tglPenetapan',
  SKPenetapan: 'SKPenetapan',
  IDMediator: 'IDMediator',
  statusMediator: 'statusMediator',
  nama: 'nama',
  tglMulaiMediasi: 'tglMulaiMediasi',
  tglPutusan: 'tglPutusan',
  hasil: 'hasil',
  jenisHasilMediasi: 'jenisHasilMediasi',
  tglKesepakatan: 'tglKesepakatan',
  tglPengajuanSepakat: 'tglPengajuanSepakat',
  tglAkta: 'tglAkta',
  isiAkta: 'isiAkta',
  tglPermohonanMediasi: 'tglPermohonanMediasi',
  tglBeritahu: 'tglBeritahu',
  tglLaporan: 'tglLaporan',
  tglKirimKesepakatan: 'tglKirimKesepakatan'
};

exports.Prisma.MediatorScalarFieldEnum = {
  id: 'id',
  status_mediator: 'status_mediator',
  hakim_id: 'hakim_id',
  kode: 'kode',
  nip: 'nip',
  nama: 'nama',
  nama_gelar: 'nama_gelar',
  tempat_lahir: 'tempat_lahir',
  tgl_lahir: 'tgl_lahir',
  pendidikan_id: 'pendidikan_id',
  pendidikan: 'pendidikan',
  alamat: 'alamat',
  profesi: 'profesi',
  bersertifikat: 'bersertifikat',
  no_sertifikasi: 'no_sertifikasi',
  tgl_sertifikasi: 'tgl_sertifikasi',
  lembaga_sertifikasi: 'lembaga_sertifikasi',
  keahlian: 'keahlian',
  nomor_sk_ketua: 'nomor_sk_ketua',
  tgl_sk_ketua: 'tgl_sk_ketua',
  keterangan: 'keterangan',
  aktif: 'aktif',
  foto: 'foto',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.MediatorwebScalarFieldEnum = {
  IDMediator: 'IDMediator',
  statusMediator: 'statusMediator',
  IDHakim: 'IDHakim',
  nip: 'nip',
  nama: 'nama',
  namaGelar: 'namaGelar',
  profesi: 'profesi',
  bersertifikat: 'bersertifikat',
  nomorSertifikasi: 'nomorSertifikasi',
  tglSertifikasi: 'tglSertifikasi',
  lembagaSertifikasi: 'lembagaSertifikasi',
  keterangan: 'keterangan'
};

exports.Prisma.MenuScalarFieldEnum = {
  id: 'id',
  parent: 'parent',
  urutan: 'urutan',
  title: 'title',
  link: 'link',
  params: 'params',
  publish: 'publish',
  jenis_pengadilan: 'jenis_pengadilan'
};

exports.Prisma.NegaraScalarFieldEnum = {
  id: 'id',
  kode: 'kode',
  nama: 'nama',
  aktif: 'aktif',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Nomor_antrianScalarFieldEnum = {
  id: 'id',
  nomor_urutan: 'nomor_urutan',
  status: 'status',
  nomor_ruang: 'nomor_ruang',
  nama_ruang: 'nama_ruang',
  nomor_perkara: 'nomor_perkara',
  pihak_satu: 'pihak_satu',
  pihak_dua: 'pihak_dua',
  tanggal_sidang: 'tanggal_sidang',
  jadwal_sidang_id: 'jadwal_sidang_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.On_callScalarFieldEnum = {
  id: 'id',
  nomor_ruang: 'nomor_ruang',
  nomor_antrian_id: 'nomor_antrian_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.PanggilandismissalwebScalarFieldEnum = {
  ID: 'ID',
  IDPerkara: 'IDPerkara',
  tglPanggilan: 'tglPanggilan',
  statusText: 'statusText'
};

exports.Prisma.Panitera_maScalarFieldEnum = {
  id: 'id',
  kode: 'kode',
  nip: 'nip',
  nama: 'nama',
  nama_gelar: 'nama_gelar',
  keterangan: 'keterangan',
  aktif: 'aktif',
  foto: 'foto',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Panitera_pnScalarFieldEnum = {
  id: 'id',
  kode: 'kode',
  nip: 'nip',
  pangkat: 'pangkat',
  jabatan: 'jabatan',
  nama: 'nama',
  nama_gelar: 'nama_gelar',
  keterangan: 'keterangan',
  aktif: 'aktif',
  foto: 'foto',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Panitera_ptScalarFieldEnum = {
  id: 'id',
  kode: 'kode',
  nip: 'nip',
  pangkat: 'pangkat',
  jabatan: 'jabatan',
  nama: 'nama',
  nama_gelar: 'nama_gelar',
  keterangan: 'keterangan',
  aktif: 'aktif',
  foto: 'foto',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Penahanan_terdakwaScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  pihak_id: 'pihak_id',
  jenis_penahanan_id: 'jenis_penahanan_id',
  status_penahanan_id: 'status_penahanan_id',
  jenis_tahanan_id: 'jenis_tahanan_id',
  rutan_id: 'rutan_id',
  tanggal_surat: 'tanggal_surat',
  nomor_surat: 'nomor_surat',
  mulai: 'mulai',
  sampai: 'sampai',
  waktu_penahanan: 'waktu_penahanan',
  lama_penahanan: 'lama_penahanan',
  keterangan: 'keterangan',
  pejabat_penahan: 'pejabat_penahan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.PenahananwebScalarFieldEnum = {
  ID: 'ID',
  IDPerkara: 'IDPerkara',
  terdakwa: 'terdakwa',
  jenisTahanan: 'jenisTahanan',
  ditahanOleh: 'ditahanOleh',
  statusPenahanan: 'statusPenahanan',
  tglSurat: 'tglSurat',
  noSurat: 'noSurat',
  mulai: 'mulai',
  sampai: 'sampai',
  keterangan: 'keterangan'
};

exports.Prisma.PenetapandismissalwebScalarFieldEnum = {
  IDPerkara: 'IDPerkara',
  tglPenetapan: 'tglPenetapan',
  amar: 'amar',
  hasil: 'hasil',
  pemberitahuanPenggugat: 'pemberitahuanPenggugat',
  pemberitahuanTergugat: 'pemberitahuanTergugat'
};

exports.Prisma.PenetapanpersiapanproseswebScalarFieldEnum = {
  ID: 'ID',
  IDPerkara: 'IDPerkara',
  urutan: 'urutan',
  tglMusyawarah: 'tglMusyawarah',
  agenda: 'agenda',
  waktu: 'waktu',
  keterangan: 'keterangan'
};

exports.Prisma.PenetapanpersiapanwebScalarFieldEnum = {
  IDPerkara: 'IDPerkara',
  tglPenetapan: 'tglPenetapan',
  petitum: 'petitum'
};

exports.Prisma.PenetapanpublisitaswebScalarFieldEnum = {
  ID: 'ID',
  IDPerkaraPascaPailit: 'IDPerkaraPascaPailit',
  IDPerkara: 'IDPerkara',
  IDUrutan: 'IDUrutan',
  tglPenetapan: 'tglPenetapan',
  noPenetapan: 'noPenetapan',
  suratKabar1: 'suratKabar1',
  suratKabar2: 'suratKabar2',
  tglRapat: 'tglRapat',
  waktuRapat: 'waktuRapat',
  tempatRapat: 'tempatRapat',
  batasAkhirPenagihanKreditur: 'batasAkhirPenagihanKreditur',
  tglRapatPencocokan: 'tglRapatPencocokan',
  waktuPencocokan: 'waktuPencocokan',
  tempatRapatPencocokan: 'tempatRapatPencocokan'
};

exports.Prisma.PengacarawebScalarFieldEnum = {
  IDPerkara: 'IDPerkara',
  IDPengacara: 'IDPengacara',
  pengacaraNama: 'pengacaraNama',
  urutan: 'urutan',
  aktif: 'aktif',
  pihakKe: 'pihakKe',
  IDPihak: 'IDPihak',
  pihakNama: 'pihakNama'
};

exports.Prisma.Pengadilan_negeriScalarFieldEnum = {
  id: 'id',
  pt_id: 'pt_id',
  kode: 'kode',
  kode_pn: 'kode_pn',
  nama: 'nama',
  alamat: 'alamat',
  aktif: 'aktif',
  jenis_pengadilan: 'jenis_pengadilan'
};

exports.Prisma.Pengadilan_tinggiScalarFieldEnum = {
  id: 'id',
  kode: 'kode',
  nama: 'nama',
  alamat: 'alamat',
  aktif: 'aktif',
  jenis_pengadilan: 'jenis_pengadilan'
};

exports.Prisma.Penilaian_ikmScalarFieldEnum = {
  id: 'id',
  responden_id: 'responden_id',
  kuesioner_id: 'kuesioner_id',
  nilai: 'nilai',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Penilaian_ipkScalarFieldEnum = {
  id: 'id',
  responden_id: 'responden_id',
  kuesioner_id: 'kuesioner_id',
  nilai: 'nilai',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.PenjualanhartapailitwebScalarFieldEnum = {
  ID: 'ID',
  IDPerkara: 'IDPerkara',
  jenisHartaPailit: 'jenisHartaPailit',
  nomor: 'nomor',
  tanggal: 'tanggal',
  namaPelaksanaAppraisal: 'namaPelaksanaAppraisal'
};

exports.Prisma.PerbaikangugatanwebScalarFieldEnum = {
  ID: 'ID',
  IDPerkara: 'IDPerkara',
  statusPerbaikan: 'statusPerbaikan',
  isPerbaikan: 'isPerbaikan',
  isiSaranPerbaikan: 'isiSaranPerbaikan',
  tglSaranPerbaikan: 'tglSaranPerbaikan',
  tglDinyatakanLengkap: 'tglDinyatakanLengkap',
  petitum: 'petitum'
};

exports.Prisma.PerkaraScalarFieldEnum = {
  perkara_id: 'perkara_id',
  jenis_acara: 'jenis_acara',
  alur_perkara_id: 'alur_perkara_id',
  tanggal_pendaftaran: 'tanggal_pendaftaran',
  jenis_perkara_id: 'jenis_perkara_id',
  jenis_perkara_kode: 'jenis_perkara_kode',
  jenis_perkara_nama: 'jenis_perkara_nama',
  jenis_perkara_text: 'jenis_perkara_text',
  nomor_urut_register: 'nomor_urut_register',
  nomor_urut_perkara: 'nomor_urut_perkara',
  nomor_perkara: 'nomor_perkara',
  nomor_indeks: 'nomor_indeks',
  tanggal_surat: 'tanggal_surat',
  nomor_surat: 'nomor_surat',
  surat_dok: 'surat_dok',
  pihak1_text: 'pihak1_text',
  pengacara_pihak1: 'pengacara_pihak1',
  pihak2_text: 'pihak2_text',
  pengacara_pihak2: 'pengacara_pihak2',
  pihak3_text: 'pihak3_text',
  pengacara_pihak3: 'pengacara_pihak3',
  pihak4_text: 'pihak4_text',
  pengacara_pihak4: 'pengacara_pihak4',
  para_pihak: 'para_pihak',
  pihak_dipublikasikan: 'pihak_dipublikasikan',
  posita: 'posita',
  petitum: 'petitum',
  petitum_dok: 'petitum_dok',
  nomor_dakwaan: 'nomor_dakwaan',
  tanggal_dakwaan: 'tanggal_dakwaan',
  dakwaan: 'dakwaan',
  pasal_dakwaan: 'pasal_dakwaan',
  dakwaan_dok: 'dakwaan_dok',
  tanggal_rencana_perdamaian: 'tanggal_rencana_perdamaian',
  tanggal_pengesahan_perdamaian: 'tanggal_pengesahan_perdamaian',
  tanggal_penyelesaian_mediasi: 'tanggal_penyelesaian_mediasi',
  tanggal_penyelesaian_konsiliasi: 'tanggal_penyelesaian_konsiliasi',
  perkara_rujukan_id: 'perkara_rujukan_id',
  nomor_perkara_rujukan: 'nomor_perkara_rujukan',
  tanggal_pendaftaran_rujukan: 'tanggal_pendaftaran_rujukan',
  catatan_pendaftaran: 'catatan_pendaftaran',
  prodeo: 'prodeo',
  terdakwa_anak: 'terdakwa_anak',
  tahapan_terakhir_id: 'tahapan_terakhir_id',
  tahapan_terakhir_text: 'tahapan_terakhir_text',
  proses_terakhir_id: 'proses_terakhir_id',
  proses_terakhir_text: 'proses_terakhir_text',
  nilai_sengketa: 'nilai_sengketa',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_actio_paulianaScalarFieldEnum = {
  perkara_id: 'perkara_id',
  tanggal_pendaftaran_actio: 'tanggal_pendaftaran_actio',
  pemohon_id: 'pemohon_id',
  catatan_pendaftaran: 'catatan_pendaftaran',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_akta_ceraiScalarFieldEnum = {
  perkara_id: 'perkara_id',
  tahun_akta_cerai: 'tahun_akta_cerai',
  nomor_urut_akta_cerai: 'nomor_urut_akta_cerai',
  nomor_akta_cerai: 'nomor_akta_cerai',
  tgl_akta_cerai: 'tgl_akta_cerai',
  no_seri_akta_cerai: 'no_seri_akta_cerai',
  jenis_cerai: 'jenis_cerai',
  faktor_perceraian_id: 'faktor_perceraian_id',
  qobla_bada: 'qobla_bada',
  perceraian_ke: 'perceraian_ke',
  keadaan_istri: 'keadaan_istri',
  tgl_penyerahan_akta_cerai: 'tgl_penyerahan_akta_cerai',
  tgl_penyerahan_akta_cerai_pihak2: 'tgl_penyerahan_akta_cerai_pihak2',
  akta_cerai_dok: 'akta_cerai_dok',
  blangko_akta_cerai: 'blangko_akta_cerai',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_alasan_nikahScalarFieldEnum = {
  perkara_id: 'perkara_id',
  jenis_perkara_id: 'jenis_perkara_id',
  jenis_alasan_id: 'jenis_alasan_id',
  alasan_id: 'alasan_id',
  nama: 'nama',
  nominal_penghasilan: 'nominal_penghasilan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_anak_pihakScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  nama_anak: 'nama_anak',
  nik: 'nik',
  tempat_lahir: 'tempat_lahir',
  tanggal_lahir: 'tanggal_lahir',
  jenis_kelamin: 'jenis_kelamin',
  pendidikan_id: 'pendidikan_id',
  anak_ke: 'anak_ke',
  diasuh_oleh: 'diasuh_oleh',
  jumlah_nafkah: 'jumlah_nafkah',
  status_eksekusi: 'status_eksekusi',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_bandingScalarFieldEnum = {
  perkara_id: 'perkara_id',
  jenis_banding: 'jenis_banding',
  alur_perkara_id: 'alur_perkara_id',
  nomor_perkara_pn: 'nomor_perkara_pn',
  putusan_pn: 'putusan_pn',
  pihak_pembanding: 'pihak_pembanding',
  permohonan_banding: 'permohonan_banding',
  pemohon_banding: 'pemohon_banding',
  para_pihak: 'para_pihak',
  pemberitahuan_putusan_pn: 'pemberitahuan_putusan_pn',
  pemberitahuan_permohonan_banding: 'pemberitahuan_permohonan_banding',
  penerimaan_memori_banding: 'penerimaan_memori_banding',
  penyerahan_memori_banding: 'penyerahan_memori_banding',
  penerimaan_kontra_banding: 'penerimaan_kontra_banding',
  penyerahan_kontra_banding: 'penyerahan_kontra_banding',
  pemberitahuan_inzage: 'pemberitahuan_inzage',
  pemberitahuan_inzage_pembanding: 'pemberitahuan_inzage_pembanding',
  pemberitahuan_inzage_terbanding: 'pemberitahuan_inzage_terbanding',
  pelaksanaan_inzage: 'pelaksanaan_inzage',
  pelaksanaan_inzage_pembanding: 'pelaksanaan_inzage_pembanding',
  pelaksanaan_inzage_terbanding: 'pelaksanaan_inzage_terbanding',
  pengiriman_berkas_banding: 'pengiriman_berkas_banding',
  nomor_surat_pengiriman_berkas_banding: 'nomor_surat_pengiriman_berkas_banding',
  penerimaan_kembali_berkas_banding: 'penerimaan_kembali_berkas_banding',
  nomor_urut_register: 'nomor_urut_register',
  tanggal_pendaftaran_banding: 'tanggal_pendaftaran_banding',
  nomor_perkara_banding: 'nomor_perkara_banding',
  panitera_pembuat_akta_banding: 'panitera_pembuat_akta_banding',
  hakim1_banding_id: 'hakim1_banding_id',
  hakim1_banding: 'hakim1_banding',
  hakim2_banding_id: 'hakim2_banding_id',
  hakim2_banding: 'hakim2_banding',
  hakim3_banding_id: 'hakim3_banding_id',
  hakim3_banding: 'hakim3_banding',
  hakim4_banding_id: 'hakim4_banding_id',
  hakim4_banding: 'hakim4_banding',
  hakim5_banding_id: 'hakim5_banding_id',
  hakim5_banding: 'hakim5_banding',
  majelis_hakim_banding: 'majelis_hakim_banding',
  panitera_pengganti_banding_id: 'panitera_pengganti_banding_id',
  panitera_pengganti_banding: 'panitera_pengganti_banding',
  tanggal_penetapan_sidang_pertama: 'tanggal_penetapan_sidang_pertama',
  tanggal_sidang_pertama: 'tanggal_sidang_pertama',
  putusan_banding: 'putusan_banding',
  sumber_hukum_id: 'sumber_hukum_id',
  status_putusan_banding_id: 'status_putusan_banding_id',
  status_putusan_banding_text: 'status_putusan_banding_text',
  nomor_putusan_banding: 'nomor_putusan_banding',
  amar_putusan_banding: 'amar_putusan_banding',
  amar_putusan_banding_dok: 'amar_putusan_banding_dok',
  tgl_kirim_salinan_putusan: 'tgl_kirim_salinan_putusan',
  minutasi_banding: 'minutasi_banding',
  tgl_minutasi: 'tgl_minutasi',
  tgl_pengiriman_berkas_putusan: 'tgl_pengiriman_berkas_putusan',
  pemberitahuan_putusan_banding: 'pemberitahuan_putusan_banding',
  pemberitahuan_putusan_banding_pembanding: 'pemberitahuan_putusan_banding_pembanding',
  pemberitahuan_putusan_banding_terbanding: 'pemberitahuan_putusan_banding_terbanding',
  tgl_pemberitahuan_putusan: 'tgl_pemberitahuan_putusan',
  catatan_banding: 'catatan_banding',
  prodeo_banding: 'prodeo_banding',
  status_banding_id: 'status_banding_id',
  status_banding_text: 'status_banding_text',
  tanggal_cabut: 'tanggal_cabut',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_banding_detilScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  alur_perkara_id: 'alur_perkara_id',
  status_pihak_id: 'status_pihak_id',
  status_pihak_text: 'status_pihak_text',
  urutan_banding: 'urutan_banding',
  permohonan_banding: 'permohonan_banding',
  pihak_asal: 'pihak_asal',
  pihak_asal_text: 'pihak_asal_text',
  pihak_id: 'pihak_id',
  pihak_nama: 'pihak_nama',
  pihak_diwakili: 'pihak_diwakili',
  pemohon_id: 'pemohon_id',
  pemohon_nama: 'pemohon_nama',
  pemohon_pekerjaan: 'pemohon_pekerjaan',
  pemohon_alamat: 'pemohon_alamat',
  pemohon_tanggal_surat: 'pemohon_tanggal_surat',
  pemohon_nomor_surat: 'pemohon_nomor_surat',
  pemohon_banding: 'pemohon_banding',
  pemberitahuan_putusan_pn: 'pemberitahuan_putusan_pn',
  pemberitahuan_permohonan_banding: 'pemberitahuan_permohonan_banding',
  penerimaan_memori_banding: 'penerimaan_memori_banding',
  penyerahan_memori_banding: 'penyerahan_memori_banding',
  penerimaan_kontra_banding: 'penerimaan_kontra_banding',
  penyerahan_kontra_banding: 'penyerahan_kontra_banding',
  pemberitahuan_inzage: 'pemberitahuan_inzage',
  pelaksanaan_inzage: 'pelaksanaan_inzage',
  pemberitahuan_putusan_banding: 'pemberitahuan_putusan_banding',
  tanggal_kirim_salinan_putusan: 'tanggal_kirim_salinan_putusan',
  tanggal_cabut: 'tanggal_cabut',
  keterangan: 'keterangan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_bantahan_tagihanScalarFieldEnum = {
  id: 'id',
  perkara_pasca_pailit_id: 'perkara_pasca_pailit_id',
  perkara_id: 'perkara_id',
  tanggal_pengajuan: 'tanggal_pengajuan',
  pemohon: 'pemohon',
  kedudukan_pemohon: 'kedudukan_pemohon',
  hasil: 'hasil',
  dokumen: 'dokumen',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_barang_buktiScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  nomor_perkara: 'nomor_perkara',
  tanggal_penerimaan: 'tanggal_penerimaan',
  jenis_barang_bukti: 'jenis_barang_bukti',
  tempat_penyimpanan: 'tempat_penyimpanan',
  tempat_penyerahan: 'tempat_penyerahan',
  nama_penerima: 'nama_penerima',
  tanggal_penyerahan: 'tanggal_penyerahan',
  catatan_barang_bukti: 'catatan_barang_bukti',
  tindakan_utk_pen_kesepakatan_diversi: 'tindakan_utk_pen_kesepakatan_diversi',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_barang_bukti_perdataScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  jadwal_sidang_id: 'jadwal_sidang_id',
  pihak_id: 'pihak_id',
  jenis_barang_bukti: 'jenis_barang_bukti',
  nomor_barang_bukti: 'nomor_barang_bukti',
  tanggal_barang_bukti: 'tanggal_barang_bukti',
  dikeluarkan_oleh: 'dikeluarkan_oleh',
  catatan_barang_bukti: 'catatan_barang_bukti',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_biayaScalarFieldEnum = {
  id: 'id',
  id_pembiayaan: 'id_pembiayaan',
  perkara_id: 'perkara_id',
  general_id: 'general_id',
  tahapan_id: 'tahapan_id',
  kategori_id: 'kategori_id',
  jenis_biaya_id: 'jenis_biaya_id',
  pihak_id: 'pihak_id',
  pihak_ke: 'pihak_ke',
  urutan: 'urutan',
  jenis_transaksi: 'jenis_transaksi',
  tanggal_transaksi: 'tanggal_transaksi',
  uraian: 'uraian',
  jumlah: 'jumlah',
  sisa: 'sisa',
  keterangan: 'keterangan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_biaya_htScalarFieldEnum = {
  id: 'id',
  id_pembiayaan: 'id_pembiayaan',
  ht_id: 'ht_id',
  tahapan_id: 'tahapan_id',
  kategori_id: 'kategori_id',
  jenis_biaya_id: 'jenis_biaya_id',
  urutan: 'urutan',
  jenis_transaksi: 'jenis_transaksi',
  tanggal_transaksi: 'tanggal_transaksi',
  uraian: 'uraian',
  jumlah: 'jumlah',
  sisa: 'sisa',
  keterangan: 'keterangan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_biaya_jurusitaScalarFieldEnum = {
  perkara_biaya_id: 'perkara_biaya_id',
  jurusita_id: 'jurusita_id'
};

exports.Prisma.Perkara_biaya_penyelesaian_pailitScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  perkara_pasca_id: 'perkara_pasca_id',
  jenis_transaksi: 'jenis_transaksi',
  tanggal_transaksi: 'tanggal_transaksi',
  uraian: 'uraian',
  jumlah: 'jumlah',
  sisa: 'sisa',
  keterangan: 'keterangan',
  diinput_tanggal: 'diinput_tanggal',
  diinput_oleh: 'diinput_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diedit_oleh: 'diedit_oleh'
};

exports.Prisma.Perkara_biaya_tkScalarFieldEnum = {
  id: 'id',
  id_pembiayaan: 'id_pembiayaan',
  tk_id: 'tk_id',
  tahapan_id: 'tahapan_id',
  kategori_id: 'kategori_id',
  jenis_biaya_id: 'jenis_biaya_id',
  urutan: 'urutan',
  jenis_transaksi: 'jenis_transaksi',
  tanggal_transaksi: 'tanggal_transaksi',
  uraian: 'uraian',
  jumlah: 'jumlah',
  sisa: 'sisa',
  keterangan: 'keterangan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_court_calendarScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  rencana_tanggal: 'rencana_tanggal',
  rencana_jam: 'rencana_jam',
  rencana_agenda: 'rencana_agenda',
  keterangan: 'keterangan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_data_dukung_mediasiScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  mediasi_id: 'mediasi_id',
  identifier: 'identifier',
  kode_template: 'kode_template',
  uraian: 'uraian',
  nilai: 'nilai'
};

exports.Prisma.Perkara_data_pernikahanScalarFieldEnum = {
  perkara_id: 'perkara_id',
  tgl_nikah: 'tgl_nikah',
  tgl_kutipan_akta_nikah: 'tgl_kutipan_akta_nikah',
  no_kutipan_akta_nikah: 'no_kutipan_akta_nikah',
  kua_tempat_nikah: 'kua_tempat_nikah',
  kode_kua: 'kode_kua',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_data_template_penahananScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  penahanan_id: 'penahanan_id',
  pihak_id: 'pihak_id',
  pihak_penjamin_id: 'pihak_penjamin_id',
  nomor_permohonan: 'nomor_permohonan',
  tanggal_permohonan: 'tanggal_permohonan',
  jenis_jaminan: 'jenis_jaminan',
  alasan: 'alasan',
  tanggal_mulai: 'tanggal_mulai',
  tanggal_sampai: 'tanggal_sampai',
  mulai_jam: 'mulai_jam',
  sampai_jam: 'sampai_jam',
  tanggal_keluar: 'tanggal_keluar',
  rumah_sakit: 'rumah_sakit',
  nama_dokter: 'nama_dokter',
  nomor_perjanjian: 'nomor_perjanjian',
  tanggal_perjanjian: 'tanggal_perjanjian',
  uang_jaminan: 'uang_jaminan',
  nomor_bukti_setoran: 'nomor_bukti_setoran',
  tanggal_bukti_setoran: 'tanggal_bukti_setoran',
  pertimbangan: 'pertimbangan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_data_template_sidangScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  sidang_id: 'sidang_id',
  kolom_id: 'kolom_id',
  uraian: 'uraian',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_dismissalScalarFieldEnum = {
  perkara_id: 'perkara_id',
  tanggal_penetapan: 'tanggal_penetapan',
  amar: 'amar',
  hasil: 'hasil',
  pemberitahuan_penggugat: 'pemberitahuan_penggugat',
  pemberitahuan_tergugat: 'pemberitahuan_tergugat',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_diversiScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  diversi_register_id: 'diversi_register_id',
  pihak_diversi: 'pihak_diversi',
  no_reg_penyidik: 'no_reg_penyidik',
  no_reg_penuntut_umum: 'no_reg_penuntut_umum',
  tgl_penetapan_musyawarah: 'tgl_penetapan_musyawarah',
  tgl_musyawarah: 'tgl_musyawarah',
  kesepakatan_melaksanakan_diversi: 'kesepakatan_melaksanakan_diversi',
  tgl_kesepakatan_diversi: 'tgl_kesepakatan_diversi',
  isi_singkat_diversi: 'isi_singkat_diversi',
  tgl_laporan_hakim: 'tgl_laporan_hakim',
  tgl_penetapan_kesepakatan_diversi: 'tgl_penetapan_kesepakatan_diversi',
  no_penetapan_kesepakatan: 'no_penetapan_kesepakatan',
  tgl_lap_pembimbing_masyarakat: 'tgl_lap_pembimbing_masyarakat',
  hasil_lap_pembimbing_masyarakat: 'hasil_lap_pembimbing_masyarakat',
  nomor_laporan_pembimbing_masyarakat: 'nomor_laporan_pembimbing_masyarakat',
  hasil_diversi: 'hasil_diversi',
  jenis_kesepakatan_diversi: 'jenis_kesepakatan_diversi',
  dibuka_kembali: 'dibuka_kembali',
  no_dibuka_kembali: 'no_dibuka_kembali',
  tgl_dibuka_kembali: 'tgl_dibuka_kembali',
  tgl_pelaksanaan_isi_diversi: 'tgl_pelaksanaan_isi_diversi',
  tgl_minutasi: 'tgl_minutasi',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_dokumenScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  tahapan_id: 'tahapan_id',
  proses_id: 'proses_id',
  nama_dokumen: 'nama_dokumen',
  nama_file: 'nama_file',
  lokasi_file: 'lokasi_file',
  ukuran_file: 'ukuran_file',
  extensi_file: 'extensi_file',
  keterangan: 'keterangan',
  dipublikasikan: 'dipublikasikan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_dokumen_rapatScalarFieldEnum = {
  id: 'id',
  perkara_rapat_pasca_kepailitan_id: 'perkara_rapat_pasca_kepailitan_id',
  proses_id: 'proses_id',
  jenis_dokumen_id: 'jenis_dokumen_id',
  nama_dokumen: 'nama_dokumen',
  dokumen: 'dokumen',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_dokumen_rapat_pkpuScalarFieldEnum = {
  id: 'id',
  perkara_rapat_pkpu_id: 'perkara_rapat_pkpu_id',
  jenis_dokumen_id: 'jenis_dokumen_id',
  nama_dokumen: 'nama_dokumen',
  dokumen: 'dokumen',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_edoc_calendarScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  edoc_calender: 'edoc_calender',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_edoc_kppuScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  edoc_permohonan_keberatan: 'edoc_permohonan_keberatan',
  pihak_id: 'pihak_id',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_efilingScalarFieldEnum = {
  efiling_id: 'efiling_id',
  satker_id: 'satker_id',
  juncto_efiling_id: 'juncto_efiling_id',
  kode_satker: 'kode_satker',
  nama_satker: 'nama_satker',
  user_id: 'user_id',
  nomor_register: 'nomor_register',
  tanggal_pendaftaran: 'tanggal_pendaftaran',
  alur_perkara_id: 'alur_perkara_id',
  jenis_perkara_id: 'jenis_perkara_id',
  jenis_perkara_nama: 'jenis_perkara_nama',
  status_pendaftaran_id: 'status_pendaftaran_id',
  status_pendaftaran_text: 'status_pendaftaran_text',
  nomor_va: 'nomor_va',
  digit_ran: 'digit_ran',
  jumlah_skum: 'jumlah_skum',
  tanggal_bayar: 'tanggal_bayar',
  batas_pembayaran: 'batas_pembayaran',
  status_pembayaran: 'status_pembayaran',
  nomor_perkara: 'nomor_perkara',
  tgl_pendaftaran_perkara: 'tgl_pendaftaran_perkara',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal',
  status_litigasi: 'status_litigasi',
  informasi_tambahan: 'informasi_tambahan'
};

exports.Prisma.Perkara_efiling_idScalarFieldEnum = {
  perkara_id: 'perkara_id',
  efiling_id: 'efiling_id'
};

exports.Prisma.Perkara_efiling_perlawananScalarFieldEnum = {
  id: 'id',
  efiling_id: 'efiling_id',
  jenis_perlawanan: 'jenis_perlawanan',
  nomor_perkara: 'nomor_perkara',
  pendaftar_pihak_id: 'pendaftar_pihak_id',
  kuasa_pihak_id: 'kuasa_pihak_id',
  tanggal_permohonan: 'tanggal_permohonan',
  status_pendaftaran_id: 'status_pendaftaran_id',
  status_pendaftaran_text: 'status_pendaftaran_text',
  epayment_id: 'epayment_id',
  nomor_va: 'nomor_va',
  tanggal_bayar: 'tanggal_bayar',
  jumlah_bayar: 'jumlah_bayar',
  keterangan: 'keterangan'
};

exports.Prisma.Perkara_eksekusiScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  alur_perkara_id: 'alur_perkara_id',
  nomor_perkara_pn: 'nomor_perkara_pn',
  putusan_pn: 'putusan_pn',
  nomor_perkara_banding: 'nomor_perkara_banding',
  putusan_banding: 'putusan_banding',
  nomor_perkara_kasasi: 'nomor_perkara_kasasi',
  putusan_kasasi: 'putusan_kasasi',
  nomor_perkara_pk: 'nomor_perkara_pk',
  putusan_pk: 'putusan_pk',
  eksekusi_putusan: 'eksekusi_putusan',
  eksekusi_nomor_perkara: 'eksekusi_nomor_perkara',
  nomor_urut_perkara_eksekusi: 'nomor_urut_perkara_eksekusi',
  nomor_register_eksekusi: 'nomor_register_eksekusi',
  eksekusi_amar_putusan: 'eksekusi_amar_putusan',
  pihak_pemohon_eksekusi: 'pihak_pemohon_eksekusi',
  permohonan_eksekusi: 'permohonan_eksekusi',
  pemohon_eksekusi: 'pemohon_eksekusi',
  para_pihak: 'para_pihak',
  penetapan_teguran_eksekusi: 'penetapan_teguran_eksekusi',
  nomor_penetapan_teguran_eksekusi: 'nomor_penetapan_teguran_eksekusi',
  pelaksanaan_teguran_eksekusi: 'pelaksanaan_teguran_eksekusi',
  pelaksanaan_teguran_eksekusi_kedua: 'pelaksanaan_teguran_eksekusi_kedua',
  penetapan_sita_eksekusi: 'penetapan_sita_eksekusi',
  nomor_penetapan_sita_eksekusi: 'nomor_penetapan_sita_eksekusi',
  pelaksanaan_sita_eksekusi: 'pelaksanaan_sita_eksekusi',
  jurusita_id: 'jurusita_id',
  jurusita_nama: 'jurusita_nama',
  penetapan_perintah_eksekusi_lelang: 'penetapan_perintah_eksekusi_lelang',
  pelaksanaan_eksekusi_lelang: 'pelaksanaan_eksekusi_lelang',
  penyerahan_hasil_lelang: 'penyerahan_hasil_lelang',
  penetapan_perintah_eksekusi_rill: 'penetapan_perintah_eksekusi_rill',
  pelaksanaan_eksekusi_rill: 'pelaksanaan_eksekusi_rill',
  penetapan_noneksekusi: 'penetapan_noneksekusi',
  alasan_eksekusi: 'alasan_eksekusi',
  catatan_eksekusi: 'catatan_eksekusi',
  prodeo_eksekusi: 'prodeo_eksekusi',
  status_eksekusi_id: 'status_eksekusi_id',
  status_eksekusi_text: 'status_eksekusi_text',
  diterima_permohonan: 'diterima_permohonan',
  panggilan_parapihak: 'panggilan_parapihak',
  penetapan_ketua: 'penetapan_ketua',
  sk_objek_tidak_punya_kekuatan_hukum: 'sk_objek_tidak_punya_kekuatan_hukum',
  surat_tergugat_objek_non_executable: 'surat_tergugat_objek_non_executable',
  panggilan_pihak_non_executable: 'panggilan_pihak_non_executable',
  upaya_kesepakatan_kompensasi: 'upaya_kesepakatan_kompensasi',
  penetapan_ketua_kompensasi: 'penetapan_ketua_kompensasi',
  upaya_hukum_kma: 'upaya_hukum_kma',
  penetapan_kma_kompensasi: 'penetapan_kma_kompensasi',
  uangpaksa_putusan_hakim: 'uangpaksa_putusan_hakim',
  uangpaksa_penetapan_ketua: 'uangpaksa_penetapan_ketua',
  surat_ketua_tergugat_uangpaksa: 'surat_ketua_tergugat_uangpaksa',
  surat_peringatan_uangpaksa: 'surat_peringatan_uangpaksa',
  perintah_ketua_saksi_administratif: 'perintah_ketua_saksi_administratif',
  sanksi_administratif_dari_pejabat: 'sanksi_administratif_dari_pejabat',
  pengumuman_ketua_panitera_js: 'pengumuman_ketua_panitera_js',
  pengumuman_media: 'pengumuman_media',
  surat_presiden: 'surat_presiden',
  surat_lembaga_perwakilan_rakyat: 'surat_lembaga_perwakilan_rakyat',
  tanggal_cabut_eks: 'tanggal_cabut_eks',
  alasan_eksekusi_tidak_dilaksanakan_id: 'alasan_eksekusi_tidak_dilaksanakan_id',
  alasan_eksekusi_tidak_dilaksanakan: 'alasan_eksekusi_tidak_dilaksanakan',
  pelaksanaan_eksekusi_id: 'pelaksanaan_eksekusi_id',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_eksekusi_detilScalarFieldEnum = {
  id: 'id',
  eksekusi_id: 'eksekusi_id',
  perkara_id: 'perkara_id',
  alur_perkara_id: 'alur_perkara_id',
  status_pihak_id: 'status_pihak_id',
  status_pihak_text: 'status_pihak_text',
  permohonan_eksekusi: 'permohonan_eksekusi',
  pihak_asal: 'pihak_asal',
  pihak_asal_text: 'pihak_asal_text',
  pihak_id: 'pihak_id',
  pihak_nama: 'pihak_nama',
  pihak_diwakili: 'pihak_diwakili',
  pemohon_id: 'pemohon_id',
  pemohon_nama: 'pemohon_nama',
  pemohon_pekerjaan: 'pemohon_pekerjaan',
  pemohon_alamat: 'pemohon_alamat',
  pemohon_tanggal_surat: 'pemohon_tanggal_surat',
  pemohon_nomor_surat: 'pemohon_nomor_surat',
  pemohon_eksekusi: 'pemohon_eksekusi',
  pemberitahuan_putusan_pn: 'pemberitahuan_putusan_pn',
  pemberitahuan_putusan_banding: 'pemberitahuan_putusan_banding',
  pemberitahuan_putusan_kasasi: 'pemberitahuan_putusan_kasasi',
  pemberitahuan_putusan_pk: 'pemberitahuan_putusan_pk',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_eksekusi_detil_backupScalarFieldEnum = {
  id: 'id',
  eksekusi_id: 'eksekusi_id',
  perkara_id: 'perkara_id',
  alur_perkara_id: 'alur_perkara_id',
  status_pihak_id: 'status_pihak_id',
  status_pihak_text: 'status_pihak_text',
  permohonan_eksekusi: 'permohonan_eksekusi',
  pihak_asal: 'pihak_asal',
  pihak_asal_text: 'pihak_asal_text',
  pihak_id: 'pihak_id',
  pihak_nama: 'pihak_nama',
  pihak_diwakili: 'pihak_diwakili',
  pemohon_id: 'pemohon_id',
  pemohon_nama: 'pemohon_nama',
  pemohon_pekerjaan: 'pemohon_pekerjaan',
  pemohon_alamat: 'pemohon_alamat',
  pemohon_tanggal_surat: 'pemohon_tanggal_surat',
  pemohon_nomor_surat: 'pemohon_nomor_surat',
  pemohon_eksekusi: 'pemohon_eksekusi',
  pemberitahuan_putusan_pn: 'pemberitahuan_putusan_pn',
  pemberitahuan_putusan_banding: 'pemberitahuan_putusan_banding',
  pemberitahuan_putusan_kasasi: 'pemberitahuan_putusan_kasasi',
  pemberitahuan_putusan_pk: 'pemberitahuan_putusan_pk',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_eksekusi_detil_htScalarFieldEnum = {
  id: 'id',
  ht_id: 'ht_id',
  alur_perkara_id: 'alur_perkara_id',
  status_pihak_id: 'status_pihak_id',
  status_pihak_text: 'status_pihak_text',
  permohonan_eksekusi: 'permohonan_eksekusi',
  pihak_asal: 'pihak_asal',
  pihak_asal_text: 'pihak_asal_text',
  pihak_id: 'pihak_id',
  pihak_nama: 'pihak_nama',
  pihak_diwakili: 'pihak_diwakili',
  pemohon_id: 'pemohon_id',
  pemohon_nama: 'pemohon_nama',
  pemohon_pekerjaan: 'pemohon_pekerjaan',
  pemohon_alamat: 'pemohon_alamat',
  pemohon_tanggal_surat: 'pemohon_tanggal_surat',
  pemohon_nomor_surat: 'pemohon_nomor_surat',
  pemohon_eksekusi: 'pemohon_eksekusi',
  pemberitahuan_putusan_pn: 'pemberitahuan_putusan_pn',
  pemberitahuan_putusan_banding: 'pemberitahuan_putusan_banding',
  pemberitahuan_putusan_kasasi: 'pemberitahuan_putusan_kasasi',
  pemberitahuan_putusan_pk: 'pemberitahuan_putusan_pk',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_eksekusi_detil_tkScalarFieldEnum = {
  id: 'id',
  tk_id: 'tk_id',
  alur_perkara_id: 'alur_perkara_id',
  status_pihak_id: 'status_pihak_id',
  status_pihak_text: 'status_pihak_text',
  permohonan_eksekusi: 'permohonan_eksekusi',
  pihak_asal: 'pihak_asal',
  pihak_asal_text: 'pihak_asal_text',
  pihak_id: 'pihak_id',
  pihak_nama: 'pihak_nama',
  pihak_diwakili: 'pihak_diwakili',
  pemohon_id: 'pemohon_id',
  pemohon_nama: 'pemohon_nama',
  pemohon_pekerjaan: 'pemohon_pekerjaan',
  pemohon_alamat: 'pemohon_alamat',
  pemohon_tanggal_surat: 'pemohon_tanggal_surat',
  pemohon_nomor_surat: 'pemohon_nomor_surat',
  pemohon_eksekusi: 'pemohon_eksekusi',
  pemberitahuan_putusan_pn: 'pemberitahuan_putusan_pn',
  pemberitahuan_putusan_banding: 'pemberitahuan_putusan_banding',
  pemberitahuan_putusan_kasasi: 'pemberitahuan_putusan_kasasi',
  pemberitahuan_putusan_pk: 'pemberitahuan_putusan_pk',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_eksekusi_htScalarFieldEnum = {
  ht_id: 'ht_id',
  alur_perkara_id: 'alur_perkara_id',
  nomor_perkara_pn: 'nomor_perkara_pn',
  putusan_pn: 'putusan_pn',
  nomor_perkara_banding: 'nomor_perkara_banding',
  putusan_banding: 'putusan_banding',
  nomor_perkara_kasasi: 'nomor_perkara_kasasi',
  putusan_kasasi: 'putusan_kasasi',
  nomor_perkara_pk: 'nomor_perkara_pk',
  putusan_pk: 'putusan_pk',
  eksekusi_putusan: 'eksekusi_putusan',
  nomor_urut_perkara_eksekusi: 'nomor_urut_perkara_eksekusi',
  eksekusi_nomor_perkara: 'eksekusi_nomor_perkara',
  eksekusi_amar_putusan: 'eksekusi_amar_putusan',
  pihak_pemohon_eksekusi: 'pihak_pemohon_eksekusi',
  permohonan_eksekusi: 'permohonan_eksekusi',
  pemohon_eksekusi: 'pemohon_eksekusi',
  para_pihak: 'para_pihak',
  penetapan_teguran_eksekusi: 'penetapan_teguran_eksekusi',
  nomor_penetapan_teguran_eksekusi: 'nomor_penetapan_teguran_eksekusi',
  pelaksanaan_teguran_eksekusi: 'pelaksanaan_teguran_eksekusi',
  penetapan_sita_eksekusi: 'penetapan_sita_eksekusi',
  nomor_penetapan_sita_eksekusi: 'nomor_penetapan_sita_eksekusi',
  pelaksanaan_sita_eksekusi: 'pelaksanaan_sita_eksekusi',
  jurusita_id: 'jurusita_id',
  jurusita_nama: 'jurusita_nama',
  penetapan_perintah_eksekusi_lelang: 'penetapan_perintah_eksekusi_lelang',
  pelaksanaan_eksekusi_lelang: 'pelaksanaan_eksekusi_lelang',
  penyerahan_hasil_lelang: 'penyerahan_hasil_lelang',
  penetapan_perintah_eksekusi_rill: 'penetapan_perintah_eksekusi_rill',
  pelaksanaan_eksekusi_rill: 'pelaksanaan_eksekusi_rill',
  penetapan_noneksekusi: 'penetapan_noneksekusi',
  alasan_eksekusi: 'alasan_eksekusi',
  catatan_eksekusi: 'catatan_eksekusi',
  prodeo_eksekusi: 'prodeo_eksekusi',
  status_eksekusi_id: 'status_eksekusi_id',
  status_eksekusi_text: 'status_eksekusi_text',
  jenis_ht_id: 'jenis_ht_id',
  jenis_ht_text: 'jenis_ht_text',
  tgl_sertifikat: 'tgl_sertifikat',
  no_sertifikat: 'no_sertifikat',
  tanggal_cabut_ht: 'tanggal_cabut_ht',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_eksekusi_tkScalarFieldEnum = {
  tk_id: 'tk_id',
  jenis_eksekusi_id: 'jenis_eksekusi_id',
  jenis_eksekusi_text: 'jenis_eksekusi_text',
  nomor_urut_perkara_eksekusi: 'nomor_urut_perkara_eksekusi',
  eksekusi_nomor_perkara: 'eksekusi_nomor_perkara',
  eksekusi_amar_putusan: 'eksekusi_amar_putusan',
  pihak_pemohon_eksekusi: 'pihak_pemohon_eksekusi',
  permohonan_eksekusi: 'permohonan_eksekusi',
  pemohon_eksekusi: 'pemohon_eksekusi',
  para_pihak: 'para_pihak',
  penetapan_teguran_eksekusi: 'penetapan_teguran_eksekusi',
  nomor_penetapan_teguran_eksekusi: 'nomor_penetapan_teguran_eksekusi',
  pelaksanaan_teguran_eksekusi: 'pelaksanaan_teguran_eksekusi',
  penetapan_sita_eksekusi: 'penetapan_sita_eksekusi',
  nomor_penetapan_sita_eksekusi: 'nomor_penetapan_sita_eksekusi',
  pelaksanaan_sita_eksekusi: 'pelaksanaan_sita_eksekusi',
  jurusita_id: 'jurusita_id',
  jurusita_nama: 'jurusita_nama',
  penetapan_perintah_eksekusi_lelang: 'penetapan_perintah_eksekusi_lelang',
  pelaksanaan_eksekusi_lelang: 'pelaksanaan_eksekusi_lelang',
  penyerahan_hasil_lelang: 'penyerahan_hasil_lelang',
  penetapan_perintah_eksekusi_rill: 'penetapan_perintah_eksekusi_rill',
  pelaksanaan_eksekusi_rill: 'pelaksanaan_eksekusi_rill',
  penetapan_noneksekusi: 'penetapan_noneksekusi',
  alasan_eksekusi: 'alasan_eksekusi',
  catatan_eksekusi: 'catatan_eksekusi',
  prodeo_eksekusi: 'prodeo_eksekusi',
  status_eksekusi_id: 'status_eksekusi_id',
  status_eksekusi_text: 'status_eksekusi_text',
  jenis_etk_id: 'jenis_etk_id',
  jenis_etk_text: 'jenis_etk_text',
  tgl_sertifikat: 'tgl_sertifikat',
  no_sertifikat: 'no_sertifikat',
  tanggal_cabut_ht: 'tanggal_cabut_ht',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_grasiScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  alur_perkara_id: 'alur_perkara_id',
  nomor_perkara_pn: 'nomor_perkara_pn',
  putusan_pn: 'putusan_pn',
  nomor_perkara_banding: 'nomor_perkara_banding',
  putusan_banding: 'putusan_banding',
  nomor_perkara_kasasi: 'nomor_perkara_kasasi',
  putusan_kasasi: 'putusan_kasasi',
  nomor_perkara_pk: 'nomor_perkara_pk',
  putusan_pk: 'putusan_pk',
  permohonan_grasi: 'permohonan_grasi',
  permohonan_penundaan_pidana: 'permohonan_penundaan_pidana',
  terdakwa_id: 'terdakwa_id',
  terdakwa_nama: 'terdakwa_nama',
  pemohon_id: 'pemohon_id',
  pemohon_nama: 'pemohon_nama',
  pemohon_pangkat: 'pemohon_pangkat',
  pemohon_nrp: 'pemohon_nrp',
  pemohon_jabatan: 'pemohon_jabatan',
  pemohon_kesatuan: 'pemohon_kesatuan',
  pemohon_pekerjaan: 'pemohon_pekerjaan',
  pemohon_alamat: 'pemohon_alamat',
  pemohon_grasi: 'pemohon_grasi',
  pemberitahuan_putusan_tetap: 'pemberitahuan_putusan_tetap',
  menjalani_pidana_pengganti: 'menjalani_pidana_pengganti',
  terpidana_dalam_tahanan: 'terpidana_dalam_tahanan',
  denda_dibayar: 'denda_dibayar',
  barang_rampasan: 'barang_rampasan',
  tanggal_pertimbangan_hakim: 'tanggal_pertimbangan_hakim',
  isi_perimbangan_hakim: 'isi_perimbangan_hakim',
  pengiriman_berkas_grasi_ke_kejaksaan: 'pengiriman_berkas_grasi_ke_kejaksaan',
  no_pengiriman_berkas_grasi_ke_kejaksaan: 'no_pengiriman_berkas_grasi_ke_kejaksaan',
  pengiriman_berkas_grasi_ke_ma: 'pengiriman_berkas_grasi_ke_ma',
  no_pengiriman_berkas_grasi_ke_ma: 'no_pengiriman_berkas_grasi_ke_ma',
  pengiriman_pertimbangan_hakim_grasi: 'pengiriman_pertimbangan_hakim_grasi',
  tanggal_penerimaan_kembali_berkas_grasi: 'tanggal_penerimaan_kembali_berkas_grasi',
  tanggal_putusan_grasi: 'tanggal_putusan_grasi',
  status_putusan_grasi_id: 'status_putusan_grasi_id',
  status_putusan_grasi_text: 'status_putusan_grasi_text',
  nomor_putusan_grasi: 'nomor_putusan_grasi',
  amar_putusan_grasi: 'amar_putusan_grasi',
  pemberitahuan_putusan_grasi: 'pemberitahuan_putusan_grasi',
  pemberitahuan_tembusan_grasi: 'pemberitahuan_tembusan_grasi',
  catatan_putusan_grasi: 'catatan_putusan_grasi',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_hakim_bandingScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  tanggal_penetapan: 'tanggal_penetapan',
  nomor_sk_penetapan: 'nomor_sk_penetapan',
  urutan: 'urutan',
  jabatan_hakim_id: 'jabatan_hakim_id',
  jabatan_hakim_nama: 'jabatan_hakim_nama',
  hakim_id: 'hakim_id',
  hakim_kode: 'hakim_kode',
  hakim_nip: 'hakim_nip',
  hakim_nama: 'hakim_nama',
  diganti_oleh_id: 'diganti_oleh_id',
  aktif: 'aktif',
  tanggal_tidak_aktif: 'tanggal_tidak_aktif',
  keterangan: 'keterangan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_hakim_kasasiScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  tanggal_penetapan: 'tanggal_penetapan',
  nomor_sk_penetapan: 'nomor_sk_penetapan',
  urutan: 'urutan',
  jabatan_hakim_id: 'jabatan_hakim_id',
  jabatan_hakim_nama: 'jabatan_hakim_nama',
  hakim_id: 'hakim_id',
  hakim_kode: 'hakim_kode',
  hakim_nip: 'hakim_nip',
  hakim_nama: 'hakim_nama',
  diganti_oleh_id: 'diganti_oleh_id',
  aktif: 'aktif',
  tanggal_tidak_aktif: 'tanggal_tidak_aktif',
  keterangan: 'keterangan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_hakim_pengawasScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  perkara_pasca_pailit_id: 'perkara_pasca_pailit_id',
  tanggal_pengangkatan: 'tanggal_pengangkatan',
  nomor_pengangkatan: 'nomor_pengangkatan',
  hakim_id: 'hakim_id',
  nama_hakim: 'nama_hakim',
  aktif: 'aktif',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_hakim_pkScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  tanggal_penetapan: 'tanggal_penetapan',
  nomor_sk_penetapan: 'nomor_sk_penetapan',
  urutan: 'urutan',
  jabatan_hakim_id: 'jabatan_hakim_id',
  jabatan_hakim_nama: 'jabatan_hakim_nama',
  hakim_id: 'hakim_id',
  hakim_kode: 'hakim_kode',
  hakim_nip: 'hakim_nip',
  hakim_nama: 'hakim_nama',
  diganti_oleh_id: 'diganti_oleh_id',
  aktif: 'aktif',
  tanggal_tidak_aktif: 'tanggal_tidak_aktif',
  keterangan: 'keterangan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_hakim_pnScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  tahapan_id: 'tahapan_id',
  tanggal_penetapan: 'tanggal_penetapan',
  nomor_sk_penetapan: 'nomor_sk_penetapan',
  urutan: 'urutan',
  jabatan_hakim_id: 'jabatan_hakim_id',
  jabatan_hakim_nama: 'jabatan_hakim_nama',
  hakim_id: 'hakim_id',
  hakim_kode: 'hakim_kode',
  hakim_nip: 'hakim_nip',
  hakim_nama: 'hakim_nama',
  diganti_oleh_id: 'diganti_oleh_id',
  aktif: 'aktif',
  tanggal_tidak_aktif: 'tanggal_tidak_aktif',
  keterangan: 'keterangan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_harta_pailitScalarFieldEnum = {
  perkara_id: 'perkara_id',
  tanggal_pendaftaran: 'tanggal_pendaftaran',
  tanggal_penetapan_hakim_pengawas: 'tanggal_penetapan_hakim_pengawas',
  hakim_pengawas_id: 'hakim_pengawas_id',
  kurator_id: 'kurator_id',
  nama_kurator: 'nama_kurator',
  tanggal_insolvensi: 'tanggal_insolvensi',
  amar_penetapan_hakim_pengawas: 'amar_penetapan_hakim_pengawas',
  panitera_id: 'panitera_id',
  jurusita_id: 'jurusita_id',
  tanggal_pelelangan: 'tanggal_pelelangan',
  tanggal_pembagian: 'tanggal_pembagian',
  nama_kreditur: 'nama_kreditur',
  jumlah_pembagian: 'jumlah_pembagian',
  catatan_harta_pailit: 'catatan_harta_pailit',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_hasil_pemungutan_suaraScalarFieldEnum = {
  id: 'id',
  proses_id: 'proses_id',
  perkara_id: 'perkara_id',
  perkara_pasca_pailit_id: 'perkara_pasca_pailit_id',
  tanggal_pemungutan: 'tanggal_pemungutan',
  amar_pemungutan: 'amar_pemungutan',
  hasil_pemungutan: 'hasil_pemungutan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_ikrar_talakScalarFieldEnum = {
  perkara_id: 'perkara_id',
  penetapan_majelis_hakim: 'penetapan_majelis_hakim',
  majelis_hakim_id: 'majelis_hakim_id',
  majelis_hakim_nama: 'majelis_hakim_nama',
  majelis_hakim_text: 'majelis_hakim_text',
  penetapan_panitera_pengganti: 'penetapan_panitera_pengganti',
  panitera_pengganti_id: 'panitera_pengganti_id',
  panitera_pengganti_text: 'panitera_pengganti_text',
  penetapan_jurusita: 'penetapan_jurusita',
  jurusita_id: 'jurusita_id',
  jurusita_text: 'jurusita_text',
  sidang_id: 'sidang_id',
  tanggal_penetapan_sidang_ikrar: 'tanggal_penetapan_sidang_ikrar',
  tanggal_sidang_pertama: 'tanggal_sidang_pertama',
  tgl_ikrar_talak: 'tgl_ikrar_talak',
  status_penetapan_ikrar_talak_id: 'status_penetapan_ikrar_talak_id',
  amar_ikrar_talak: 'amar_ikrar_talak',
  ikrar_talak_dok: 'ikrar_talak_dok',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_izin_ceraiScalarFieldEnum = {
  perkara_id: 'perkara_id',
  pihak_id: 'pihak_id',
  STATUS: 'STATUS',
  tanggal_surat: 'tanggal_surat',
  nomor_surat: 'nomor_surat',
  nama_pejabat: 'nama_pejabat',
  jabatan_pejabat: 'jabatan_pejabat',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_jadwal_mediasiScalarFieldEnum = {
  id: 'id',
  mediasi_id: 'mediasi_id',
  urutan: 'urutan',
  tanggal_mediasi: 'tanggal_mediasi',
  jam_mediasi: 'jam_mediasi',
  sampai_jam: 'sampai_jam',
  tempat: 'tempat',
  dihadiri_oleh: 'dihadiri_oleh',
  ditunda: 'ditunda',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_jadwal_musyawarah_diversiScalarFieldEnum = {
  id: 'id',
  diversi_id: 'diversi_id',
  urutan: 'urutan',
  tanggal_musyawarah: 'tanggal_musyawarah',
  jam_musyawarah: 'jam_musyawarah',
  sampai_jam: 'sampai_jam',
  tempat: 'tempat',
  dihadiri_oleh: 'dihadiri_oleh',
  ditunda: 'ditunda',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_jadwal_pemeriksaan_pkScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  urutan: 'urutan',
  tanggal_pemeriksaan: 'tanggal_pemeriksaan',
  mulai_jam: 'mulai_jam',
  sampai_jam: 'sampai_jam',
  ruangan_id: 'ruangan_id',
  ruangan: 'ruangan',
  agenda: 'agenda',
  ditunda: 'ditunda',
  alasan_ditunda: 'alasan_ditunda',
  keterangan: 'keterangan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_jadwal_pemeriksaan_tambahanScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  tahapan_id: 'tahapan_id',
  urutan: 'urutan',
  tanggal_penetapan: 'tanggal_penetapan',
  tanggal_sidang: 'tanggal_sidang',
  jam_sidang: 'jam_sidang',
  sampai_jam: 'sampai_jam',
  agenda_id: 'agenda_id',
  agenda: 'agenda',
  ruangan_id: 'ruangan_id',
  ruangan: 'ruangan',
  dihadiri_oleh: 'dihadiri_oleh',
  ditunda: 'ditunda',
  alasan_ditunda: 'alasan_ditunda',
  sifat_sidang: 'sifat_sidang',
  keterangan: 'keterangan',
  bas_dok: 'bas_dok',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_jadwal_sidangScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  verzet: 'verzet',
  keberatan: 'keberatan',
  ikrar_talak: 'ikrar_talak',
  urutan: 'urutan',
  tanggal_sidang: 'tanggal_sidang',
  jam_sidang: 'jam_sidang',
  sampai_jam: 'sampai_jam',
  agenda_id: 'agenda_id',
  agenda: 'agenda',
  ruangan_id: 'ruangan_id',
  ruangan: 'ruangan',
  sidang_keliling: 'sidang_keliling',
  dihadiri_oleh: 'dihadiri_oleh',
  ditunda: 'ditunda',
  alasan_ditunda: 'alasan_ditunda',
  sidang_ditempat: 'sidang_ditempat',
  sifat_sidang: 'sifat_sidang',
  keterangan: 'keterangan',
  edoc_bas: 'edoc_bas',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_jadwal_sidang_detilScalarFieldEnum = {
  perkara_id: 'perkara_id',
  sidang_id: 'sidang_id',
  jenis_agenda_id: 'jenis_agenda_id',
  uraian: 'uraian',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_junctoScalarFieldEnum = {
  perkara_pailit_id: 'perkara_pailit_id',
  perkara_id: 'perkara_id',
  alur_perkara_id: 'alur_perkara_id',
  urutan: 'urutan'
};

exports.Prisma.Perkara_jurusitaScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  tahapan_id: 'tahapan_id',
  tanggal_penetapan: 'tanggal_penetapan',
  nomor_sk_penetapan: 'nomor_sk_penetapan',
  urutan: 'urutan',
  jurusita_id: 'jurusita_id',
  jurusita_kode: 'jurusita_kode',
  jurusita_nip: 'jurusita_nip',
  jurusita_nama: 'jurusita_nama',
  diganti_oleh_id: 'diganti_oleh_id',
  aktif: 'aktif',
  tanggal_tidak_aktif: 'tanggal_tidak_aktif',
  keterangan: 'keterangan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_kasasiScalarFieldEnum = {
  perkara_id: 'perkara_id',
  alur_perkara_id: 'alur_perkara_id',
  nomor_perkara_pn: 'nomor_perkara_pn',
  putusan_pn: 'putusan_pn',
  pihak_pemohon_kasasi: 'pihak_pemohon_kasasi',
  permohonan_kasasi: 'permohonan_kasasi',
  pemohon_kasasi: 'pemohon_kasasi',
  para_pihak: 'para_pihak',
  pemberitahuan_putusan_pn: 'pemberitahuan_putusan_pn',
  nomor_perkara_banding: 'nomor_perkara_banding',
  putusan_banding: 'putusan_banding',
  pemberitahuan_putusan_banding: 'pemberitahuan_putusan_banding',
  pemberitahuan_kasasi: 'pemberitahuan_kasasi',
  penerimaan_memori_kasasi: 'penerimaan_memori_kasasi',
  penyerahan_memori_kasasi: 'penyerahan_memori_kasasi',
  penerimaan_kontra_kasasi: 'penerimaan_kontra_kasasi',
  penyerahan_kontra_kasasi: 'penyerahan_kontra_kasasi',
  pemberitahuan_inzage_kasasi: 'pemberitahuan_inzage_kasasi',
  pemberitahuan_inzage_pemohon_kasasi: 'pemberitahuan_inzage_pemohon_kasasi',
  pemberitahuan_inzage_termohon_kasasi: 'pemberitahuan_inzage_termohon_kasasi',
  pelaksanaan_inzage_kasasi: 'pelaksanaan_inzage_kasasi',
  pelaksanaan_inzage_pemohon_kasasi: 'pelaksanaan_inzage_pemohon_kasasi',
  pelaksanaan_inzage_termohon_kasasi: 'pelaksanaan_inzage_termohon_kasasi',
  pengiriman_berkas_kasasi: 'pengiriman_berkas_kasasi',
  nomor_surat_pengiriman_berkas_kasasi: 'nomor_surat_pengiriman_berkas_kasasi',
  penerimaan_berkas_kasasi: 'penerimaan_berkas_kasasi',
  nomor_perkara_kasasi: 'nomor_perkara_kasasi',
  hakim1_kasasi_id: 'hakim1_kasasi_id',
  hakim1_kasasi: 'hakim1_kasasi',
  hakim2_kasasi_id: 'hakim2_kasasi_id',
  hakim2_kasasi: 'hakim2_kasasi',
  hakim3_kasasi_id: 'hakim3_kasasi_id',
  hakim3_kasasi: 'hakim3_kasasi',
  hakim4_kasasi_id: 'hakim4_kasasi_id',
  hakim4_kasasi: 'hakim4_kasasi',
  hakim5_kasasi_id: 'hakim5_kasasi_id',
  hakim5_kasasi: 'hakim5_kasasi',
  majelis_hakim_kasasi: 'majelis_hakim_kasasi',
  panitera_pengganti_kasasi_id: 'panitera_pengganti_kasasi_id',
  panitera_pengganti_kasasi: 'panitera_pengganti_kasasi',
  putusan_kasasi: 'putusan_kasasi',
  status_putusan_kasasi_id: 'status_putusan_kasasi_id',
  status_putusan_kasasi_text: 'status_putusan_kasasi_text',
  nomor_putusan_kasasi: 'nomor_putusan_kasasi',
  amar_putusan_kasasi: 'amar_putusan_kasasi',
  amar_putusan_kasasi_dok: 'amar_putusan_kasasi_dok',
  minutasi_kasasi: 'minutasi_kasasi',
  pemberitahuan_putusan_kasasi: 'pemberitahuan_putusan_kasasi',
  pemberitahuan_putusan_kasasi_pihak1: 'pemberitahuan_putusan_kasasi_pihak1',
  pemberitahuan_putusan_kasasi_pihak2: 'pemberitahuan_putusan_kasasi_pihak2',
  tanggal_berita_putusan_kasasi: 'tanggal_berita_putusan_kasasi',
  nama_media_berita_putusan_kasasi: 'nama_media_berita_putusan_kasasi',
  tanggal_surat_kabar_putusan_kasasi: 'tanggal_surat_kabar_putusan_kasasi',
  nama_surat_kabar_putusan_kasasi: 'nama_surat_kabar_putusan_kasasi',
  catatan_putusan_kasasi: 'catatan_putusan_kasasi',
  prodeo_kasasi: 'prodeo_kasasi',
  status_kasasi_id: 'status_kasasi_id',
  status_kasasi_text: 'status_kasasi_text',
  tanggal_cabut: 'tanggal_cabut',
  tidak_memenuhi_syarat: 'tidak_memenuhi_syarat',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_kasasi_detilScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  alur_perkara_id: 'alur_perkara_id',
  status_pihak_id: 'status_pihak_id',
  status_pihak_text: 'status_pihak_text',
  urutan_kasasi: 'urutan_kasasi',
  permohonan_kasasi: 'permohonan_kasasi',
  pihak_asal: 'pihak_asal',
  pihak_asal_text: 'pihak_asal_text',
  pihak_id: 'pihak_id',
  pihak_nama: 'pihak_nama',
  pihak_diwakili: 'pihak_diwakili',
  pemohon_id: 'pemohon_id',
  pemohon_nama: 'pemohon_nama',
  pemohon_pekerjaan: 'pemohon_pekerjaan',
  pemohon_alamat: 'pemohon_alamat',
  pemohon_tanggal_surat: 'pemohon_tanggal_surat',
  pemohon_nomor_surat: 'pemohon_nomor_surat',
  pemohon_kasasi: 'pemohon_kasasi',
  pemberitahuan_putusan_pn: 'pemberitahuan_putusan_pn',
  pemberitahuan_putusan_banding: 'pemberitahuan_putusan_banding',
  pemberitahuan_kasasi: 'pemberitahuan_kasasi',
  penerimaan_memori_kasasi: 'penerimaan_memori_kasasi',
  penyerahan_memori_kasasi: 'penyerahan_memori_kasasi',
  penerimaan_kontra_kasasi: 'penerimaan_kontra_kasasi',
  penyerahan_kontra_kasasi: 'penyerahan_kontra_kasasi',
  pemberitahuan_inzage_kasasi: 'pemberitahuan_inzage_kasasi',
  pelaksanaan_inzage_kasasi: 'pelaksanaan_inzage_kasasi',
  pemberitahuan_putusan_kasasi: 'pemberitahuan_putusan_kasasi',
  tanggal_kirim_salinan_putusan: 'tanggal_kirim_salinan_putusan',
  tanggal_cabut: 'tanggal_cabut',
  tidak_memenuhi_syarat: 'tidak_memenuhi_syarat',
  catatan_putusan_kasasi: 'catatan_putusan_kasasi',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_keberatanScalarFieldEnum = {
  perkara_id: 'perkara_id',
  tanggal_pendaftaran_keberatan: 'tanggal_pendaftaran_keberatan',
  pemohon_keberatan: 'pemohon_keberatan',
  penetapan_majelis_hakim: 'penetapan_majelis_hakim',
  majelis_hakim_id: 'majelis_hakim_id',
  majelis_hakim_nama: 'majelis_hakim_nama',
  majelis_hakim_text: 'majelis_hakim_text',
  penetapan_panitera_pengganti: 'penetapan_panitera_pengganti',
  panitera_pengganti_id: 'panitera_pengganti_id',
  panitera_pengganti_text: 'panitera_pengganti_text',
  penetapan_jurusita: 'penetapan_jurusita',
  jurusita_id: 'jurusita_id',
  jurusita_text: 'jurusita_text',
  sidang_id: 'sidang_id',
  tanggal_penetapan_sidang_keberatan: 'tanggal_penetapan_sidang_keberatan',
  tanggal_sidang_pertama_keberatan: 'tanggal_sidang_pertama_keberatan',
  putusan_keberatan: 'putusan_keberatan',
  status_putusan_keberatan_id: 'status_putusan_keberatan_id',
  status_putusan_keberatan_text: 'status_putusan_keberatan_text',
  amar_putusan_keberatan: 'amar_putusan_keberatan',
  amar_putusan_keberatan_dok: 'amar_putusan_keberatan_dok',
  pemberitahuan_putusan: 'pemberitahuan_putusan',
  pemberitahuan_putusan_keberatan: 'pemberitahuan_putusan_keberatan',
  pemberitahuan_putusan_keberatan_pihak1: 'pemberitahuan_putusan_keberatan_pihak1',
  pemberitahuan_putusan_keberatan_pihak2: 'pemberitahuan_putusan_keberatan_pihak2',
  penerimaan_memori: 'penerimaan_memori',
  penyerahan_memori: 'penyerahan_memori',
  penerimaan_kontra_memori: 'penerimaan_kontra_memori',
  penyerahan_kontra_memori: 'penyerahan_kontra_memori',
  inzage_pihak1: 'inzage_pihak1',
  inzage_pihak2: 'inzage_pihak2',
  tanggal_minutasi_keberatan: 'tanggal_minutasi_keberatan',
  catatan_putusan_keberatan: 'catatan_putusan_keberatan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_keberatan_detilScalarFieldEnum = {
  perkara_id: 'perkara_id',
  pihak_id: 'pihak_id',
  tanggal_permohonan: 'tanggal_permohonan',
  urutan_keberatan: 'urutan_keberatan',
  status_pihak_id: 'status_pihak_id',
  status_pihak_text: 'status_pihak_text',
  pihak_asal: 'pihak_asal',
  pihak_asal_text: 'pihak_asal_text',
  nama: 'nama',
  alamat: 'alamat',
  penerimaan_memori_banding: 'penerimaan_memori_banding',
  penyerahan_memori_banding: 'penyerahan_memori_banding',
  penerimaan_kontra_banding: 'penerimaan_kontra_banding',
  penyerahan_kontra_banding: 'penyerahan_kontra_banding',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_keberatan_kppuScalarFieldEnum = {
  perkara_id: 'perkara_id',
  tanggal_putusan_kppu: 'tanggal_putusan_kppu',
  nomor_putusan_kppu: 'nomor_putusan_kppu',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_kejaksaanScalarFieldEnum = {
  perkara_id: 'perkara_id',
  kode_satker_pengirim: 'kode_satker_pengirim'
};

exports.Prisma.Perkara_keterangan_saksiScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  sidang_id: 'sidang_id',
  penanya_id: 'penanya_id',
  saksi_id: 'saksi_id',
  urutan_pertanyaan: 'urutan_pertanyaan',
  pertanyaan: 'pertanyaan',
  jawaban: 'jawaban',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_keterangan_terdakwaScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  sidang_id: 'sidang_id',
  penanya_id: 'penanya_id',
  pihak_id: 'pihak_id',
  urutan_pertanyaan: 'urutan_pertanyaan',
  pertanyaan: 'pertanyaan',
  jawaban: 'jawaban',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_kewenangan_kppuScalarFieldEnum = {
  perkara_id: 'perkara_id',
  tgl_surat_kppu: 'tgl_surat_kppu',
  no_surat_kppu: 'no_surat_kppu',
  tgl_surat_ma: 'tgl_surat_ma',
  no_surat_ma: 'no_surat_ma',
  penunjukan_pn: 'penunjukan_pn',
  dokumen: 'dokumen',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_kumulasiScalarFieldEnum = {
  perkara_id: 'perkara_id',
  jenis_perkara_id: 'jenis_perkara_id'
};

exports.Prisma.Perkara_kuratorScalarFieldEnum = {
  id: 'id',
  urutan_id: 'urutan_id',
  perkara_id: 'perkara_id',
  perkara_pasca_pailit_id: 'perkara_pasca_pailit_id',
  tanggal_pengangkatan: 'tanggal_pengangkatan',
  kurator_id: 'kurator_id',
  nama_kurator: 'nama_kurator',
  telp_kurator: 'telp_kurator',
  nomor_surat_penunjukan: 'nomor_surat_penunjukan',
  keterangan: 'keterangan',
  doc_penunjukan: 'doc_penunjukan',
  aktif: 'aktif',
  jenis: 'jenis',
  urutan: 'urutan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_lalulintasScalarFieldEnum = {
  perkara_id: 'perkara_id',
  ditilang_oleh: 'ditilang_oleh',
  tanggal_penindakan: 'tanggal_penindakan',
  nomor_tilang: 'nomor_tilang',
  jenis_kendaraan_id: 'jenis_kendaraan_id',
  nomor_polisi: 'nomor_polisi',
  bukti_tilang_id: 'bukti_tilang_id',
  nomor_sim: 'nomor_sim',
  masa_berlaku_sim: 'masa_berlaku_sim',
  nomor_stnk: 'nomor_stnk',
  masa_berlaku_stnk: 'masa_berlaku_stnk',
  form_tilang: 'form_tilang',
  nomor_pembayaran: 'nomor_pembayaran',
  kode_satker_polri: 'kode_satker_polri',
  deskripsi_kantor_polisi: 'deskripsi_kantor_polisi',
  uang_titipan: 'uang_titipan',
  kode_satker_kejaksaan: 'kode_satker_kejaksaan',
  tanggal_bayar: 'tanggal_bayar',
  keterangan: 'keterangan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_laporan_kuratorScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  urutan_id: 'urutan_id',
  perkara_pasca_pailit_id: 'perkara_pasca_pailit_id',
  no_laporan: 'no_laporan',
  tanggal_laporan: 'tanggal_laporan',
  deskripsi: 'deskripsi',
  jenis_laporan_id: 'jenis_laporan_id',
  jenis_laporan: 'jenis_laporan',
  dokumen: 'dokumen',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_laporan_publisitasScalarFieldEnum = {
  id: 'id',
  perkara_pasca_pailit_id: 'perkara_pasca_pailit_id',
  perkara_id: 'perkara_id',
  urutan_id: 'urutan_id',
  tanggal_publisitas: 'tanggal_publisitas',
  jenis_media_id: 'jenis_media_id',
  jenis_media: 'jenis_media',
  dokumen: 'dokumen',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_matraScalarFieldEnum = {
  perkara_id: 'perkara_id',
  matra: 'matra',
  berkas_dari: 'berkas_dari',
  tanggal_kejadian: 'tanggal_kejadian',
  tempat_kejadian: 'tempat_kejadian',
  tanggal_skeppera: 'tanggal_skeppera',
  nomor_skeppera: 'nomor_skeppera',
  pejabat_skeppera: 'pejabat_skeppera',
  tanggal_surat_dakwaan: 'tanggal_surat_dakwaan',
  nomor_surat_dakwaan: 'nomor_surat_dakwaan',
  penyidik_mil: 'penyidik_mil',
  no_bap_penyidik_mil: 'no_bap_penyidik_mil',
  tgl_penyidik_mil: 'tgl_penyidik_mil',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_mediasiScalarFieldEnum = {
  mediasi_id: 'mediasi_id',
  tahapan_id: 'tahapan_id',
  perkara_id: 'perkara_id',
  jenis_mediasi: 'jenis_mediasi',
  is_mediasi: 'is_mediasi',
  penetapan_penunjukan_mediator: 'penetapan_penunjukan_mediator',
  nomor_sk_penetapan_mediator: 'nomor_sk_penetapan_mediator',
  sk_penetapan_mediator_dok: 'sk_penetapan_mediator_dok',
  mediator_id: 'mediator_id',
  status_mediator: 'status_mediator',
  mediator_text: 'mediator_text',
  penetapan_tanggal_mediasi: 'penetapan_tanggal_mediasi',
  dimulai_mediasi: 'dimulai_mediasi',
  keputusan_mediasi: 'keputusan_mediasi',
  hasil_mediasi: 'hasil_mediasi',
  mediasi_berhasil: 'mediasi_berhasil',
  tgl_kesepakatan_perdamaian: 'tgl_kesepakatan_perdamaian',
  tgl_pengajuan_kesepakatan: 'tgl_pengajuan_kesepakatan',
  isi_kesepakatan_perdamaian: 'isi_kesepakatan_perdamaian',
  akta_perdamaian: 'akta_perdamaian',
  isi_akta_perdamaian: 'isi_akta_perdamaian',
  isi_akta_perdamaian_dok: 'isi_akta_perdamaian_dok',
  mediasi_gagal: 'mediasi_gagal',
  catatan_mediasi: 'catatan_mediasi',
  tgl_permohonan_uh: 'tgl_permohonan_uh',
  tgl_pemberitahuan_ke_ptma: 'tgl_pemberitahuan_ke_ptma',
  tgl_laporan_mediator: 'tgl_laporan_mediator',
  tgl_kirim_kesepakatan_ke_ptma: 'tgl_kirim_kesepakatan_ke_ptma',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_mediatorScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  tanggal_penetapan: 'tanggal_penetapan',
  nomor_sk_penetapan: 'nomor_sk_penetapan',
  urutan: 'urutan',
  mediator_id: 'mediator_id',
  status_mediator: 'status_mediator',
  nama_mediator: 'nama_mediator',
  aktif: 'aktif',
  tanggal_tidak_aktif: 'tanggal_tidak_aktif',
  keterangan: 'keterangan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_mempelai_dkScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  nama: 'nama',
  nik: 'nik',
  tempat_lahir: 'tempat_lahir',
  tanggal_lahir: 'tanggal_lahir',
  pendidikan: 'pendidikan',
  jenis_mempelai: 'jenis_mempelai',
  pekerjaan: 'pekerjaan',
  nominal_penghasilan: 'nominal_penghasilan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_panggilan_dismissalScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  tanggal_panggilan: 'tanggal_panggilan',
  waktu: 'waktu',
  status: 'status',
  status_text: 'status_text',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_panitera_bandingScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  tanggal_penetapan: 'tanggal_penetapan',
  nomor_sk_penetapan: 'nomor_sk_penetapan',
  urutan: 'urutan',
  panitera_id: 'panitera_id',
  panitera_kode: 'panitera_kode',
  panitera_nip: 'panitera_nip',
  panitera_nama: 'panitera_nama',
  diganti_oleh_id: 'diganti_oleh_id',
  aktif: 'aktif',
  tanggal_tidak_aktif: 'tanggal_tidak_aktif',
  keterangan: 'keterangan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_panitera_kasasiScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  tanggal_penetapan: 'tanggal_penetapan',
  nomor_sk_penetapan: 'nomor_sk_penetapan',
  urutan: 'urutan',
  panitera_id: 'panitera_id',
  panitera_kode: 'panitera_kode',
  panitera_nip: 'panitera_nip',
  panitera_nama: 'panitera_nama',
  diganti_oleh_id: 'diganti_oleh_id',
  aktif: 'aktif',
  tanggal_tidak_aktif: 'tanggal_tidak_aktif',
  keterangan: 'keterangan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_panitera_pkScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  tanggal_penetapan: 'tanggal_penetapan',
  nomor_sk_penetapan: 'nomor_sk_penetapan',
  urutan: 'urutan',
  panitera_id: 'panitera_id',
  panitera_kode: 'panitera_kode',
  panitera_nip: 'panitera_nip',
  panitera_nama: 'panitera_nama',
  diganti_oleh_id: 'diganti_oleh_id',
  aktif: 'aktif',
  tanggal_tidak_aktif: 'tanggal_tidak_aktif',
  keterangan: 'keterangan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_panitera_pnScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  tahapan_id: 'tahapan_id',
  tanggal_penetapan: 'tanggal_penetapan',
  nomor_sk_penetapan: 'nomor_sk_penetapan',
  urutan: 'urutan',
  panitera_id: 'panitera_id',
  panitera_kode: 'panitera_kode',
  panitera_nip: 'panitera_nip',
  panitera_nama: 'panitera_nama',
  diganti_oleh_id: 'diganti_oleh_id',
  aktif: 'aktif',
  tanggal_tidak_aktif: 'tanggal_tidak_aktif',
  keterangan: 'keterangan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_pasca_pailitScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  alur_perkara_id_induk: 'alur_perkara_id_induk',
  urutan_pasca_pailit: 'urutan_pasca_pailit'
};

exports.Prisma.Perkara_pelaksanaan_relaasScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  sidang_id: 'sidang_id',
  jurusita_id: 'jurusita_id',
  pihak_id: 'pihak_id',
  no_resi_pos: 'no_resi_pos',
  tanggal_relaas: 'tanggal_relaas',
  tanggal_jursit_pos: 'tanggal_jursit_pos',
  ket_temu: 'ket_temu',
  ket_hasil_relaas: 'ket_hasil_relaas',
  doc_relaas: 'doc_relaas',
  doc_resi: 'doc_resi',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_pemeriksaan_tambahanScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  tahapan_id: 'tahapan_id',
  tanggal_berita_acara: 'tanggal_berita_acara',
  berita_acara: 'berita_acara',
  berita_acara_dok: 'berita_acara_dok',
  tanggal_kirim_kembali: 'tanggal_kirim_kembali',
  no_pengantar_kirim_kembali: 'no_pengantar_kirim_kembali',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_pemiluScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  tgl_putusan_bawaslu: 'tgl_putusan_bawaslu',
  dokumen: 'dokumen',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_penawaran_konsinyasiScalarFieldEnum = {
  perkara_id: 'perkara_id',
  tanggal_penawaran: 'tanggal_penawaran',
  tgl_penunjukan_js: 'tgl_penunjukan_js',
  jurusita_id: 'jurusita_id',
  nama_jurusita: 'nama_jurusita',
  tgl_pelaksanaan_penawaran: 'tgl_pelaksanaan_penawaran',
  hasil_penawaran: 'hasil_penawaran',
  is_dilaksanakan: 'is_dilaksanakan',
  ba_penawaran: 'ba_penawaran',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_pendapat_terdakwaScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  sidang_id: 'sidang_id',
  pihak_id: 'pihak_id',
  saksi_id: 'saksi_id',
  urutan: 'urutan',
  pendapat: 'pendapat',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_penetapanScalarFieldEnum = {
  perkara_id: 'perkara_id',
  jenis_acara: 'jenis_acara',
  penetapan_majelis_hakim: 'penetapan_majelis_hakim',
  nomor_sk_penetapan_majelis_hakim: 'nomor_sk_penetapan_majelis_hakim',
  sk_penetapan_majelis_hakim_dok: 'sk_penetapan_majelis_hakim_dok',
  majelis_hakim_id: 'majelis_hakim_id',
  majelis_hakim_kode: 'majelis_hakim_kode',
  majelis_hakim_nama: 'majelis_hakim_nama',
  majelis_hakim_text: 'majelis_hakim_text',
  penetapan_panitera_pengganti: 'penetapan_panitera_pengganti',
  nomor_sk_penetapan_panitera_pengganti: 'nomor_sk_penetapan_panitera_pengganti',
  sk_penetapan_panitera_pengganti_dok: 'sk_penetapan_panitera_pengganti_dok',
  panitera_pengganti_id: 'panitera_pengganti_id',
  panitera_pengganti_text: 'panitera_pengganti_text',
  penetapan_jurusita: 'penetapan_jurusita',
  nomor_sk_penetapan_jurusita: 'nomor_sk_penetapan_jurusita',
  sk_penetapan_jurusita_dok: 'sk_penetapan_jurusita_dok',
  jurusita_id: 'jurusita_id',
  jurusita_text: 'jurusita_text',
  penetapan_hari_sidang: 'penetapan_hari_sidang',
  sidang_pertama: 'sidang_pertama',
  catatan_penetapan: 'catatan_penetapan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_penetapan_hakim_pengawasScalarFieldEnum = {
  id: 'id',
  hanwas_id: 'hanwas_id',
  jenis_penetapan: 'jenis_penetapan',
  nomor_penetapan: 'nomor_penetapan',
  tanggal_penetapan: 'tanggal_penetapan',
  hakim_pengawas_id: 'hakim_pengawas_id',
  dokumen_penetapan: 'dokumen_penetapan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_penetapan_hari_sidangScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  tahapan_id: 'tahapan_id',
  jadwalsidang_id: 'jadwalsidang_id',
  tanggal_penetapan: 'tanggal_penetapan',
  tanggal_sidang: 'tanggal_sidang',
  keterangan: 'keterangan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_penetapan_publisitasScalarFieldEnum = {
  id: 'id',
  perkara_pasca_pailit_id: 'perkara_pasca_pailit_id',
  perkara_id: 'perkara_id',
  urutan_id: 'urutan_id',
  tanggal_penetapan: 'tanggal_penetapan',
  no_penetapan: 'no_penetapan',
  suratkabar1: 'suratkabar1',
  suratkabar2: 'suratkabar2',
  tanggal_rapat: 'tanggal_rapat',
  waktu_rapat: 'waktu_rapat',
  tempat_rapat: 'tempat_rapat',
  batas_akhir_penagihan_kreditur: 'batas_akhir_penagihan_kreditur',
  tanggal_rapat_pencocokan: 'tanggal_rapat_pencocokan',
  waktu_pencocokan: 'waktu_pencocokan',
  tempat_rapat_pencocokan: 'tempat_rapat_pencocokan',
  dokumen: 'dokumen',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_pengacaraScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  pihak_ke: 'pihak_ke',
  pihak_id: 'pihak_id',
  urutan: 'urutan',
  pengacara_id: 'pengacara_id',
  jenis_pihak_id: 'jenis_pihak_id',
  nama: 'nama',
  alamat: 'alamat',
  keterangan: 'keterangan',
  aktif: 'aktif',
  aktif_mulai: 'aktif_mulai',
  aktif_sampai: 'aktif_sampai',
  masa_aktif: 'masa_aktif',
  nomor_kuasa: 'nomor_kuasa',
  tanggal_kuasa: 'tanggal_kuasa',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_pengacara_copyScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  pihak_ke: 'pihak_ke',
  pihak_id: 'pihak_id',
  urutan: 'urutan',
  pengacara_id: 'pengacara_id',
  jenis_pihak_id: 'jenis_pihak_id',
  nama: 'nama',
  alamat: 'alamat',
  keterangan: 'keterangan',
  aktif: 'aktif',
  aktif_mulai: 'aktif_mulai',
  aktif_sampai: 'aktif_sampai',
  masa_aktif: 'masa_aktif',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_pengakhiran_kepailitanScalarFieldEnum = {
  id: 'id',
  perkara_pasca_pailit_id: 'perkara_pasca_pailit_id',
  perkara_id: 'perkara_id',
  tanggal_pengakhiran: 'tanggal_pengakhiran',
  alasan_id: 'alasan_id',
  alasan: 'alasan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_pengakhiran_kepailitan_dokumenScalarFieldEnum = {
  id: 'id',
  pengakhiran_kepailitan_id: 'pengakhiran_kepailitan_id',
  jenis_dokumen_id: 'jenis_dokumen_id',
  nama_dokumen: 'nama_dokumen',
  dokumen: 'dokumen',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_pengakhiran_pkpuScalarFieldEnum = {
  perkara_id: 'perkara_id',
  pengakhiran_pkpu_id: 'pengakhiran_pkpu_id',
  pengakhiran_pkpu_text: 'pengakhiran_pkpu_text',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_pengumuman_kepailitanScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  tanggal: 'tanggal',
  nomor: 'nomor',
  perihal: 'perihal',
  dokumen: 'dokumen',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_penjualan_harta_pailitScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  jenis_harta_pailit: 'jenis_harta_pailit',
  nomor: 'nomor',
  tanggal: 'tanggal',
  nama_pelaksana_appraisal: 'nama_pelaksana_appraisal',
  dokumen: 'dokumen',
  status: 'status',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_penuntutanScalarFieldEnum = {
  perkara_id: 'perkara_id',
  tanggal_penuntutan: 'tanggal_penuntutan',
  isi_penuntutan: 'isi_penuntutan',
  isi_penuntutan_dok: 'isi_penuntutan_dok',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_penyegelanScalarFieldEnum = {
  id: 'id',
  nomor_urut_register: 'nomor_urut_register',
  perkara_id: 'perkara_id',
  alur_perkara_id: 'alur_perkara_id',
  nomor_perkara: 'nomor_perkara',
  para_pihak: 'para_pihak',
  penetapan_penyegelan: 'penetapan_penyegelan',
  pelaksanaan_penyegelan: 'pelaksanaan_penyegelan',
  jenis_barang: 'jenis_barang',
  disita_dari: 'disita_dari',
  penyimpanan_barang: 'penyimpanan_barang',
  penetapan_pengangakatan_penyegelan: 'penetapan_pengangakatan_penyegelan',
  pelaksanaan_pengangakatan_penyegelan: 'pelaksanaan_pengangakatan_penyegelan',
  catatan_penyegelan: 'catatan_penyegelan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_penyidikScalarFieldEnum = {
  perkara_id: 'perkara_id',
  kode_satker_pengirim: 'kode_satker_pengirim'
};

exports.Prisma.Perkara_penyitaanScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  alur_perkara_id: 'alur_perkara_id',
  nomor_perkara: 'nomor_perkara',
  tanggal_pendaftaran_penyitaan: 'tanggal_pendaftaran_penyitaan',
  pihak1_id: 'pihak1_id',
  pihak1_nama: 'pihak1_nama',
  pengacara_pihak1: 'pengacara_pihak1',
  pihak2_id: 'pihak2_id',
  pihak2_nama: 'pihak2_nama',
  pengacara_pihak2: 'pengacara_pihak2',
  para_pihak: 'para_pihak',
  penetapan_sita: 'penetapan_sita',
  pelaksanaan_sita: 'pelaksanaan_sita',
  jenis_sita_id: 'jenis_sita_id',
  jenis_sita_nama: 'jenis_sita_nama',
  jenis_barang: 'jenis_barang',
  disita_dari: 'disita_dari',
  penyimpanan_barang: 'penyimpanan_barang',
  penetapan_pengangkatan_sita: 'penetapan_pengangkatan_sita',
  pelaksanaan_pengangkatan_sita: 'pelaksanaan_pengangkatan_sita',
  catatan_penyitaan: 'catatan_penyitaan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_perbaikan_gugatanScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  perbaikan: 'perbaikan',
  is_perbaikan: 'is_perbaikan',
  isi_saran_perbaikan: 'isi_saran_perbaikan',
  tanggal_saran_perbaikan: 'tanggal_saran_perbaikan',
  tanggal_dinyatakan_lengkap: 'tanggal_dinyatakan_lengkap',
  petitum: 'petitum',
  petitum_dok: 'petitum_dok',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_persiapanScalarFieldEnum = {
  perkara_id: 'perkara_id',
  tanggal_penetapan_persiapan: 'tanggal_penetapan_persiapan',
  petitum: 'petitum',
  petitum_dok: 'petitum_dok',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_persiapan_prosesScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  urutan: 'urutan',
  tanggal_musyawarah: 'tanggal_musyawarah',
  agenda_musyawarah: 'agenda_musyawarah',
  waktu_musyawarah: 'waktu_musyawarah',
  keterangan: 'keterangan',
  edoc_persiapan_proses: 'edoc_persiapan_proses',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal',
  dihadiri_oleh: 'dihadiri_oleh'
};

exports.Prisma.Perkara_pihak1ScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  urutan: 'urutan',
  pihak_id: 'pihak_id',
  jenis_pihak_id: 'jenis_pihak_id',
  nama: 'nama',
  alamat: 'alamat',
  keterangan: 'keterangan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_pihak2ScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  urutan: 'urutan',
  pihak_id: 'pihak_id',
  jenis_pihak_id: 'jenis_pihak_id',
  nama: 'nama',
  alamat: 'alamat',
  keterangan: 'keterangan',
  pangkat: 'pangkat',
  nrp: 'nrp',
  jabatan: 'jabatan',
  kesatuan: 'kesatuan',
  ditahan_oleh_id: 'ditahan_oleh_id',
  status_penahanan_id: 'status_penahanan_id',
  jenis_tahanan_id: 'jenis_tahanan_id',
  ghaib: 'ghaib',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_pihak3ScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  urutan: 'urutan',
  pihak_id: 'pihak_id',
  jenis_pihak_id: 'jenis_pihak_id',
  nama: 'nama',
  alamat: 'alamat',
  tergabung_ke_pihak: 'tergabung_ke_pihak',
  jenis_intervensi_id: 'jenis_intervensi_id',
  jenis_intervensi_nama: 'jenis_intervensi_nama',
  tanggal_izin_intervensi: 'tanggal_izin_intervensi',
  keterangan: 'keterangan',
  isi_petitum: 'isi_petitum',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_pihak4ScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  urutan: 'urutan',
  pihak_id: 'pihak_id',
  jenis_pihak_id: 'jenis_pihak_id',
  nama: 'nama',
  alamat: 'alamat',
  keterangan: 'keterangan',
  ditahan_oleh_id: 'ditahan_oleh_id',
  status_penahanan_id: 'status_penahanan_id',
  jenis_tahanan_id: 'jenis_tahanan_id',
  ghaib: 'ghaib',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_pihak5ScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  urutan: 'urutan',
  saksi_pihak_ke: 'saksi_pihak_ke',
  pihak_id: 'pihak_id',
  jenis_pihak_id: 'jenis_pihak_id',
  jenis_saksi: 'jenis_saksi',
  nama: 'nama',
  alamat: 'alamat',
  pangkat: 'pangkat',
  nrp: 'nrp',
  jabatan: 'jabatan',
  kesatuan: 'kesatuan',
  keterangan: 'keterangan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_pihak_korbanScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  urutan: 'urutan',
  pihak_id: 'pihak_id',
  jenis_pihak_id: 'jenis_pihak_id',
  nama: 'nama',
  alamat: 'alamat',
  tempat_lahir: 'tempat_lahir',
  tanggal_lahir: 'tanggal_lahir',
  umur: 'umur',
  dewasa: 'dewasa',
  jenis_kelamin: 'jenis_kelamin',
  status_kawin: 'status_kawin',
  agama_id: 'agama_id',
  agama_nama: 'agama_nama',
  pekerjaan: 'pekerjaan',
  pendidikan_id: 'pendidikan_id',
  pendidikan: 'pendidikan',
  warga_negara_id: 'warga_negara_id',
  warga_negara: 'warga_negara',
  keterangan: 'keterangan',
  ditahan_oleh_id: 'ditahan_oleh_id',
  status_penahanan_id: 'status_penahanan_id',
  jenis_tahanan_id: 'jenis_tahanan_id',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_pihak_orang_tuaScalarFieldEnum = {
  id_anak: 'id_anak',
  id_orang_tua: 'id_orang_tua',
  perkara_id: 'perkara_id',
  jenis_pihak_anak: 'jenis_pihak_anak'
};

exports.Prisma.Perkara_pihak_pekerja_sosial_profesionalScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  urutan: 'urutan',
  pihak_id: 'pihak_id',
  jenis_pihak_id: 'jenis_pihak_id',
  nama: 'nama',
  alamat: 'alamat',
  keterangan: 'keterangan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_pihak_pembimbing_masyarakatScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  urutan: 'urutan',
  pihak_id: 'pihak_id',
  jenis_pihak_id: 'jenis_pihak_id',
  nama: 'nama',
  alamat: 'alamat',
  tempat_lahir: 'tempat_lahir',
  tanggal_lahir: 'tanggal_lahir',
  umur: 'umur',
  dewasa: 'dewasa',
  jenis_kelamin: 'jenis_kelamin',
  status_kawin: 'status_kawin',
  agama_id: 'agama_id',
  agama_nama: 'agama_nama',
  pekerjaan: 'pekerjaan',
  pendidikan_id: 'pendidikan_id',
  pendidikan: 'pendidikan',
  warga_negara_id: 'warga_negara_id',
  warga_negara: 'warga_negara',
  keterangan: 'keterangan',
  ditahan_oleh_id: 'ditahan_oleh_id',
  status_penahanan_id: 'status_penahanan_id',
  jenis_tahanan_id: 'jenis_tahanan_id',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_pihak_penyidikScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  urutan: 'urutan',
  pihak_id: 'pihak_id',
  jenis_pihak_id: 'jenis_pihak_id',
  nama: 'nama',
  alamat: 'alamat',
  tempat_lahir: 'tempat_lahir',
  tanggal_lahir: 'tanggal_lahir',
  umur: 'umur',
  dewasa: 'dewasa',
  jenis_kelamin: 'jenis_kelamin',
  status_kawin: 'status_kawin',
  agama_id: 'agama_id',
  agama_nama: 'agama_nama',
  pekerjaan: 'pekerjaan',
  pendidikan_id: 'pendidikan_id',
  pendidikan: 'pendidikan',
  warga_negara_id: 'warga_negara_id',
  warga_negara: 'warga_negara',
  keterangan: 'keterangan',
  ditahan_oleh_id: 'ditahan_oleh_id',
  status_penahanan_id: 'status_penahanan_id',
  jenis_tahanan_id: 'jenis_tahanan_id',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_pihak_perwakilan_masyarakatScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  urutan: 'urutan',
  pihak_id: 'pihak_id',
  jenis_pihak_id: 'jenis_pihak_id',
  nama: 'nama',
  alamat: 'alamat',
  keterangan: 'keterangan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_pihak_tersangkaScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  urutan: 'urutan',
  pihak_id: 'pihak_id',
  jenis_pihak_id: 'jenis_pihak_id',
  nama: 'nama',
  alamat: 'alamat',
  keterangan: 'keterangan',
  pangkat: 'pangkat',
  nrp: 'nrp',
  jabatan: 'jabatan',
  kesatuan: 'kesatuan',
  ditahan_oleh_id: 'ditahan_oleh_id',
  status_penahanan_id: 'status_penahanan_id',
  jenis_tahanan_id: 'jenis_tahanan_id',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_pkScalarFieldEnum = {
  perkara_id: 'perkara_id',
  jenis_pk: 'jenis_pk',
  alur_perkara_id: 'alur_perkara_id',
  nomor_perkara_pn: 'nomor_perkara_pn',
  putusan_pn: 'putusan_pn',
  pihak_pemohon_pk: 'pihak_pemohon_pk',
  permohonan_pk: 'permohonan_pk',
  pemohon_pk: 'pemohon_pk',
  para_pihak: 'para_pihak',
  alasan_pk: 'alasan_pk',
  pemberitahuan_putusan_pn: 'pemberitahuan_putusan_pn',
  nomor_perkara_banding: 'nomor_perkara_banding',
  putusan_banding: 'putusan_banding',
  pemberitahuan_putusan_banding: 'pemberitahuan_putusan_banding',
  nomor_perkara_kasasi: 'nomor_perkara_kasasi',
  putusan_kasasi: 'putusan_kasasi',
  pemberitahuan_putusan_kasasi: 'pemberitahuan_putusan_kasasi',
  pemberitahuan_pk: 'pemberitahuan_pk',
  penerimaan_memori_pk: 'penerimaan_memori_pk',
  penyerahan_memori_pk: 'penyerahan_memori_pk',
  penerimaan_kontra_pk: 'penerimaan_kontra_pk',
  penyerahan_kontra_pk: 'penyerahan_kontra_pk',
  penetapan_majelis_hakim_pk: 'penetapan_majelis_hakim_pk',
  hakim_id_pk: 'hakim_id_pk',
  hakim_nama_pk: 'hakim_nama_pk',
  penetapan_pp_pk: 'penetapan_pp_pk',
  pp_id_pk: 'pp_id_pk',
  pp_nama_pk: 'pp_nama_pk',
  penetapan_pemeriksaan_pk: 'penetapan_pemeriksaan_pk',
  pemeriksaan_pk: 'pemeriksaan_pk',
  pendapat_jaksa: 'pendapat_jaksa',
  isi_pendapat_jaksa: 'isi_pendapat_jaksa',
  pendapat_hakim: 'pendapat_hakim',
  isi_pendapat_hakim: 'isi_pendapat_hakim',
  tanggal_penyumpahan: 'tanggal_penyumpahan',
  pemberitahuan_inzage_pk: 'pemberitahuan_inzage_pk',
  pemberitahuan_inzage_pemohon_pk: 'pemberitahuan_inzage_pemohon_pk',
  pemberitahuan_inzage_termohon_pk: 'pemberitahuan_inzage_termohon_pk',
  pelaksanaan_inzage_pk: 'pelaksanaan_inzage_pk',
  pelaksanaan_inzage_pemohon_pk: 'pelaksanaan_inzage_pemohon_pk',
  pelaksanaan_inzage_termohon_pk: 'pelaksanaan_inzage_termohon_pk',
  pengiriman_berkas_pk: 'pengiriman_berkas_pk',
  nomor_surat_pengiriman_berkas_pk: 'nomor_surat_pengiriman_berkas_pk',
  penerimaan_berkas_pk: 'penerimaan_berkas_pk',
  nomor_perkara_pk: 'nomor_perkara_pk',
  hakim1_pk_id: 'hakim1_pk_id',
  hakim1_pk: 'hakim1_pk',
  hakim2_pk_id: 'hakim2_pk_id',
  hakim2_pk: 'hakim2_pk',
  hakim3_pk_id: 'hakim3_pk_id',
  hakim3_pk: 'hakim3_pk',
  hakim4_pk_id: 'hakim4_pk_id',
  hakim4_pk: 'hakim4_pk',
  hakim5_pk_id: 'hakim5_pk_id',
  hakim5_pk: 'hakim5_pk',
  majelis_hakim_pk: 'majelis_hakim_pk',
  panitera_pengganti_pk_id: 'panitera_pengganti_pk_id',
  panitera_pengganti_pk: 'panitera_pengganti_pk',
  putusan_pk: 'putusan_pk',
  status_putusan_pk_id: 'status_putusan_pk_id',
  status_putusan_pk_text: 'status_putusan_pk_text',
  nomor_putusan_pk: 'nomor_putusan_pk',
  amar_putusan_pk: 'amar_putusan_pk',
  amar_putusan_pk_dok: 'amar_putusan_pk_dok',
  minutasi_pk: 'minutasi_pk',
  pemberitahuan_putusan_pk: 'pemberitahuan_putusan_pk',
  pemberitahuan_putusan_pk_pihak1: 'pemberitahuan_putusan_pk_pihak1',
  pemberitahuan_putusan_pk_pihak2: 'pemberitahuan_putusan_pk_pihak2',
  catatan_putusan_pk: 'catatan_putusan_pk',
  prodeo_pk: 'prodeo_pk',
  status_pk_id: 'status_pk_id',
  status_pk_text: 'status_pk_text',
  tanggal_cabut: 'tanggal_cabut',
  tidak_memenuhi_syarat: 'tidak_memenuhi_syarat',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_pk_detilScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  alur_perkara_id: 'alur_perkara_id',
  status_pihak_id: 'status_pihak_id',
  status_pihak_text: 'status_pihak_text',
  urutan_pk: 'urutan_pk',
  permohonan_pk: 'permohonan_pk',
  pihak_asal: 'pihak_asal',
  pihak_asal_text: 'pihak_asal_text',
  pihak_id: 'pihak_id',
  pihak_nama: 'pihak_nama',
  pihak_diwakili: 'pihak_diwakili',
  pemohon_id: 'pemohon_id',
  pemohon_nama: 'pemohon_nama',
  pemohon_pekerjaan: 'pemohon_pekerjaan',
  pemohon_alamat: 'pemohon_alamat',
  pemohon_tanggal_surat: 'pemohon_tanggal_surat',
  pemohon_nomor_surat: 'pemohon_nomor_surat',
  pemohon_pk: 'pemohon_pk',
  alasan_pk: 'alasan_pk',
  pemberitahuan_putusan_pn: 'pemberitahuan_putusan_pn',
  pemberitahuan_putusan_banding: 'pemberitahuan_putusan_banding',
  pemberitahuan_putusan_kasasi: 'pemberitahuan_putusan_kasasi',
  pemberitahuan_pk: 'pemberitahuan_pk',
  penerimaan_memori_pk: 'penerimaan_memori_pk',
  penyerahan_memori_pk: 'penyerahan_memori_pk',
  penerimaan_kontra_pk: 'penerimaan_kontra_pk',
  penyerahan_kontra_pk: 'penyerahan_kontra_pk',
  tanggal_penyumpahan: 'tanggal_penyumpahan',
  pemberitahuan_inzage_pk: 'pemberitahuan_inzage_pk',
  pelaksanaan_inzage_pk: 'pelaksanaan_inzage_pk',
  pemberitahuan_putusan_pk: 'pemberitahuan_putusan_pk',
  tanggal_kirim_salinan_putusan: 'tanggal_kirim_salinan_putusan',
  tanggal_cabut: 'tanggal_cabut',
  tidak_memenuhi_syarat: 'tidak_memenuhi_syarat',
  catatan_putusan_pk: 'catatan_putusan_pk',
  keterangan: 'keterangan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_prosesScalarFieldEnum = {
  perkara_id: 'perkara_id',
  general_id: 'general_id',
  tahapan_id: 'tahapan_id',
  tahapan_nama: 'tahapan_nama',
  proses_id: 'proses_id',
  proses_nama: 'proses_nama',
  tanggal: 'tanggal',
  keterangan: 'keterangan',
  urutan: 'urutan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_putusanScalarFieldEnum = {
  perkara_id: 'perkara_id',
  tanggal_putusan: 'tanggal_putusan',
  putusan_verstek: 'putusan_verstek',
  sumber_hukum_id: 'sumber_hukum_id',
  status_putusan_id: 'status_putusan_id',
  status_putusan_kode: 'status_putusan_kode',
  status_putusan_nama: 'status_putusan_nama',
  status_putusan_text: 'status_putusan_text',
  tanggal_cabut: 'tanggal_cabut',
  tanggal_gugur: 'tanggal_gugur',
  amar_putusan: 'amar_putusan',
  amar_putusan_dok: 'amar_putusan_dok',
  amar_putusan_anonimisasi_dok: 'amar_putusan_anonimisasi_dok',
  penetapan_hakim_pengawas: 'penetapan_hakim_pengawas',
  nomor_penetapan_hakim_pengawas: 'nomor_penetapan_hakim_pengawas',
  hakim_pengawas_id: 'hakim_pengawas_id',
  pengurus_id: 'pengurus_id',
  tanggal_penetapan_kreditur: 'tanggal_penetapan_kreditur',
  panitia_kreditur: 'panitia_kreditur',
  kurator_id: 'kurator_id',
  tanggal_berita_putusan: 'tanggal_berita_putusan',
  nama_media_berita_putusan: 'nama_media_berita_putusan',
  tanggal_surat_kabar_putusan: 'tanggal_surat_kabar_putusan',
  nama_surat_kabar_putusan: 'nama_surat_kabar_putusan',
  tanggal_minutasi: 'tanggal_minutasi',
  pemberitahuan_putusan: 'pemberitahuan_putusan',
  pemberitahuan_putusan_pihak1: 'pemberitahuan_putusan_pihak1',
  pemberitahuan_putusan_pihak2: 'pemberitahuan_putusan_pihak2',
  pemberitahuan_putusan_pihak3: 'pemberitahuan_putusan_pihak3',
  pemberitahuan_putusan_ankum: 'pemberitahuan_putusan_ankum',
  pemberitahuan_putusan_pepera: 'pemberitahuan_putusan_pepera',
  menerima_putusan_pihak1: 'menerima_putusan_pihak1',
  menerima_putusan_pihak2: 'menerima_putusan_pihak2',
  penerbitan_salinan_putusan: 'penerbitan_salinan_putusan',
  kirim_salinan_putusan_pihak1: 'kirim_salinan_putusan_pihak1',
  kirim_salinan_putusan_pihak2: 'kirim_salinan_putusan_pihak2',
  kirim_salinan_putusan_pihak3: 'kirim_salinan_putusan_pihak3',
  kirim_salinan_putusan_penyidik: 'kirim_salinan_putusan_penyidik',
  catatan_putusan: 'catatan_putusan',
  nilai_ganti_kerugian: 'nilai_ganti_kerugian',
  tanggal_bht: 'tanggal_bht',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_putusan_pemberitahuan_putusanScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  tahapan_id: 'tahapan_id',
  putusan_akhir: 'putusan_akhir',
  pihak: 'pihak',
  pihak_id: 'pihak_id',
  tanggal_pemberitahuan_putusan: 'tanggal_pemberitahuan_putusan',
  tanggal_menerima_putusan: 'tanggal_menerima_putusan',
  tanggal_kirim_salinan_putusan: 'tanggal_kirim_salinan_putusan',
  no_resi_pos: 'no_resi_pos',
  tanggal_jursit_pos: 'tanggal_jursit_pos',
  ket_ketemu: 'ket_ketemu',
  edoc_resi: 'edoc_resi',
  edoc_pbt: 'edoc_pbt'
};

exports.Prisma.Perkara_putusan_pkpu_sementaraScalarFieldEnum = {
  perkara_id: 'perkara_id',
  tanggal_putusan: 'tanggal_putusan',
  amar_putusan: 'amar_putusan',
  amar_dok: 'amar_dok',
  pemberitahuan_putusan_pihak1: 'pemberitahuan_putusan_pihak1',
  pemberitahuan_putusan_pihak2: 'pemberitahuan_putusan_pihak2',
  pemberitahuan_putusan_pihak3: 'pemberitahuan_putusan_pihak3',
  pemberitahuan_putusan_pihak4: 'pemberitahuan_putusan_pihak4',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_putusan_pkpu_tetapScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  urutan: 'urutan',
  tanggal_putusan: 'tanggal_putusan',
  amar_pkpu_tetap: 'amar_pkpu_tetap',
  amar_dok: 'amar_dok',
  pemberitahuan_putusan_pihak1: 'pemberitahuan_putusan_pihak1',
  pemberitahuan_putusan_pihak2: 'pemberitahuan_putusan_pihak2',
  pemberitahuan_putusan_pihak3: 'pemberitahuan_putusan_pihak3',
  pemberitahuan_putusan_pihak4: 'pemberitahuan_putusan_pihak4',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_putusan_selaScalarFieldEnum = {
  putusansela_id: 'putusansela_id',
  perkara_id: 'perkara_id',
  urutan: 'urutan',
  tanggal_putusan_sela: 'tanggal_putusan_sela',
  is_keberatan_diterima: 'is_keberatan_diterima',
  amar_sela: 'amar_sela',
  amar_sela_dok: 'amar_sela_dok',
  tanggal_minutasi_sela: 'tanggal_minutasi_sela',
  tanggal_berita_sela: 'tanggal_berita_sela',
  nama_media_berita_sela: 'nama_media_berita_sela',
  tanggal_surat_kabar_sela: 'tanggal_surat_kabar_sela',
  nama_surat_kabar_sela: 'nama_surat_kabar_sela',
  penetapan_hakim_pengawas: 'penetapan_hakim_pengawas',
  hakim_pengawas_id: 'hakim_pengawas_id',
  hakim_pengawas_nama: 'hakim_pengawas_nama',
  pengurus_id: 'pengurus_id',
  pengurus_nama: 'pengurus_nama',
  tanggal_perpanjangan: 'tanggal_perpanjangan',
  mulai_perpanjangan: 'mulai_perpanjangan',
  sampai_perpanjangan: 'sampai_perpanjangan',
  waktu_perpanjangan: 'waktu_perpanjangan',
  penetapan_sita_jaminan: 'penetapan_sita_jaminan',
  pelaksanaan_sita_jaminan: 'pelaksanaan_sita_jaminan',
  pemberitahuan_putusan_sela_pihak1: 'pemberitahuan_putusan_sela_pihak1',
  pemberitahuan_putusan_sela_pihak2: 'pemberitahuan_putusan_sela_pihak2',
  pemberitahuan_putusan_sela_pihak3: 'pemberitahuan_putusan_sela_pihak3',
  pemberitahuan_putusan_sela_pihak4: 'pemberitahuan_putusan_sela_pihak4',
  catatan_putusan: 'catatan_putusan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_putusan_sela_uhScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  tahapan_id: 'tahapan_id',
  no_putsela_uh: 'no_putsela_uh',
  tanggal_putsela_uh: 'tanggal_putsela_uh',
  tanggal_terima_putsela_uh: 'tanggal_terima_putsela_uh',
  amar_putsela_uh: 'amar_putsela_uh',
  amar_putsela_uh_dok: 'amar_putsela_uh_dok',
  keterangan: 'keterangan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_putusan_terdakwaScalarFieldEnum = {
  pihak2_id: 'pihak2_id',
  perkara_id: 'perkara_id',
  pihak_id: 'pihak_id',
  tanggal_putusan: 'tanggal_putusan',
  status_putusan_id: 'status_putusan_id',
  status_putusan_text: 'status_putusan_text',
  durasi_nominal: 'durasi_nominal',
  satuan: 'satuan',
  keterangan_putusan: 'keterangan_putusan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_putusan_terdakwa_bandingScalarFieldEnum = {
  pihak2_id: 'pihak2_id',
  perkara_id: 'perkara_id',
  pihak_id: 'pihak_id',
  tanggal_putusan: 'tanggal_putusan',
  status_putusan_id: 'status_putusan_id',
  status_putusan_text: 'status_putusan_text',
  durasi_nominal: 'durasi_nominal',
  satuan: 'satuan',
  keterangan_putusan: 'keterangan_putusan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_putusan_terdakwa_copyScalarFieldEnum = {
  pihak2_id: 'pihak2_id',
  perkara_id: 'perkara_id',
  pihak_id: 'pihak_id',
  status_putusan_id: 'status_putusan_id',
  tanggal_putusan: 'tanggal_putusan',
  status_putusan_text: 'status_putusan_text',
  terpidana: 'terpidana',
  pidana_mati: 'pidana_mati',
  pidana_penjara_seumur_hidup: 'pidana_penjara_seumur_hidup',
  pidana_penjara_waktu_tertentu: 'pidana_penjara_waktu_tertentu',
  pidana_penjara_waktu_tertentu_tahun: 'pidana_penjara_waktu_tertentu_tahun',
  pidana_penjara_waktu_tertentu_bulan: 'pidana_penjara_waktu_tertentu_bulan',
  pidana_penjara_waktu_tertentu_hari: 'pidana_penjara_waktu_tertentu_hari',
  pidana_kurungan: 'pidana_kurungan',
  pidana_kurungan_tahun: 'pidana_kurungan_tahun',
  pidana_kurungan_bulan: 'pidana_kurungan_bulan',
  pidana_kurungan_hari: 'pidana_kurungan_hari',
  pidana_denda: 'pidana_denda',
  pidana_denda_nominal: 'pidana_denda_nominal',
  pidana_tambahan: 'pidana_tambahan',
  pidana_tambahan_tahun: 'pidana_tambahan_tahun',
  pidana_tambahan_bulan: 'pidana_tambahan_bulan',
  pidana_tambahan_hari: 'pidana_tambahan_hari',
  pidana_bersyarat: 'pidana_bersyarat',
  dikembalikan_pada_orang_tua: 'dikembalikan_pada_orang_tua',
  dikembalikan_pada_negara: 'dikembalikan_pada_negara',
  rehabilitasi: 'rehabilitasi',
  tindakan_lain: 'tindakan_lain',
  subsider_penjara: 'subsider_penjara',
  subsider_penjara_tahun: 'subsider_penjara_tahun',
  subsider_penjara_bulan: 'subsider_penjara_bulan',
  subsider_penjara_hari: 'subsider_penjara_hari',
  subsider_kurungan: 'subsider_kurungan',
  subsider_kurungan_tahun: 'subsider_kurungan_tahun',
  subsider_kurungan_bulan: 'subsider_kurungan_bulan',
  subsider_kurungan_hari: 'subsider_kurungan_hari',
  subsider_denda: 'subsider_denda',
  subsider_denda_nominal: 'subsider_denda_nominal',
  bebas_dari_tuduhan: 'bebas_dari_tuduhan',
  bebas_dari_tuntutan: 'bebas_dari_tuntutan',
  keterangan_putusan: 'keterangan_putusan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_putusan_terdakwa_kasasiScalarFieldEnum = {
  pihak2_id: 'pihak2_id',
  perkara_id: 'perkara_id',
  pihak_id: 'pihak_id',
  tanggal_putusan: 'tanggal_putusan',
  status_putusan_id: 'status_putusan_id',
  status_putusan_text: 'status_putusan_text',
  durasi_nominal: 'durasi_nominal',
  satuan: 'satuan',
  keterangan_putusan: 'keterangan_putusan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_putusan_terdakwa_pkScalarFieldEnum = {
  pihak2_id: 'pihak2_id',
  perkara_id: 'perkara_id',
  pihak_id: 'pihak_id',
  tanggal_putusan: 'tanggal_putusan',
  status_putusan_id: 'status_putusan_id',
  status_putusan_text: 'status_putusan_text',
  durasi_nominal: 'durasi_nominal',
  satuan: 'satuan',
  keterangan_putusan: 'keterangan_putusan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_rapat_pasca_kepailitanScalarFieldEnum = {
  id: 'id',
  perkara_pasca_pailit_id: 'perkara_pasca_pailit_id',
  kategori_rapat: 'kategori_rapat',
  urutan: 'urutan',
  tanggal_rapat: 'tanggal_rapat',
  jam_rapat: 'jam_rapat',
  jenis_rapat_id: 'jenis_rapat_id',
  jenis_rapat: 'jenis_rapat',
  agenda_rapat: 'agenda_rapat',
  tempat_rapat: 'tempat_rapat',
  alasan_ditunda: 'alasan_ditunda',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_rapat_pkpuScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  kategori_rapat: 'kategori_rapat',
  urutan: 'urutan',
  tanggal_rapat: 'tanggal_rapat',
  jam_rapat: 'jam_rapat',
  jenis_rapat_id: 'jenis_rapat_id',
  jenis_rapat: 'jenis_rapat',
  agenda_rapat: 'agenda_rapat',
  tempat_rapat: 'tempat_rapat',
  alasan_ditunda: 'alasan_ditunda',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_ref_akad_syariahScalarFieldEnum = {
  perkara_id: 'perkara_id',
  ref_id: 'ref_id',
  akad_sekunder: 'akad_sekunder',
  putusan: 'putusan'
};

exports.Prisma.Perkara_ref_bidang_ekonomi_syariahScalarFieldEnum = {
  perkara_id: 'perkara_id',
  ref_id: 'ref_id'
};

exports.Prisma.Perkara_rehabilitasiScalarFieldEnum = {
  id: 'id',
  nomor_urut_register: 'nomor_urut_register',
  tanggal_permohonan: 'tanggal_permohonan',
  alasan_permohonan: 'alasan_permohonan',
  perkara_id: 'perkara_id',
  tanggal_putusan_mohon: 'tanggal_putusan_mohon',
  nomor_putusan_mohon: 'nomor_putusan_mohon',
  para_pihaik: 'para_pihaik',
  tanggal_berita_putusan: 'tanggal_berita_putusan',
  tanggal_surat_kabar: 'tanggal_surat_kabar',
  surat_kabar: 'surat_kabar',
  tanggal_perlawanan: 'tanggal_perlawanan',
  tanggal_putusan: 'tanggal_putusan',
  amar_putusan: 'amar_putusan',
  amar_putusan_dok: 'amar_putusan_dok',
  keterangan: 'keterangan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_rekonvensiScalarFieldEnum = {
  perkara_id: 'perkara_id',
  tanggal_pendaftaran: 'tanggal_pendaftaran',
  parapihak: 'parapihak',
  isi_petitum: 'isi_petitum',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_rekonvensi_detilScalarFieldEnum = {
  perkara_id: 'perkara_id',
  pihak_id: 'pihak_id',
  tanggal_pendaftaran: 'tanggal_pendaftaran',
  urutan: 'urutan',
  status_pihak_id: 'status_pihak_id',
  status_pihak_text: 'status_pihak_text',
  pihak_asal: 'pihak_asal',
  pihak_asal_text: 'pihak_asal_text',
  nama: 'nama',
  alamat: 'alamat',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_sumber_hukum_verzetScalarFieldEnum = {
  perkara_id: 'perkara_id',
  sumber_hukum_id: 'sumber_hukum_id'
};

exports.Prisma.Perkara_tindakan_hakim_pengawasScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  perkara_pasca_pailit_id: 'perkara_pasca_pailit_id',
  proses_id: 'proses_id',
  kategori_rapat: 'kategori_rapat',
  jenis_rapat_id: 'jenis_rapat_id',
  jenis_permohonan_id: 'jenis_permohonan_id',
  no_surat: 'no_surat',
  tanggal_surat: 'tanggal_surat',
  pihak_id: 'pihak_id',
  nama_pemohon: 'nama_pemohon',
  tipe_pemohon: 'tipe_pemohon',
  dokumen: 'dokumen',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_verzetScalarFieldEnum = {
  perkara_id: 'perkara_id',
  tanggal_pendaftaran_verzet: 'tanggal_pendaftaran_verzet',
  tanggal_surat: 'tanggal_surat',
  penetapan_majelis_hakim: 'penetapan_majelis_hakim',
  majelis_hakim_id: 'majelis_hakim_id',
  majelis_hakim_nama: 'majelis_hakim_nama',
  majelis_hakim_text: 'majelis_hakim_text',
  penetapan_panitera_pengganti: 'penetapan_panitera_pengganti',
  panitera_pengganti_id: 'panitera_pengganti_id',
  panitera_pengganti_text: 'panitera_pengganti_text',
  penetapan_jurusita: 'penetapan_jurusita',
  jurusita_id: 'jurusita_id',
  jurusita_text: 'jurusita_text',
  sidang_id: 'sidang_id',
  tanggal_penetapan_sidang_verzet: 'tanggal_penetapan_sidang_verzet',
  tanggal_sidang_pertama_verzet: 'tanggal_sidang_pertama_verzet',
  putusan_verzet: 'putusan_verzet',
  status_putusan_verzet_id: 'status_putusan_verzet_id',
  status_putusan_verzet_text: 'status_putusan_verzet_text',
  sumber_hukum_id: 'sumber_hukum_id',
  putusan_verstek: 'putusan_verstek',
  amar_putusan_verzet: 'amar_putusan_verzet',
  amar_putusan_verzet_dok: 'amar_putusan_verzet_dok',
  pemberitahuan_putusan: 'pemberitahuan_putusan',
  pemberitahuan_putusan_verzet: 'pemberitahuan_putusan_verzet',
  pemberitahuan_putusan_verzet_pihak1: 'pemberitahuan_putusan_verzet_pihak1',
  pemberitahuan_putusan_verzet_pihak2: 'pemberitahuan_putusan_verzet_pihak2',
  tanggal_minutasi_verzet: 'tanggal_minutasi_verzet',
  catatan_putusan_verzet: 'catatan_putusan_verzet',
  tanggal_bht: 'tanggal_bht',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Perkara_wakafScalarFieldEnum = {
  perkara_id: 'perkara_id',
  objek_wakaf_id: 'objek_wakaf_id',
  nama: 'nama'
};

exports.Prisma.PerkarabiayawebScalarFieldEnum = {
  ID: 'ID',
  IDPerkara: 'IDPerkara',
  IDGeneral: 'IDGeneral',
  IDTahapan: 'IDTahapan',
  jenisTransaksi: 'jenisTransaksi',
  tglTransaksi: 'tglTransaksi',
  uraian: 'uraian',
  nominal: 'nominal',
  keterangan: 'keterangan'
};

exports.Prisma.PerkaraeksekusihtwebScalarFieldEnum = {
  IDHT: 'IDHT',
  nomorperkaraPN: 'nomorperkaraPN',
  putusanPn: 'putusanPn',
  nomorPerkaraBanding: 'nomorPerkaraBanding',
  putusanBanding: 'putusanBanding',
  nomorPerkaraKasasi: 'nomorPerkaraKasasi',
  putusanKasasi: 'putusanKasasi',
  nomorPerkaraPK: 'nomorPerkaraPK',
  putusanPK: 'putusanPK',
  eksekusiPutusan: 'eksekusiPutusan',
  eksekusiNomorPerkara: 'eksekusiNomorPerkara',
  eksekusiAmarPutusan: 'eksekusiAmarPutusan',
  pihakPemohonEksekusi: 'pihakPemohonEksekusi',
  permohonanEksekusi: 'permohonanEksekusi',
  pemohonEksekusi: 'pemohonEksekusi',
  paraPihak: 'paraPihak',
  PenetapanTeguranEksekusi: 'PenetapanTeguranEksekusi',
  nomorPenetapanTeguranEksekusi: 'nomorPenetapanTeguranEksekusi',
  pelaksanaanTeguranEksekusi: 'pelaksanaanTeguranEksekusi',
  penetapanSitaEKsekusi: 'penetapanSitaEKsekusi',
  nomorPenetapanSitaEksekusi: 'nomorPenetapanSitaEksekusi',
  pelaksanaanSitaEksekusi: 'pelaksanaanSitaEksekusi',
  jurusitaNama: 'jurusitaNama',
  penetapanPerintahEksekusiLelang: 'penetapanPerintahEksekusiLelang',
  pelaksanaanEksekusiLelang: 'pelaksanaanEksekusiLelang',
  penyerahanHasilLelang: 'penyerahanHasilLelang',
  penetapanPerintahEksekusiRill: 'penetapanPerintahEksekusiRill',
  pelaksanaanEksekusiRill: 'pelaksanaanEksekusiRill',
  penetapanNonEksekusi: 'penetapanNonEksekusi',
  alasanEksekusi: 'alasanEksekusi',
  catatanEksekusi: 'catatanEksekusi',
  prodeoEksekusi: 'prodeoEksekusi',
  statusEksekusiText: 'statusEksekusiText',
  jenisHTText: 'jenisHTText',
  tglSertifikat: 'tglSertifikat',
  noSertifikat: 'noSertifikat'
};

exports.Prisma.PerkarajunctowebScalarFieldEnum = {
  IDPerkaraPailit: 'IDPerkaraPailit',
  IDPerkara: 'IDPerkara',
  IDAlurPerkara: 'IDAlurPerkara',
  urutan: 'urutan'
};

exports.Prisma.PerkarakeberatanwebScalarFieldEnum = {
  IDPerkara: 'IDPerkara',
  tglPendaftaran: 'tglPendaftaran',
  pemohon: 'pemohon',
  tglPenetapanMajelis: 'tglPenetapanMajelis',
  majelisHakim: 'majelisHakim',
  tglPenetapanPP: 'tglPenetapanPP',
  paniteraPengganti: 'paniteraPengganti',
  tglPenetapanJurusita: 'tglPenetapanJurusita',
  jurusita: 'jurusita',
  tglPutusan: 'tglPutusan',
  statusPutusan: 'statusPutusan',
  amar: 'amar',
  jenisPemberitahuan: 'jenisPemberitahuan',
  tglPemberitahuan: 'tglPemberitahuan',
  tglPemberitahuanPihakPertama: 'tglPemberitahuanPihakPertama',
  tglPemberitahuanPihakKedua: 'tglPemberitahuanPihakKedua',
  penerimaanMemori: 'penerimaanMemori',
  penyerahanMemori: 'penyerahanMemori',
  penerimaanKontra: 'penerimaanKontra',
  penyerahanKontra: 'penyerahanKontra'
};

exports.Prisma.PerkaralalulintaswebScalarFieldEnum = {
  IDPerkara: 'IDPerkara',
  ditilangOleh: 'ditilangOleh',
  nomorTilang: 'nomorTilang',
  jenisKendaraan: 'jenisKendaraan',
  nomorPolisi: 'nomorPolisi',
  buktiTilang: 'buktiTilang',
  tanggalPenindakan: 'tanggalPenindakan',
  jenisTilang: 'jenisTilang',
  nomorPembayaran: 'nomorPembayaran'
};

exports.Prisma.PerkaralaporankuratorwebScalarFieldEnum = {
  ID: 'ID',
  IDPerkara: 'IDPerkara',
  IDUrutan: 'IDUrutan',
  IDPerkaraPascaPailit: 'IDPerkaraPascaPailit',
  noLaporan: 'noLaporan',
  tglLaporan: 'tglLaporan',
  deskripsi: 'deskripsi',
  IDJenislaporan: 'IDJenislaporan',
  jenisLaporan: 'jenisLaporan'
};

exports.Prisma.PerkaramatrawebScalarFieldEnum = {
  IDPerkara: 'IDPerkara',
  matra: 'matra',
  asalBerkas: 'asalBerkas',
  tglKejadian: 'tglKejadian',
  tempatKejadian: 'tempatKejadian',
  tglSkeppera: 'tglSkeppera',
  noSkeppera: 'noSkeppera',
  pejabatSkeppera: 'pejabatSkeppera',
  tglSuratDakwaan: 'tglSuratDakwaan',
  noSuratDakwaan: 'noSuratDakwaan',
  penyidik: 'penyidik',
  noBAPPenyidik: 'noBAPPenyidik',
  tglPenyidik: 'tglPenyidik'
};

exports.Prisma.PerkarapascapailitwebScalarFieldEnum = {
  ID: 'ID',
  IDPerkara: 'IDPerkara',
  IDAlurPerkaraInduk: 'IDAlurPerkaraInduk',
  urutan: 'urutan'
};

exports.Prisma.PerkarapengumumankepailitanwebScalarFieldEnum = {
  ID: 'ID',
  IDPerkara: 'IDPerkara',
  tanggal: 'tanggal',
  nomor: 'nomor',
  perihal: 'perihal'
};

exports.Prisma.PerkarapenuntutanwebScalarFieldEnum = {
  IDPerkara: 'IDPerkara',
  tglPenuntutan: 'tglPenuntutan',
  isiTuntutan: 'isiTuntutan'
};

exports.Prisma.PerkarapihaktersangkawebScalarFieldEnum = {
  ID: 'ID',
  IDPerkara: 'IDPerkara',
  urutan: 'urutan',
  IDPihak: 'IDPihak',
  IDJenisPihak: 'IDJenisPihak',
  nama: 'nama',
  kesatuan: 'kesatuan'
};

exports.Prisma.PerkaraproseswebScalarFieldEnum = {
  IDPerkara: 'IDPerkara',
  IDGeneral: 'IDGeneral',
  IDTahapan: 'IDTahapan',
  tahapan: 'tahapan',
  IDProses: 'IDProses',
  proses: 'proses',
  urutan: 'urutan',
  tanggal: 'tanggal'
};

exports.Prisma.PerkaraputusanpkpusementarawebScalarFieldEnum = {
  IDPerkara: 'IDPerkara',
  tglPutusan: 'tglPutusan',
  amar: 'amar',
  pemberitahuanPutPihak1: 'pemberitahuanPutPihak1',
  pemberitahuanPutPihak2: 'pemberitahuanPutPihak2',
  pemberitahuanPutPihak3: 'pemberitahuanPutPihak3',
  pemberitahuanPutPihak4: 'pemberitahuanPutPihak4'
};

exports.Prisma.PerkaraputusanpkputetapwebScalarFieldEnum = {
  ID: 'ID',
  IDPerkara: 'IDPerkara',
  urutan: 'urutan',
  tglPutusan: 'tglPutusan',
  amar: 'amar',
  pemberitahuanPutPihak1: 'pemberitahuanPutPihak1',
  pemberitahuanPutPihak2: 'pemberitahuanPutPihak2',
  pemberitahuanPutPihak3: 'pemberitahuanPutPihak3',
  pemberitahuanPutPihak4: 'pemberitahuanPutPihak4'
};

exports.Prisma.PerkaraputusanterdakwawebScalarFieldEnum = {
  ID: 'ID',
  IDPerkara: 'IDPerkara',
  IDStatusPutusan: 'IDStatusPutusan',
  nama: 'nama',
  durasiNominal: 'durasiNominal',
  tglPutusan: 'tglPutusan',
  statusPutusan: 'statusPutusan',
  satuan: 'satuan'
};

exports.Prisma.PerkaraputusanwebScalarFieldEnum = {
  IDPerkara: 'IDPerkara',
  tglPutusan: 'tglPutusan',
  isVerstek: 'isVerstek',
  sumberHukum: 'sumberHukum',
  IDStatusPutusan: 'IDStatusPutusan',
  statusPutusan: 'statusPutusan',
  tglCabut: 'tglCabut',
  tglGugur: 'tglGugur',
  amar: 'amar',
  tglPenetapanHakimPengawas: 'tglPenetapanHakimPengawas',
  noPenetapanHakimPengawas: 'noPenetapanHakimPengawas',
  IDHakimPengawas: 'IDHakimPengawas',
  IDPengurus: 'IDPengurus',
  tglPenetapanKreditur: 'tglPenetapanKreditur',
  panitiaKreditur: 'panitiaKreditur',
  IDKurator: 'IDKurator',
  tglMediaBerita: 'tglMediaBerita',
  namaMediaBerita: 'namaMediaBerita',
  tglSuratKabar: 'tglSuratKabar',
  namaSuratKabar: 'namaSuratKabar',
  tglMinutasi: 'tglMinutasi',
  TglKirimSalinanPenyidik: 'TglKirimSalinanPenyidik',
  keterangan: 'keterangan',
  nilaiGantiRugi: 'nilaiGantiRugi'
};

exports.Prisma.PerkararapatpascakepailitanwebScalarFieldEnum = {
  ID: 'ID',
  IDPerkaraPascaPailit: 'IDPerkaraPascaPailit',
  kategoriRapat: 'kategoriRapat',
  urutan: 'urutan',
  tglRapat: 'tglRapat',
  jamRapat: 'jamRapat',
  IDjenisRapat: 'IDjenisRapat',
  jenisRapat: 'jenisRapat',
  agendaRapat: 'agendaRapat',
  tempatRapat: 'tempatRapat',
  alasanDitunda: 'alasanDitunda'
};

exports.Prisma.PerkararapatpkpuwebScalarFieldEnum = {
  ID: 'ID',
  IDPerkara: 'IDPerkara',
  kategoriRapat: 'kategoriRapat',
  urutan: 'urutan',
  tglRapat: 'tglRapat',
  jamRapat: 'jamRapat',
  IDjenisRapat: 'IDjenisRapat',
  jenisRapat: 'jenisRapat',
  agendaRapat: 'agendaRapat',
  tempatRapat: 'tempatRapat',
  alasanDitunda: 'alasanDitunda'
};

exports.Prisma.PerkarawekppuwebScalarFieldEnum = {
  IDPerkara: 'IDPerkara',
  tgl_surat_kppu: 'tgl_surat_kppu',
  no_surat_kppu: 'no_surat_kppu',
  tgl_surat_ma: 'tgl_surat_ma',
  no_surat_ma: 'no_surat_ma',
  penunjukan_pn: 'penunjukan_pn'
};

exports.Prisma.PesanScalarFieldEnum = {
  id: 'id',
  parent_id: 'parent_id',
  dari_userid: 'dari_userid',
  ke_userid: 'ke_userid',
  subjek: 'subjek',
  isi_pesan: 'isi_pesan',
  tanggal_kirim: 'tanggal_kirim',
  status: 'status',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_tanggal: 'diperbaharui_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh'
};

exports.Prisma.Pesan_tujuanScalarFieldEnum = {
  pesan_id: 'pesan_id',
  ke_userid: 'ke_userid',
  status: 'status',
  tanggal_kirim: 'tanggal_kirim',
  tanggal_terima: 'tanggal_terima',
  tanggal_balas: 'tanggal_balas',
  tanggal_hapus: 'tanggal_hapus'
};

exports.Prisma.PihakScalarFieldEnum = {
  id: 'id',
  jenis_pihak_id: 'jenis_pihak_id',
  jenis_indentitas: 'jenis_indentitas',
  nomor_indentitas: 'nomor_indentitas',
  nama: 'nama',
  tempat_lahir: 'tempat_lahir',
  tanggal_lahir: 'tanggal_lahir',
  jenis_kelamin: 'jenis_kelamin',
  golongan_darah: 'golongan_darah',
  alamat: 'alamat',
  rtrw: 'rtrw',
  kelurahan: 'kelurahan',
  kecamatan: 'kecamatan',
  kabupaten_id: 'kabupaten_id',
  kabupaten: 'kabupaten',
  propinsi_id: 'propinsi_id',
  propinsi: 'propinsi',
  telepon: 'telepon',
  fax: 'fax',
  email: 'email',
  agama_id: 'agama_id',
  agama_nama: 'agama_nama',
  status_kawin: 'status_kawin',
  pekerjaan: 'pekerjaan',
  pendidikan_id: 'pendidikan_id',
  pendidikan: 'pendidikan',
  warga_negara_id: 'warga_negara_id',
  warga_negara: 'warga_negara',
  nama_ayah: 'nama_ayah',
  nama_ibu: 'nama_ibu',
  keterangan: 'keterangan',
  foto: 'foto',
  difabel: 'difabel',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Pihak_fotoScalarFieldEnum = {
  pihak_id: 'pihak_id',
  nama_file: 'nama_file',
  lokasi_file: 'lokasi_file',
  ukuran_file: 'ukuran_file',
  ektensi_file: 'ektensi_file',
  content: 'content'
};

exports.Prisma.Pihak_jaksaScalarFieldEnum = {
  pihak_id: 'pihak_id',
  NIP: 'NIP',
  kejaksaan: 'kejaksaan',
  alamat_kantor: 'alamat_kantor',
  pangkat: 'pangkat',
  jabatan: 'jabatan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal',
  kesatuan: 'kesatuan'
};

exports.Prisma.Pihak_pembimbing_masyarakatScalarFieldEnum = {
  pihak_id: 'pihak_id',
  kode_satker: 'kode_satker',
  instansi: 'instansi',
  alamat_instansi: 'alamat_instansi',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Pihak_pengacaraScalarFieldEnum = {
  pihak_id: 'pihak_id',
  nomor_induk: 'nomor_induk',
  alamat_kantor: 'alamat_kantor',
  no_sk_menkeh: 'no_sk_menkeh',
  tanggal_sk_menkeh: 'tanggal_sk_menkeh',
  tanggal_penyumpahan_pn: 'tanggal_penyumpahan_pn',
  tanggal_penyumpahan_pt: 'tanggal_penyumpahan_pt',
  pangkat: 'pangkat',
  jabatan: 'jabatan',
  kesatuan: 'kesatuan'
};

exports.Prisma.Pihak_penyidikScalarFieldEnum = {
  pihak_id: 'pihak_id',
  NIP: 'NIP',
  kepolisian: 'kepolisian',
  alamat_kantor: 'alamat_kantor',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.PihakintervensiwebScalarFieldEnum = {
  ID: 'ID',
  IDPerkara: 'IDPerkara',
  nama: 'nama',
  jenisIntervensi: 'jenisIntervensi',
  tglIzinIntervensi: 'tglIzinIntervensi',
  tergabungKePihak: 'tergabungKePihak',
  petitum: 'petitum'
};

exports.Prisma.PihakwebScalarFieldEnum = {
  pihak_ke: 'pihak_ke',
  ID: 'ID',
  IDPerkara: 'IDPerkara',
  nama: 'nama',
  umur: 'umur',
  jenisKelamin: 'jenisKelamin',
  urutan: 'urutan'
};

exports.Prisma.PkdetilwebScalarFieldEnum = {
  ID: 'ID',
  IDPerkara: 'IDPerkara',
  nama: 'nama',
  IDStatusPihak: 'IDStatusPihak',
  statusPihak: 'statusPihak',
  pihak_nama: 'pihak_nama',
  pihak_diwakili: 'pihak_diwakili',
  pemohon_nama: 'pemohon_nama',
  tglPermohonan: 'tglPermohonan',
  tglPemberitahuanPermohonan: 'tglPemberitahuanPermohonan',
  tglPenerimaanMemori: 'tglPenerimaanMemori',
  tglPenyerahanMemori: 'tglPenyerahanMemori',
  tglPenerimaanKontra: 'tglPenerimaanKontra',
  tglPenyerahanKontra: 'tglPenyerahanKontra',
  tglPemberitahuanInzage: 'tglPemberitahuanInzage',
  tglPelaksanaanInzage: 'tglPelaksanaanInzage',
  tglPemberitahuanPutusan: 'tglPemberitahuanPutusan',
  tglCabut: 'tglCabut'
};

exports.Prisma.PkwebScalarFieldEnum = {
  IDPerkara: 'IDPerkara',
  noPerkarapk: 'noPerkarapk',
  tglPermohonan: 'tglPermohonan',
  pemohon: 'pemohon',
  tglPemberitahuanPermohonan: 'tglPemberitahuanPermohonan',
  tglPenerimaanMemori: 'tglPenerimaanMemori',
  tglPenyerahanMemori: 'tglPenyerahanMemori',
  tglPenerimaanKontra: 'tglPenerimaanKontra',
  tglPenyerahanKontra: 'tglPenyerahanKontra',
  tglPemberitahuanInzagePihak1: 'tglPemberitahuanInzagePihak1',
  tglPemberitahuanInzagePihak2: 'tglPemberitahuanInzagePihak2',
  tglPelaksanaanInzagePihak1: 'tglPelaksanaanInzagePihak1',
  tglPelaksanaanInzagePihak2: 'tglPelaksanaanInzagePihak2',
  tglPengirimanBerkas: 'tglPengirimanBerkas',
  nomorSuratPengiriman: 'nomorSuratPengiriman',
  tglPenerimaanKembaliBerkas: 'tglPenerimaanKembaliBerkas',
  majelisHakim: 'majelisHakim',
  paniteraPengganti: 'paniteraPengganti',
  tglPutusan: 'tglPutusan',
  noPutusanPK: 'noPutusanPK',
  amarPutusan: 'amarPutusan',
  tglMinutasi: 'tglMinutasi',
  tglPemberitahuanPutusanPihak1: 'tglPemberitahuanPutusanPihak1',
  tglPemberitahuanPutusanPihak2: 'tglPemberitahuanPutusanPihak2'
};

exports.Prisma.PpwebScalarFieldEnum = {
  IDPP: 'IDPP',
  IDPerkara: 'IDPerkara',
  IDTahapan: 'IDTahapan',
  tglPenetapan: 'tglPenetapan',
  nama: 'nama',
  aktif: 'aktif'
};

exports.Prisma.PropinsiScalarFieldEnum = {
  id: 'id',
  kode: 'kode',
  nama: 'nama',
  keterangan: 'keterangan',
  aktif: 'aktif',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.ProsesScalarFieldEnum = {
  id: 'id',
  tahapan_id: 'tahapan_id',
  kode: 'kode',
  nama: 'nama',
  keterangan: 'keterangan',
  nama_tabel: 'nama_tabel',
  nama_kolom: 'nama_kolom',
  status: 'status',
  aktif: 'aktif',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Proses_alur_perkaraScalarFieldEnum = {
  id: 'id',
  alur_perkara_id: 'alur_perkara_id',
  tahapan_id: 'tahapan_id',
  tahapan_nama: 'tahapan_nama',
  proses_id: 'proses_id',
  proses_nama: 'proses_nama',
  batas_waktu: 'batas_waktu',
  satuan: 'satuan',
  dari_proses_id: 'dari_proses_id',
  nama_tabel_dari: 'nama_tabel_dari',
  nama_kolom_dari: 'nama_kolom_dari',
  nama_tabel_ke: 'nama_tabel_ke',
  nama_kolom_ke: 'nama_kolom_ke',
  aktif: 'aktif',
  reminder: 'reminder',
  keterangan: 'keterangan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.ProsesalurperkarawebScalarFieldEnum = {
  ID: 'ID',
  IDTahapan: 'IDTahapan',
  IDAlurPerkara: 'IDAlurPerkara',
  IDProses: 'IDProses',
  nama: 'nama'
};

exports.Prisma.ProseswebScalarFieldEnum = {
  ID: 'ID',
  idalurperkara: 'idalurperkara',
  nama: 'nama'
};

exports.Prisma.PutusanpemberitahuanwebScalarFieldEnum = {
  IDPerkara: 'IDPerkara',
  PutusanAkhir: 'PutusanAkhir',
  pihakke: 'pihakke',
  IDPihak: 'IDPihak',
  urutan: 'urutan',
  nama: 'nama',
  tglPemberitahuan: 'tglPemberitahuan',
  tglMenerimaPutusan: 'tglMenerimaPutusan',
  tglKirimSalinan: 'tglKirimSalinan'
};

exports.Prisma.PutusanselawebScalarFieldEnum = {
  IDPerkara: 'IDPerkara',
  tglPutusanSela: 'tglPutusanSela',
  amarSela: 'amarSela',
  tglMinutasi: 'tglMinutasi',
  tglBerita: 'tglBerita',
  namaMedia: 'namaMedia',
  tglSuratKabar: 'tglSuratKabar',
  namaSuratKabar: 'namaSuratKabar',
  tglPenetapanHakim: 'tglPenetapanHakim',
  hakimPengawas: 'hakimPengawas',
  pengurusNama: 'pengurusNama',
  tglPerpanjangan: 'tglPerpanjangan',
  mulaiPerpanjangan: 'mulaiPerpanjangan',
  sampaiPerpanjangan: 'sampaiPerpanjangan',
  penetapanSitaJaminan: 'penetapanSitaJaminan',
  pelaksanaanSitaJaminan: 'pelaksanaanSitaJaminan',
  tglPemberitahuanPihak1: 'tglPemberitahuanPihak1',
  tglPemberitahuanPihak2: 'tglPemberitahuanPihak2',
  tglPemberitahuanPihak3: 'tglPemberitahuanPihak3',
  keterangan: 'keterangan'
};

exports.Prisma.Ref_akad_syariahScalarFieldEnum = {
  id: 'id',
  nama: 'nama'
};

exports.Prisma.Ref_asal_usul_anakScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  aktif: 'aktif'
};

exports.Prisma.Ref_batal_kawinScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  aktif: 'aktif'
};

exports.Prisma.Ref_bidang_ekonomi_syariahScalarFieldEnum = {
  id: 'id',
  nama: 'nama'
};

exports.Prisma.Ref_dispensasi_kawinScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  aktif: 'aktif'
};

exports.Prisma.Ref_isbat_nikahScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  aktif: 'aktif'
};

exports.Prisma.Ref_izin_poligamiScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  aktif: 'aktif'
};

exports.Prisma.Ref_jenis_alasanScalarFieldEnum = {
  id: 'id',
  jenis_perkara_id: 'jenis_perkara_id',
  tabel: 'tabel',
  aktif: 'aktif'
};

exports.Prisma.Ref_kabupatenScalarFieldEnum = {
  id_kabupaten: 'id_kabupaten',
  id_provinsi: 'id_provinsi',
  nama_kabupaten: 'nama_kabupaten',
  id_jenis: 'id_jenis',
  kode_satker: 'kode_satker',
  alias: 'alias'
};

exports.Prisma.Ref_kecamatanScalarFieldEnum = {
  id_kecamatan: 'id_kecamatan',
  id_kabupaten: 'id_kabupaten',
  nama_kecamatan: 'nama_kecamatan'
};

exports.Prisma.Ref_kuaScalarFieldEnum = {
  id: 'id',
  kode_kua: 'kode_kua',
  nama_kua: 'nama_kua',
  id_provinsi: 'id_provinsi',
  id_kabupaten: 'id_kabupaten',
  id_kecamatan: 'id_kecamatan',
  alamat: 'alamat',
  kode_satker: 'kode_satker',
  is_kbri: 'is_kbri',
  wilayah_kecamatan: 'wilayah_kecamatan'
};

exports.Prisma.Ref_objek_wakafScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  aktif: 'aktif'
};

exports.Prisma.Ref_pekerjaanScalarFieldEnum = {
  id: 'id',
  nama: 'nama'
};

exports.Prisma.Ref_pelaksanaan_eksekusiScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  aktif: 'aktif'
};

exports.Prisma.Ref_pengesahan_anakScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  aktif: 'aktif'
};

exports.Prisma.Ref_penguasaan_anakScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  aktif: 'aktif'
};

exports.Prisma.Ref_provinsiScalarFieldEnum = {
  id_provinsi: 'id_provinsi',
  nama_provinsi: 'nama_provinsi'
};

exports.Prisma.Ref_tingkat_pendidikanScalarFieldEnum = {
  id: 'id',
  kode: 'kode',
  nama: 'nama',
  keterangan: 'keterangan',
  aktif: 'aktif',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Referensi_alasan_eksekusi_tidak_dilaksanakanScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  keterangan: 'keterangan',
  jenis_eksekusi_id: 'jenis_eksekusi_id',
  jenis_pengadilan_id: 'jenis_pengadilan_id',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Referensi_amar_putusanScalarFieldEnum = {
  id: 'id',
  jenis_perkara_id: 'jenis_perkara_id',
  amar: 'amar',
  keterangan: 'keterangan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Referensi_jenis_kesepakatan_diversiScalarFieldEnum = {
  kode: 'kode',
  nama: 'nama'
};

exports.Prisma.Referensi_kolom_data_templateScalarFieldEnum = {
  id: 'id',
  nama_kolom: 'nama_kolom'
};

exports.Prisma.Referensi_pengakhiran_jenis_alasanScalarFieldEnum = {
  id: 'id',
  alasan: 'alasan',
  urutan: 'urutan',
  aktif: 'aktif',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal'
};

exports.Prisma.Referensi_pengakhiran_jenis_buktiScalarFieldEnum = {
  id: 'id',
  bukti: 'bukti',
  urutan: 'urutan',
  aktif: 'aktif',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal'
};

exports.Prisma.Referensi_tindakan_hakim_pengawasScalarFieldEnum = {
  id: 'id',
  uraian: 'uraian',
  kategori: 'kategori',
  aktif: 'aktif',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.RekonvensiwebScalarFieldEnum = {
  IDPerkara: 'IDPerkara',
  tglPendaftaran: 'tglPendaftaran',
  parapihak: 'parapihak',
  petitum: 'petitum'
};

exports.Prisma.RespondenScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  umur: 'umur',
  domisili: 'domisili',
  jenis_kelamin: 'jenis_kelamin',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Ruangan_sidangScalarFieldEnum = {
  id: 'id',
  kode: 'kode',
  nama: 'nama',
  keterangan: 'keterangan',
  aktif: 'aktif',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Saldo_awalScalarFieldEnum = {
  saldo_id: 'saldo_id',
  tahun_saldo: 'tahun_saldo',
  saldo_awal_tunai: 'saldo_awal_tunai',
  saldo_awal_bank: 'saldo_awal_bank',
  jumlah_saldo_awal: 'jumlah_saldo_awal',
  keterangan: 'keterangan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Saldo_awal_copyScalarFieldEnum = {
  alur_perkara_id: 'alur_perkara_id',
  tanggal_saldo_awal: 'tanggal_saldo_awal',
  jumlah_saldo_awal: 'jumlah_saldo_awal',
  keterangan: 'keterangan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.SatkerScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  nama_singkat: 'nama_singkat',
  tabel: 'tabel',
  kode: 'kode',
  logo_pa: 'logo_pa',
  urutan: 'urutan',
  namapa: 'namapa'
};

exports.Prisma.SidangpertamawebScalarFieldEnum = {
  IDPerkara: 'IDPerkara',
  tglPenetapan: 'tglPenetapan',
  tglSidangPertama: 'tglSidangPertama'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.Sppt_inboundScalarFieldEnum = {
  tx_id: 'tx_id',
  tx_type: 'tx_type',
  kode_proses: 'kode_proses',
  kode_satker_pengirim: 'kode_satker_pengirim',
  read_status: 'read_status',
  tx_date: 'tx_date'
};

exports.Prisma.Sppt_jenis_prosesScalarFieldEnum = {
  jenis_proses_kode: 'jenis_proses_kode',
  jenis_proses_nama: 'jenis_proses_nama'
};

exports.Prisma.Sppt_ref_kejaksaanScalarFieldEnum = {
  id: 'id',
  status_penuntut: 'status_penuntut',
  kode: 'kode',
  nama: 'nama',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal'
};

exports.Prisma.Sppt_ref_penyidikScalarFieldEnum = {
  id: 'id',
  kode: 'kode',
  nama: 'nama',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal'
};

exports.Prisma.Sppt_ref_prosesScalarFieldEnum = {
  kode_proses_id: 'kode_proses_id',
  kode_proses: 'kode_proses',
  nama_proses: 'nama_proses',
  kode_jenis_dokumen: 'kode_jenis_dokumen',
  nama_jenis_dokumen: 'nama_jenis_dokumen'
};

exports.Prisma.Sppt_ref_response_messageScalarFieldEnum = {
  response_message_id: 'response_message_id',
  response_message: 'response_message',
  response_message_detail: 'response_message_detail',
  response_message_source: 'response_message_source',
  response_message_translate: 'response_message_translate',
  timestamp: 'timestamp'
};

exports.Prisma.Sppt_ref_satkerScalarFieldEnum = {
  kode: 'kode',
  nama: 'nama'
};

exports.Prisma.Sppt_send_dataScalarFieldEnum = {
  perkara_id: 'perkara_id',
  pihak_id: 'pihak_id',
  tx_id: 'tx_id',
  tx_type: 'tx_type',
  kode_proses: 'kode_proses',
  status: 'status',
  sppt_response_message_id: 'sppt_response_message_id',
  sppt_send_timestamp: 'sppt_send_timestamp'
};

exports.Prisma.Status_penahananScalarFieldEnum = {
  id: 'id',
  kode: 'kode',
  nama: 'nama',
  keterangan: 'keterangan',
  aktif: 'aktif',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Status_perkawinanScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Status_pihakScalarFieldEnum = {
  alur_perkara_id: 'alur_perkara_id',
  tahapan_id: 'tahapan_id',
  pihak_ke: 'pihak_ke',
  kode: 'kode',
  nama: 'nama',
  keterangan: 'keterangan',
  aktif: 'aktif',
  urutan: 'urutan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Status_putusanScalarFieldEnum = {
  id: 'id',
  jenis_perkara_id: 'jenis_perkara_id',
  kode: 'kode',
  nama: 'nama',
  keterangan: 'keterangan',
  aktif: 'aktif',
  urutan: 'urutan',
  satuan: 'satuan',
  jenis_pengadilan: 'jenis_pengadilan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Status_putusan_bandingScalarFieldEnum = {
  id: 'id',
  jenis_perkara_id: 'jenis_perkara_id',
  kode: 'kode',
  nama: 'nama',
  keterangan: 'keterangan',
  aktif: 'aktif',
  urutan: 'urutan',
  satuan: 'satuan',
  jenis_pengadilan: 'jenis_pengadilan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.StatuspihakwebScalarFieldEnum = {
  IDAlurPerkara: 'IDAlurPerkara',
  IDTahapan: 'IDTahapan',
  PihakKe: 'PihakKe',
  nama: 'nama',
  aktif: 'aktif'
};

exports.Prisma.StatusputusanwebScalarFieldEnum = {
  id: 'id',
  IDJenisPerkara: 'IDJenisPerkara',
  nama: 'nama',
  jenis_pengadilan: 'jenis_pengadilan'
};

exports.Prisma.Sumber_hukumScalarFieldEnum = {
  id: 'id',
  kode: 'kode',
  nama: 'nama',
  keterangan: 'keterangan',
  jenis_pengadilan: 'jenis_pengadilan',
  aktif: 'aktif',
  urutan: 'urutan',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.SumberhukumwebScalarFieldEnum = {
  ID: 'ID',
  nama: 'nama',
  IDJenispengadilan: 'IDJenispengadilan'
};

exports.Prisma.Sys_audit_configScalarFieldEnum = {
  table_name: 'table_name',
  audit_option: 'audit_option',
  description: 'description'
};

exports.Prisma.Sys_audittrailScalarFieldEnum = {
  id: 'id',
  datetime: 'datetime',
  ipaddress: 'ipaddress',
  username: 'username',
  tablename: 'tablename',
  formname: 'formname',
  action: 'action',
  title: 'title',
  description: 'description'
};

exports.Prisma.Sys_backupScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  jam: 'jam',
  filename: 'filename',
  type: 'type',
  location: 'location',
  timestamp_backup: 'timestamp_backup'
};

exports.Prisma.Sys_configScalarFieldEnum = {
  id: 'id',
  category: 'category',
  name: 'name',
  value: 'value',
  ordering: 'ordering'
};

exports.Prisma.Sys_day_nameScalarFieldEnum = {
  id: 'id',
  name_en: 'name_en',
  name_id: 'name_id'
};

exports.Prisma.Sys_form_ruleScalarFieldEnum = {
  formname: 'formname',
  ruleid: 'ruleid'
};

exports.Prisma.Sys_formsScalarFieldEnum = {
  name: 'name',
  description: 'description'
};

exports.Prisma.Sys_group_ruleScalarFieldEnum = {
  groupid: 'groupid',
  ruleid: 'ruleid'
};

exports.Prisma.Sys_groupsScalarFieldEnum = {
  groupid: 'groupid',
  parent_id: 'parent_id',
  level: 'level',
  lft: 'lft',
  rgt: 'rgt',
  name: 'name',
  description: 'description',
  enable: 'enable',
  ordering: 'ordering',
  lock_by: 'lock_by',
  lock_on: 'lock_on',
  created_by: 'created_by',
  created_on: 'created_on',
  modified_by: 'modified_by',
  modified_on: 'modified_on'
};

exports.Prisma.Sys_langguageScalarFieldEnum = {
  id: 'id',
  jenis_pengadilan: 'jenis_pengadilan',
  nama: 'nama',
  translate: 'translate'
};

exports.Prisma.Sys_menu_ruleScalarFieldEnum = {
  menuid: 'menuid',
  ruleid: 'ruleid'
};

exports.Prisma.Sys_menu_typeScalarFieldEnum = {
  id: 'id',
  menutype: 'menutype',
  title: 'title',
  description: 'description'
};

exports.Prisma.Sys_menusScalarFieldEnum = {
  id: 'id',
  menutype: 'menutype',
  parent_id: 'parent_id',
  level: 'level',
  title: 'title',
  link: 'link',
  params: 'params',
  published: 'published',
  ordering: 'ordering'
};

exports.Prisma.Sys_month_nameScalarFieldEnum = {
  id: 'id',
  name_en: 'name_en',
  name_id: 'name_id'
};

exports.Prisma.Sys_queriesScalarFieldEnum = {
  id: 'id',
  params: 'params'
};

exports.Prisma.Sys_recordlock_configScalarFieldEnum = {
  table_name: 'table_name',
  lock_option: 'lock_option',
  lock_time: 'lock_time',
  description: 'description'
};

exports.Prisma.Sys_rulesScalarFieldEnum = {
  id: 'id',
  parent_id: 'parent_id',
  code: 'code',
  name: 'name',
  description: 'description',
  published: 'published',
  ordering: 'ordering',
  level: 'level',
  lft: 'lft',
  rgt: 'rgt'
};

exports.Prisma.Sys_sinkronisasiScalarFieldEnum = {
  id: 'id',
  time_stamp: 'time_stamp'
};

exports.Prisma.Sys_time_zoneScalarFieldEnum = {
  zone: 'zone',
  time_offset: 'time_offset'
};

exports.Prisma.Sys_user_groupScalarFieldEnum = {
  userid: 'userid',
  groupid: 'groupid'
};

exports.Prisma.Sys_user_onlineScalarFieldEnum = {
  session_id: 'session_id',
  userid: 'userid',
  host_address: 'host_address',
  login_time: 'login_time',
  user_agent: 'user_agent',
  uri: 'uri',
  current_page: 'current_page',
  last_visit: 'last_visit',
  data: 'data'
};

exports.Prisma.Sys_usersScalarFieldEnum = {
  userid: 'userid',
  fullname: 'fullname',
  username: 'username',
  password: 'password',
  old_password: 'old_password',
  email: 'email',
  alternative_email: 'alternative_email',
  allow_concurrent_login: 'allow_concurrent_login',
  has_change_password: 'has_change_password',
  enable_change_password: 'enable_change_password',
  last_change_password: 'last_change_password',
  password_expired_remainder: 'password_expired_remainder',
  attemp_count: 'attemp_count',
  attemp_time: 'attemp_time',
  user_expired: 'user_expired',
  last_login: 'last_login',
  block: 'block',
  activation: 'activation',
  code_activation: 'code_activation',
  params: 'params',
  lock_by: 'lock_by',
  lock_on: 'lock_on',
  created_by: 'created_by',
  created_on: 'created_on',
  modified_by: 'modified_by',
  modified_on: 'modified_on'
};

exports.Prisma.Tahapan_prosesScalarFieldEnum = {
  Id: 'Id',
  kode: 'kode',
  nama: 'nama',
  keterangan: 'keterangan',
  urutan: 'urutan',
  aktif: 'aktif',
  jenis_pengadilan: 'jenis_pengadilan'
};

exports.Prisma.Template_amar_putusanScalarFieldEnum = {
  id: 'id',
  alur_perkara_id: 'alur_perkara_id',
  jenis_perkara_id: 'jenis_perkara_id',
  sela: 'sela',
  nama: 'nama',
  template: 'template',
  aktif: 'aktif',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Template_amar_putusan_copyScalarFieldEnum = {
  id: 'id',
  alur_perkara_id: 'alur_perkara_id',
  jenis_perkara_id: 'jenis_perkara_id',
  sela: 'sela',
  nama: 'nama',
  template: 'template',
  aktif: 'aktif',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Template_dokumenScalarFieldEnum = {
  id: 'id',
  alur_perkara_id: 'alur_perkara_id',
  tahapan_id: 'tahapan_id',
  proses_id: 'proses_id',
  nomor: 'nomor',
  kode: 'kode',
  nama: 'nama'
};

exports.Prisma.Template_dokumen_agendaScalarFieldEnum = {
  id: 'id',
  jenis_agenda_id: 'jenis_agenda_id',
  section: 'section',
  konten_dokumen: 'konten_dokumen',
  preview: 'preview',
  urutan: 'urutan',
  type: 'type'
};

exports.Prisma.Template_dokumen_jenis_agendaScalarFieldEnum = {
  id: 'id',
  varlist: 'varlist',
  alur_perkara_id: 'alur_perkara_id',
  nama: 'nama',
  konten_dokumen: 'konten_dokumen'
};

exports.Prisma.Template_historyScalarFieldEnum = {
  id: 'id',
  alur_perkara_id: 'alur_perkara_id',
  tahapan_id: 'tahapan_id',
  proses_id: 'proses_id',
  nomor: 'nomor',
  kode: 'kode',
  tgl_download: 'tgl_download',
  userid: 'userid',
  username: 'username',
  perkara_id: 'perkara_id'
};

exports.Prisma.Template_keterangan_saksi_dScalarFieldEnum = {
  id: 'id',
  m_id: 'm_id',
  urutan_pertanyaan: 'urutan_pertanyaan',
  pertanyaan: 'pertanyaan',
  jawaban: 'jawaban',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Template_keterangan_saksi_mScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  aktif: 'aktif',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.Template_perkara_basScalarFieldEnum = {
  perkara_id: 'perkara_id',
  sidang_id: 'sidang_id',
  jenis_agenda_id: 'jenis_agenda_id',
  nama_agenda: 'nama_agenda',
  agenda_id: 'agenda_id',
  urutan: 'urutan',
  redaksi: 'redaksi',
  isian: 'isian',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal'
};

exports.Prisma.Template_perkara_bas_detil_tanya_jawabScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  sidang_id: 'sidang_id',
  jenis_agenda_id: 'jenis_agenda_id',
  urutan_sumber: 'urutan_sumber',
  urutan_penanya: 'urutan_penanya',
  urutan_pertanyaan: 'urutan_pertanyaan',
  sumber_id: 'sumber_id',
  tabel_asal_sumber: 'tabel_asal_sumber',
  pihak_ke: 'pihak_ke',
  penanya_t: 'penanya_t',
  pertanyaan_t: 'pertanyaan_t',
  jawaban_t: 'jawaban_t',
  kenal: 'kenal',
  tanggapan_terdakwa: 'tanggapan_terdakwa',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal'
};

exports.Prisma.Template_perkara_bas_penutupScalarFieldEnum = {
  perkara_id: 'perkara_id',
  sidang_id: 'sidang_id',
  agenda_id: 'agenda_id',
  redaksi: 'redaksi',
  diinput_tanggal: 'diinput_tanggal',
  diinput_oleh: 'diinput_oleh'
};

exports.Prisma.Testing_devScalarFieldEnum = {
  id: 'id',
  date: 'date',
  try_by: 'try_by',
  error_type: 'error_type',
  error_msg: 'error_msg',
  respond_msg: 'respond_msg',
  status: 'status',
  handling_by: 'handling_by',
  date_finished: 'date_finished',
  solution: 'solution',
  file_edited: 'file_edited',
  update_by: 'update_by',
  update_datetime: 'update_datetime'
};

exports.Prisma.TindakanhakimpengawaswebScalarFieldEnum = {
  ID: 'ID',
  IDPerkara: 'IDPerkara',
  IDPerkaraPascaPailit: 'IDPerkaraPascaPailit',
  IDProses: 'IDProses',
  kategoriRapat: 'kategoriRapat',
  IDJenisRapat: 'IDJenisRapat',
  IDJenisPermohonan: 'IDJenisPermohonan',
  noSurat: 'noSurat',
  tglSurat: 'tglSurat',
  namaPemohon: 'namaPemohon',
  tipePemohon: 'tipePemohon',
  nomorPenetapan: 'nomorPenetapan',
  tanggalPenetapan: 'tanggalPenetapan',
  namaHakim: 'namaHakim',
  uraian: 'uraian'
};

exports.Prisma.Tingkat_pendidikanScalarFieldEnum = {
  id: 'id',
  kode: 'kode',
  nama: 'nama',
  keterangan: 'keterangan',
  aktif: 'aktif',
  diedit_oleh: 'diedit_oleh',
  diedit_tanggal: 'diedit_tanggal',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UpdatesScalarFieldEnum = {
  id: 'id',
  patch_ver: 'patch_ver',
  source_path: 'source_path',
  stamp: 'stamp',
  updated: 'updated',
  updated_stamp: 'updated_stamp'
};

exports.Prisma.Updates_catatanScalarFieldEnum = {
  id: 'id',
  update_id: 'update_id',
  deskripsi: 'deskripsi'
};

exports.Prisma.User_hakimScalarFieldEnum = {
  userid: 'userid',
  hakim_id: 'hakim_id'
};

exports.Prisma.User_jurusitaScalarFieldEnum = {
  userid: 'userid',
  jurusita_id: 'jurusita_id'
};

exports.Prisma.User_paniteraScalarFieldEnum = {
  userid: 'userid',
  panitera_id: 'panitera_id'
};

exports.Prisma.Usulan_kuratorScalarFieldEnum = {
  id: 'id',
  perkara_id: 'perkara_id',
  kurator_id: 'kurator_id',
  nama_kurator: 'nama_kurator',
  tanggal_surat_usulan: 'tanggal_surat_usulan',
  nomor_surat_usulan: 'nomor_surat_usulan',
  aktif: 'aktif',
  jenis: 'jenis',
  jumlah_perkara: 'jumlah_perkara',
  keterangan: 'keterangan',
  diinput_oleh: 'diinput_oleh',
  diinput_tanggal: 'diinput_tanggal',
  diperbaharui_oleh: 'diperbaharui_oleh',
  diperbaharui_tanggal: 'diperbaharui_tanggal'
};

exports.Prisma.VerzetwebScalarFieldEnum = {
  IDPerkara: 'IDPerkara',
  tglPendaftaran: 'tglPendaftaran',
  tglPenetapanMajelis: 'tglPenetapanMajelis',
  majelisHakim: 'majelisHakim',
  tglPenetapanPP: 'tglPenetapanPP',
  paniteraPengganti: 'paniteraPengganti',
  tglPenetapanJurusita: 'tglPenetapanJurusita',
  jurusita: 'jurusita',
  tglPenetapanSidang: 'tglPenetapanSidang',
  tglSidangPertama: 'tglSidangPertama',
  verstek: 'verstek',
  sumberHukum: 'sumberHukum',
  putusan: 'putusan',
  statusPutusan: 'statusPutusan',
  amarPutusan: 'amarPutusan',
  jenisPemberitahuan: 'jenisPemberitahuan',
  tglPemberitahuan: 'tglPemberitahuan',
  tglPemberitahuanPutusanKpdPenggugat: 'tglPemberitahuanPutusanKpdPenggugat',
  tglPemberitahuanPutusanKpdTergugat: 'tglPemberitahuanPutusanKpdTergugat'
};

exports.Prisma.Web_statistikScalarFieldEnum = {
  session_id: 'session_id',
  ipaddress: 'ipaddress',
  start_visit: 'start_visit',
  last_visit: 'last_visit',
  page_name: 'page_name',
  referer: 'referer',
  user_agent: 'user_agent'
};
exports.api_antrian_batch_method = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
};

exports.api_antrian_method = {
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT'
};

exports.sppt_inbound_read_status = {
  Y: 'Y',
  N: 'N'
};

exports.sppt_inbound_tx_type = {
  new: 'new',
  update: 'update'
};

exports.sppt_send_data_status = {
  N: 'N',
  Y: 'Y',
  YY: 'YY'
};

exports.sppt_send_data_tx_type = {
  new: 'new',
  update: 'update'
};

exports.Prisma.ModelName = {
  actiopaulianaweb: 'actiopaulianaweb',
  agama: 'agama',
  agenda_sidang: 'agenda_sidang',
  alur_perkara: 'alur_perkara',
  alurperkaraweb: 'alurperkaraweb',
  an_antrian_ac: 'an_antrian_ac',
  an_antrian_daftar: 'an_antrian_daftar',
  an_antrian_informasi: 'an_antrian_informasi',
  an_antrian_kasir: 'an_antrian_kasir',
  an_antrian_sidang: 'an_antrian_sidang',
  antrian: 'antrian',
  arsip: 'arsip',
  arsip_pinjam: 'arsip_pinjam',
  bandingdetilweb: 'bandingdetilweb',
  bandingweb: 'bandingweb',
  barangbuktiweb: 'barangbuktiweb',
  biaya_perkara: 'biaya_perkara',
  bukti_tilang: 'bukti_tilang',
  ci_sessions: 'ci_sessions',
  dataumumweb: 'dataumumweb',
  delegasi_file_keluar: 'delegasi_file_keluar',
  delegasi_file_masuk: 'delegasi_file_masuk',
  delegasi_keluar: 'delegasi_keluar',
  delegasi_masuk: 'delegasi_masuk',
  delegasi_masuk_riwayat: 'delegasi_masuk_riwayat',
  delegasi_proses_keluar: 'delegasi_proses_keluar',
  delegasi_proses_masuk: 'delegasi_proses_masuk',
  delegasikeluarweb: 'delegasikeluarweb',
  delegasimasukweb: 'delegasimasukweb',
  delegasiproseskeluarweb: 'delegasiproseskeluarweb',
  delegasiprosesmasukweb: 'delegasiprosesmasukweb',
  dirput_antrian: 'dirput_antrian',
  dirput_dokumen: 'dirput_dokumen',
  dirput_dokumen_ref: 'dirput_dokumen_ref',
  dirput_pengajuan: 'dirput_pengajuan',
  dirput_perkara: 'dirput_perkara',
  dirput_ref: 'dirput_ref',
  dirput_sipp_ref: 'dirput_sipp_ref',
  diversi_anak_blm_12tahun: 'diversi_anak_blm_12tahun',
  diversi_anak_orang_tua: 'diversi_anak_orang_tua',
  diversi_korban_orang_tua: 'diversi_korban_orang_tua',
  diversi_pembimbing_kemasyarakatan: 'diversi_pembimbing_kemasyarakatan',
  diversi_penasihat_hukum: 'diversi_penasihat_hukum',
  diversi_penyidik: 'diversi_penyidik',
  diversi_register: 'diversi_register',
  diversi_register_blm_12tahun: 'diversi_register_blm_12tahun',
  diversiweb: 'diversiweb',
  ecourt_antrian_cabut: 'ecourt_antrian_cabut',
  ecourt_antrian_pendaftaran: 'ecourt_antrian_pendaftaran',
  ecourt_banding: 'ecourt_banding',
  ecourt_biaya: 'ecourt_biaya',
  ecourt_cabut: 'ecourt_cabut',
  ecourt_hakim: 'ecourt_hakim',
  ecourt_jadwal_sidang: 'ecourt_jadwal_sidang',
  ecourt_jurusita: 'ecourt_jurusita',
  ecourt_kuasa_hukum: 'ecourt_kuasa_hukum',
  ecourt_panitera: 'ecourt_panitera',
  ecourt_pengacara: 'ecourt_pengacara',
  ecourt_pengacara_tmp: 'ecourt_pengacara_tmp',
  ecourt_perkara_hakim: 'ecourt_perkara_hakim',
  ecourt_perkara_jurusita: 'ecourt_perkara_jurusita',
  ecourt_perkara_panitera: 'ecourt_perkara_panitera',
  ecourt_pihak: 'ecourt_pihak',
  ecourt_putusan: 'ecourt_putusan',
  ecourt_ref_sink: 'ecourt_ref_sink',
  ecourt_sink_log: 'ecourt_sink_log',
  eksekusidetilweb: 'eksekusidetilweb',
  eksekusiweb: 'eksekusiweb',
  epayment_virtual_account: 'epayment_virtual_account',
  faktor_perceraian: 'faktor_perceraian',
  grasiweb: 'grasiweb',
  hakim_ma: 'hakim_ma',
  hakim_pn: 'hakim_pn',
  hakim_pt: 'hakim_pt',
  hakimweb: 'hakimweb',
  hari_libur: 'hari_libur',
  hartapailitweb: 'hartapailitweb',
  ikrarweb: 'ikrarweb',
  izin_penggeledahan: 'izin_penggeledahan',
  izin_penyitaan: 'izin_penyitaan',
  jabatan_hakim: 'jabatan_hakim',
  jadwalsidangweb: 'jadwalsidangweb',
  jenis_alur_perkara: 'jenis_alur_perkara',
  jenis_biaya: 'jenis_biaya',
  jenis_delegasi: 'jenis_delegasi',
  jenis_dokumen: 'jenis_dokumen',
  jenis_identitas: 'jenis_identitas',
  jenis_intervensi: 'jenis_intervensi',
  jenis_kendaraan: 'jenis_kendaraan',
  jenis_penahanan: 'jenis_penahanan',
  jenis_perkara: 'jenis_perkara',
  jenis_pihak: 'jenis_pihak',
  jenis_tahanan: 'jenis_tahanan',
  jenisperkaraweb: 'jenisperkaraweb',
  jurusita: 'jurusita',
  jurusitaweb: 'jurusitaweb',
  kabupaten: 'kabupaten',
  kasasidetilweb: 'kasasidetilweb',
  kasasiweb: 'kasasiweb',
  kategori_biaya: 'kategori_biaya',
  kejaksaan_negeri: 'kejaksaan_negeri',
  kejaksaan_tinggi: 'kejaksaan_tinggi',
  kurator: 'kurator',
  lembaga_pemasyarakatan: 'lembaga_pemasyarakatan',
  map_ditjenpas: 'map_ditjenpas',
  mediasiweb: 'mediasiweb',
  mediator: 'mediator',
  mediatorweb: 'mediatorweb',
  menu: 'menu',
  negara: 'negara',
  panggilandismissalweb: 'panggilandismissalweb',
  panitera_ma: 'panitera_ma',
  panitera_pn: 'panitera_pn',
  panitera_pt: 'panitera_pt',
  penahanan_terdakwa: 'penahanan_terdakwa',
  penahananweb: 'penahananweb',
  penetapandismissalweb: 'penetapandismissalweb',
  penetapanpersiapanprosesweb: 'penetapanpersiapanprosesweb',
  penetapanpersiapanweb: 'penetapanpersiapanweb',
  pengacaraweb: 'pengacaraweb',
  pengadilan_negeri: 'pengadilan_negeri',
  pengadilan_tinggi: 'pengadilan_tinggi',
  perkara: 'perkara',
  perkara_actio_pauliana: 'perkara_actio_pauliana',
  perkara_akta_cerai: 'perkara_akta_cerai',
  perkara_banding: 'perkara_banding',
  perkara_banding_detil: 'perkara_banding_detil',
  perkara_barang_bukti: 'perkara_barang_bukti',
  perkara_barang_bukti_perdata: 'perkara_barang_bukti_perdata',
  perkara_biaya: 'perkara_biaya',
  perkara_biaya_ht: 'perkara_biaya_ht',
  perkara_biaya_jurusita: 'perkara_biaya_jurusita',
  perkara_court_calendar: 'perkara_court_calendar',
  perkara_data_dukung_mediasi: 'perkara_data_dukung_mediasi',
  perkara_data_pernikahan: 'perkara_data_pernikahan',
  perkara_data_template_penahanan: 'perkara_data_template_penahanan',
  perkara_data_template_sidang: 'perkara_data_template_sidang',
  perkara_dismissal: 'perkara_dismissal',
  perkara_diversi: 'perkara_diversi',
  perkara_dokumen: 'perkara_dokumen',
  perkara_edoc_calendar: 'perkara_edoc_calendar',
  perkara_edoc_kppu: 'perkara_edoc_kppu',
  perkara_efiling: 'perkara_efiling',
  perkara_efiling_id: 'perkara_efiling_id',
  perkara_eksekusi: 'perkara_eksekusi',
  perkara_eksekusi_detil: 'perkara_eksekusi_detil',
  perkara_eksekusi_detil_ht: 'perkara_eksekusi_detil_ht',
  perkara_eksekusi_ht: 'perkara_eksekusi_ht',
  perkara_grasi: 'perkara_grasi',
  perkara_hakim_banding: 'perkara_hakim_banding',
  perkara_hakim_kasasi: 'perkara_hakim_kasasi',
  perkara_hakim_pk: 'perkara_hakim_pk',
  perkara_hakim_pn: 'perkara_hakim_pn',
  perkara_harta_pailit: 'perkara_harta_pailit',
  perkara_ikrar_talak: 'perkara_ikrar_talak',
  perkara_izin_cerai: 'perkara_izin_cerai',
  perkara_jadwal_mediasi: 'perkara_jadwal_mediasi',
  perkara_jadwal_musyawarah_diversi: 'perkara_jadwal_musyawarah_diversi',
  perkara_jadwal_pemeriksaan_pk: 'perkara_jadwal_pemeriksaan_pk',
  perkara_jadwal_sidang: 'perkara_jadwal_sidang',
  perkara_jadwal_sidang_detil: 'perkara_jadwal_sidang_detil',
  perkara_jurusita: 'perkara_jurusita',
  perkara_kasasi: 'perkara_kasasi',
  perkara_kasasi_detil: 'perkara_kasasi_detil',
  perkara_keberatan: 'perkara_keberatan',
  perkara_keberatan_detil: 'perkara_keberatan_detil',
  perkara_keberatan_kppu: 'perkara_keberatan_kppu',
  perkara_kejaksaan: 'perkara_kejaksaan',
  perkara_keterangan_saksi: 'perkara_keterangan_saksi',
  perkara_keterangan_terdakwa: 'perkara_keterangan_terdakwa',
  perkara_kewenangan_kppu: 'perkara_kewenangan_kppu',
  perkara_lalulintas: 'perkara_lalulintas',
  perkara_matra: 'perkara_matra',
  perkara_mediasi: 'perkara_mediasi',
  perkara_mediator: 'perkara_mediator',
  perkara_panggilan_dismissal: 'perkara_panggilan_dismissal',
  perkara_panitera_banding: 'perkara_panitera_banding',
  perkara_panitera_kasasi: 'perkara_panitera_kasasi',
  perkara_panitera_pk: 'perkara_panitera_pk',
  perkara_panitera_pn: 'perkara_panitera_pn',
  perkara_pelaksanaan_relaas: 'perkara_pelaksanaan_relaas',
  perkara_penawaran_konsinyasi: 'perkara_penawaran_konsinyasi',
  perkara_pendapat_terdakwa: 'perkara_pendapat_terdakwa',
  perkara_penetapan: 'perkara_penetapan',
  perkara_penetapan_hari_sidang: 'perkara_penetapan_hari_sidang',
  perkara_pengacara: 'perkara_pengacara',
  perkara_pengacara_copy: 'perkara_pengacara_copy',
  perkara_penuntutan: 'perkara_penuntutan',
  perkara_penyegelan: 'perkara_penyegelan',
  perkara_penyitaan: 'perkara_penyitaan',
  perkara_perbaikan_gugatan: 'perkara_perbaikan_gugatan',
  perkara_persiapan: 'perkara_persiapan',
  perkara_persiapan_proses: 'perkara_persiapan_proses',
  perkara_pihak1: 'perkara_pihak1',
  perkara_pihak2: 'perkara_pihak2',
  perkara_pihak3: 'perkara_pihak3',
  perkara_pihak4: 'perkara_pihak4',
  perkara_pihak5: 'perkara_pihak5',
  perkara_pihak_korban: 'perkara_pihak_korban',
  perkara_pihak_orang_tua: 'perkara_pihak_orang_tua',
  perkara_pihak_pekerja_sosial_profesional: 'perkara_pihak_pekerja_sosial_profesional',
  perkara_pihak_pembimbing_masyarakat: 'perkara_pihak_pembimbing_masyarakat',
  perkara_pihak_penyidik: 'perkara_pihak_penyidik',
  perkara_pihak_perwakilan_masyarakat: 'perkara_pihak_perwakilan_masyarakat',
  perkara_pk: 'perkara_pk',
  perkara_pk_detil: 'perkara_pk_detil',
  perkara_proses: 'perkara_proses',
  perkara_putusan: 'perkara_putusan',
  perkara_putusan_pemberitahuan_putusan: 'perkara_putusan_pemberitahuan_putusan',
  perkara_putusan_sela: 'perkara_putusan_sela',
  perkara_putusan_terdakwa: 'perkara_putusan_terdakwa',
  perkara_putusan_terdakwa_banding: 'perkara_putusan_terdakwa_banding',
  perkara_putusan_terdakwa_copy: 'perkara_putusan_terdakwa_copy',
  perkara_putusan_terdakwa_kasasi: 'perkara_putusan_terdakwa_kasasi',
  perkara_putusan_terdakwa_pk: 'perkara_putusan_terdakwa_pk',
  perkara_rehabilitasi: 'perkara_rehabilitasi',
  perkara_rekonvensi: 'perkara_rekonvensi',
  perkara_rekonvensi_detil: 'perkara_rekonvensi_detil',
  perkara_sumber_hukum_verzet: 'perkara_sumber_hukum_verzet',
  perkara_verzet: 'perkara_verzet',
  perkarabiayaweb: 'perkarabiayaweb',
  perkaraeksekusihtweb: 'perkaraeksekusihtweb',
  perkarakeberatanweb: 'perkarakeberatanweb',
  perkaralalulintasweb: 'perkaralalulintasweb',
  perkaramatraweb: 'perkaramatraweb',
  perkarapenuntutanweb: 'perkarapenuntutanweb',
  perkaraprosesweb: 'perkaraprosesweb',
  perkaraputusanterdakwaweb: 'perkaraputusanterdakwaweb',
  perkaraputusanweb: 'perkaraputusanweb',
  perkarawekppuweb: 'perkarawekppuweb',
  pesan: 'pesan',
  pesan_tujuan: 'pesan_tujuan',
  pihak: 'pihak',
  pihak_foto: 'pihak_foto',
  pihak_jaksa: 'pihak_jaksa',
  pihak_pembimbing_masyarakat: 'pihak_pembimbing_masyarakat',
  pihak_pengacara: 'pihak_pengacara',
  pihak_penyidik: 'pihak_penyidik',
  pihakintervensiweb: 'pihakintervensiweb',
  pihakweb: 'pihakweb',
  pkdetilweb: 'pkdetilweb',
  pkweb: 'pkweb',
  ppweb: 'ppweb',
  propinsi: 'propinsi',
  proses: 'proses',
  proses_alur_perkara: 'proses_alur_perkara',
  prosesalurperkaraweb: 'prosesalurperkaraweb',
  prosesweb: 'prosesweb',
  putusanpemberitahuanweb: 'putusanpemberitahuanweb',
  putusanselaweb: 'putusanselaweb',
  referensi_amar_putusan: 'referensi_amar_putusan',
  referensi_kolom_data_template: 'referensi_kolom_data_template',
  rekonvensiweb: 'rekonvensiweb',
  ruangan_sidang: 'ruangan_sidang',
  saldo_awal: 'saldo_awal',
  saldo_awal_copy: 'saldo_awal_copy',
  satker: 'satker',
  sidangpertamaweb: 'sidangpertamaweb',
  sppt_inbound: 'sppt_inbound',
  sppt_jenis_proses: 'sppt_jenis_proses',
  sppt_ref_kejaksaan: 'sppt_ref_kejaksaan',
  sppt_ref_proses: 'sppt_ref_proses',
  sppt_ref_response_message: 'sppt_ref_response_message',
  sppt_ref_satker: 'sppt_ref_satker',
  sppt_send_data: 'sppt_send_data',
  status_penahanan: 'status_penahanan',
  status_perkawinan: 'status_perkawinan',
  status_pihak: 'status_pihak',
  status_putusan: 'status_putusan',
  status_putusan_banding: 'status_putusan_banding',
  statuspihakweb: 'statuspihakweb',
  statusputusanweb: 'statusputusanweb',
  sumber_hukum: 'sumber_hukum',
  sys_audit_config: 'sys_audit_config',
  sys_audittrail: 'sys_audittrail',
  sys_backup: 'sys_backup',
  sys_config: 'sys_config',
  sys_day_name: 'sys_day_name',
  sys_form_rule: 'sys_form_rule',
  sys_forms: 'sys_forms',
  sys_group_rule: 'sys_group_rule',
  sys_groups: 'sys_groups',
  sys_langguage: 'sys_langguage',
  sys_menu_rule: 'sys_menu_rule',
  sys_menu_type: 'sys_menu_type',
  sys_menus: 'sys_menus',
  sys_month_name: 'sys_month_name',
  sys_queries: 'sys_queries',
  sys_recordlock_config: 'sys_recordlock_config',
  sys_rules: 'sys_rules',
  sys_sinkronisasi: 'sys_sinkronisasi',
  sys_time_zone: 'sys_time_zone',
  sys_user_group: 'sys_user_group',
  sys_user_online: 'sys_user_online',
  sys_users: 'sys_users',
  tahapan_proses: 'tahapan_proses',
  template_amar_putusan: 'template_amar_putusan',
  template_amar_putusan_copy: 'template_amar_putusan_copy',
  template_dokumen: 'template_dokumen',
  template_dokumen_agenda: 'template_dokumen_agenda',
  template_dokumen_jenis_agenda: 'template_dokumen_jenis_agenda',
  template_history: 'template_history',
  template_keterangan_saksi_d: 'template_keterangan_saksi_d',
  template_keterangan_saksi_m: 'template_keterangan_saksi_m',
  template_perkara_bas: 'template_perkara_bas',
  template_perkara_bas_detil_tanya_jawab: 'template_perkara_bas_detil_tanya_jawab',
  template_perkara_bas_penutup: 'template_perkara_bas_penutup',
  testing_dev: 'testing_dev',
  tingkat_pendidikan: 'tingkat_pendidikan',
  updates: 'updates',
  updates_catatan: 'updates_catatan',
  user_hakim: 'user_hakim',
  user_jurusita: 'user_jurusita',
  user_panitera: 'user_panitera',
  verzetweb: 'verzetweb',
  web_statistik: 'web_statistik',
  api_antrian: 'api_antrian',
  api_antrian_batch: 'api_antrian_batch',
  api_ref_table: 'api_ref_table',
  bantahantagihanweb: 'bantahantagihanweb',
  berpadu_pelimpahan: 'berpadu_pelimpahan',
  berpadu_pelimpahan_register: 'berpadu_pelimpahan_register',
  diversi_jenis_kesepakatan_diversi: 'diversi_jenis_kesepakatan_diversi',
  ecourt_prodeo: 'ecourt_prodeo',
  epayment: 'epayment',
  hakimpengawasweb: 'hakimpengawasweb',
  hasilpemungutansuaraweb: 'hasilpemungutansuaraweb',
  kuesioner_ikm: 'kuesioner_ikm',
  kuesioner_ipk: 'kuesioner_ipk',
  kuratorweb: 'kuratorweb',
  laporanpublisitasweb: 'laporanpublisitasweb',
  nomor_antrian: 'nomor_antrian',
  on_call: 'on_call',
  penetapanpublisitasweb: 'penetapanpublisitasweb',
  penilaian_ikm: 'penilaian_ikm',
  penilaian_ipk: 'penilaian_ipk',
  penjualanhartapailitweb: 'penjualanhartapailitweb',
  perbaikangugatanweb: 'perbaikangugatanweb',
  perkara_alasan_nikah: 'perkara_alasan_nikah',
  perkara_anak_pihak: 'perkara_anak_pihak',
  perkara_bantahan_tagihan: 'perkara_bantahan_tagihan',
  perkara_biaya_penyelesaian_pailit: 'perkara_biaya_penyelesaian_pailit',
  perkara_biaya_tk: 'perkara_biaya_tk',
  perkara_dokumen_rapat: 'perkara_dokumen_rapat',
  perkara_dokumen_rapat_pkpu: 'perkara_dokumen_rapat_pkpu',
  perkara_efiling_perlawanan: 'perkara_efiling_perlawanan',
  perkara_eksekusi_detil_backup: 'perkara_eksekusi_detil_backup',
  perkara_eksekusi_detil_tk: 'perkara_eksekusi_detil_tk',
  perkara_eksekusi_tk: 'perkara_eksekusi_tk',
  perkara_hakim_pengawas: 'perkara_hakim_pengawas',
  perkara_hasil_pemungutan_suara: 'perkara_hasil_pemungutan_suara',
  perkara_jadwal_pemeriksaan_tambahan: 'perkara_jadwal_pemeriksaan_tambahan',
  perkara_juncto: 'perkara_juncto',
  perkara_kumulasi: 'perkara_kumulasi',
  perkara_kurator: 'perkara_kurator',
  perkara_laporan_kurator: 'perkara_laporan_kurator',
  perkara_laporan_publisitas: 'perkara_laporan_publisitas',
  perkara_mempelai_dk: 'perkara_mempelai_dk',
  perkara_pasca_pailit: 'perkara_pasca_pailit',
  perkara_pemeriksaan_tambahan: 'perkara_pemeriksaan_tambahan',
  perkara_pemilu: 'perkara_pemilu',
  perkara_penetapan_hakim_pengawas: 'perkara_penetapan_hakim_pengawas',
  perkara_penetapan_publisitas: 'perkara_penetapan_publisitas',
  perkara_pengakhiran_kepailitan: 'perkara_pengakhiran_kepailitan',
  perkara_pengakhiran_kepailitan_dokumen: 'perkara_pengakhiran_kepailitan_dokumen',
  perkara_pengakhiran_pkpu: 'perkara_pengakhiran_pkpu',
  perkara_pengumuman_kepailitan: 'perkara_pengumuman_kepailitan',
  perkara_penjualan_harta_pailit: 'perkara_penjualan_harta_pailit',
  perkara_penyidik: 'perkara_penyidik',
  perkara_pihak_tersangka: 'perkara_pihak_tersangka',
  perkara_putusan_pkpu_sementara: 'perkara_putusan_pkpu_sementara',
  perkara_putusan_pkpu_tetap: 'perkara_putusan_pkpu_tetap',
  perkara_putusan_sela_uh: 'perkara_putusan_sela_uh',
  perkara_rapat_pasca_kepailitan: 'perkara_rapat_pasca_kepailitan',
  perkara_rapat_pkpu: 'perkara_rapat_pkpu',
  perkara_ref_akad_syariah: 'perkara_ref_akad_syariah',
  perkara_ref_bidang_ekonomi_syariah: 'perkara_ref_bidang_ekonomi_syariah',
  perkara_tindakan_hakim_pengawas: 'perkara_tindakan_hakim_pengawas',
  perkara_wakaf: 'perkara_wakaf',
  perkarajunctoweb: 'perkarajunctoweb',
  perkaralaporankuratorweb: 'perkaralaporankuratorweb',
  perkarapascapailitweb: 'perkarapascapailitweb',
  perkarapengumumankepailitanweb: 'perkarapengumumankepailitanweb',
  perkarapihaktersangkaweb: 'perkarapihaktersangkaweb',
  perkaraputusanpkpusementaraweb: 'perkaraputusanpkpusementaraweb',
  perkaraputusanpkputetapweb: 'perkaraputusanpkputetapweb',
  perkararapatpascakepailitanweb: 'perkararapatpascakepailitanweb',
  perkararapatpkpuweb: 'perkararapatpkpuweb',
  ref_akad_syariah: 'ref_akad_syariah',
  ref_asal_usul_anak: 'ref_asal_usul_anak',
  ref_batal_kawin: 'ref_batal_kawin',
  ref_bidang_ekonomi_syariah: 'ref_bidang_ekonomi_syariah',
  ref_dispensasi_kawin: 'ref_dispensasi_kawin',
  ref_isbat_nikah: 'ref_isbat_nikah',
  ref_izin_poligami: 'ref_izin_poligami',
  ref_jenis_alasan: 'ref_jenis_alasan',
  ref_kabupaten: 'ref_kabupaten',
  ref_kecamatan: 'ref_kecamatan',
  ref_kua: 'ref_kua',
  ref_objek_wakaf: 'ref_objek_wakaf',
  ref_pekerjaan: 'ref_pekerjaan',
  ref_pelaksanaan_eksekusi: 'ref_pelaksanaan_eksekusi',
  ref_pengesahan_anak: 'ref_pengesahan_anak',
  ref_penguasaan_anak: 'ref_penguasaan_anak',
  ref_provinsi: 'ref_provinsi',
  ref_tingkat_pendidikan: 'ref_tingkat_pendidikan',
  referensi_alasan_eksekusi_tidak_dilaksanakan: 'referensi_alasan_eksekusi_tidak_dilaksanakan',
  referensi_jenis_kesepakatan_diversi: 'referensi_jenis_kesepakatan_diversi',
  referensi_pengakhiran_jenis_alasan: 'referensi_pengakhiran_jenis_alasan',
  referensi_pengakhiran_jenis_bukti: 'referensi_pengakhiran_jenis_bukti',
  referensi_tindakan_hakim_pengawas: 'referensi_tindakan_hakim_pengawas',
  responden: 'responden',
  sppt_ref_penyidik: 'sppt_ref_penyidik',
  sumberhukumweb: 'sumberhukumweb',
  tindakanhakimpengawasweb: 'tindakanhakimpengawasweb',
  usulan_kurator: 'usulan_kurator'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
