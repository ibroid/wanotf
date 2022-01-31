const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const perkara_putusan = sequelize.define('perkara_putusan', {
    perkara_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Primary key (by system)",
      references: {
        model: 'perkara',
        key: 'perkara_id'
      }
    },
    tanggal_putusan: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    putusan_verstek: {
      type: DataTypes.STRING(1),
      allowNull: true,
      comment: "Putusan Verstek: pilihan Y=Ya; T=Tidak"
    },
    sumber_hukum_id: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "Diputus Dengan: pilihan (KUH Perdata,KUH Dagang, Adat, UU\/PP)"
    },
    status_putusan_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Id Status Putusan: merujuk ke tabel status_putusan kolom id"
    },
    status_putusan_kode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "Kode Status Putusan: merujuk ke tabel status putusan kolom kode (by system)"
    },
    status_putusan_nama: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "Nama Status Putusan: merujuk ke tabel status_putusan kolom nama (by system)"
    },
    status_putusan_text: {
      type: DataTypes.STRING(5000),
      allowNull: true,
      defaultValue: "",
      comment: "Keterangan Putusan: (by system)"
    },
    tanggal_cabut: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal Cabut, jika status putusan dicabut(status_putusan_id=7)"
    },
    tanggal_gugur: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal Gugur: jika status putusan gugur(status_putusan_id=6)"
    },
    amar_putusan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    amar_putusan_dok: {
      type: DataTypes.STRING(250),
      allowNull: true,
      comment: "Dokumen Amar Putusan: form upload"
    },
    amar_putusan_anonimisasi_dok: {
      type: DataTypes.STRING(250),
      allowNull: true,
      comment: "Dokumen Amar Putusan Anonimisasi: form upload"
    },
    penetapan_hakim_pengawas: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal Penetapan Hakim Pengawas: isian tanggal"
    },
    nomor_penetapan_hakim_pengawas: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Nomor Penetapan Hakim Pengawas"
    },
    hakim_pengawas_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Id Hakim Pengawas: dipisahkan dengan koma"
    },
    pengurus_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Id Pengurus: dipisahkan dengan koma"
    },
    tanggal_penetapan_kreditur: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal Penetapan Panitia Kreditur: isian tanggal"
    },
    panitia_kreditur: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "Panitia Kreditur: isian bebas"
    },
    kurator_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Id Kurator: dipisahkan dengan koma"
    },
    tanggal_berita_putusan: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal Pengumuman Dalam Berita Negara RI: isian tanggal"
    },
    nama_media_berita_putusan: {
      type: DataTypes.STRING(250),
      allowNull: true,
      comment: "Nama Media Berita: isian bebas"
    },
    tanggal_surat_kabar_putusan: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal Pengumuman Dalam Surat Kabar: isian tanggal"
    },
    nama_surat_kabar_putusan: {
      type: DataTypes.STRING(250),
      allowNull: true,
      comment: "Nama Surat Kabar: isian bebas"
    },
    tanggal_minutasi: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal Minutasi: isian tanggal"
    },
    pemberitahuan_putusan: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal Pemberitahuan Putusan Kepada para Pihak: isian tanggal"
    },
    pemberitahuan_putusan_pihak1: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal Pemberitahuan Putusan Kepada Pihak Penggugat\/Pemohon\/JPU: isian tanggal"
    },
    pemberitahuan_putusan_pihak2: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal Pemberitahuan Putusan Kepada Pihak Tergugat\/Termohon\/Terdakwa: isian tanggal"
    },
    pemberitahuan_putusan_pihak3: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal Pemberitahuan Putusan Kepada Pihak Intervensi: isian tanggal"
    },
    pemberitahuan_putusan_ankum: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pemberitahuan_putusan_pepera: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    menerima_putusan_pihak1: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal JPU menerima putusan: isian tanggal"
    },
    menerima_putusan_pihak2: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal Terdakwa Menerima Putusan: isian tanggal"
    },
    penerbitan_salinan_putusan: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal Penerbitan Salinan Putusan"
    },
    kirim_salinan_putusan_pihak1: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal Kirim Salian Putusan Kepada JPU: isian tanggal"
    },
    kirim_salinan_putusan_pihak2: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal Kirim Salian Putusan Kepada Terdakwa: isian tanggal"
    },
    kirim_salinan_putusan_pihak3: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal Kirim Salian Putusan Kepada Pihak Intervensi: isian tanggal"
    },
    kirim_salinan_putusan_penyidik: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal Kirim Salian Putusan Kepada Penyidik: isian tanggal"
    },
    catatan_putusan: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Catatan Putusan: isian bebas"
    },
    nilai_ganti_kerugian: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    tanggal_bht: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    diedit_oleh: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "Diedit Oleh: (by system)"
    },
    diedit_tanggal: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Diedit Tanggal: (by system)"
    },
    diinput_oleh: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "Diinput Oleh: (by system)"
    },
    diinput_tanggal: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Diinput Tanggal: (by system)"
    },
    diperbaharui_oleh: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "Diperbaharui Oleh: (by system)"
    },
    diperbaharui_tanggal: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Diperbaharui Tanggal: (by system)"
    }
  }, {
    sequelize,
    tableName: 'perkara_putusan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "perkara_id" },
          { name: "tanggal_putusan" },
        ]
      },
      {
        name: "tanggal_putusan",
        using: "BTREE",
        fields: [
          { name: "tanggal_putusan" },
        ]
      },
      {
        name: "tanggal_cabut",
        using: "BTREE",
        fields: [
          { name: "tanggal_cabut" },
        ]
      },
      {
        name: "tanggal_gugur",
        using: "BTREE",
        fields: [
          { name: "tanggal_gugur" },
        ]
      },
      {
        name: "putusan_verstek",
        using: "BTREE",
        fields: [
          { name: "putusan_verstek" },
        ]
      },
      {
        name: "status_putusan_id",
        using: "BTREE",
        fields: [
          { name: "status_putusan_id" },
        ]
      },
      {
        name: "tanggal_minutasi",
        using: "BTREE",
        fields: [
          { name: "tanggal_minutasi" },
        ]
      },
    ]
  });
  return perkara_putusan;
};
