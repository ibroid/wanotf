const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const perkara = sequelize.define('perkara', {
    perkara_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Primary key (by system)"
    },
    jenis_acara: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    alur_perkara_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Id Alur Perkara: merujuk ke tabel alur_perkara kolom id(by system)",
      references: {
        model: 'alur_perkara',
        key: 'id'
      }
    },
    tanggal_pendaftaran: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal Pendaftaran: isian tanggal"
    },
    jenis_perkara_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Id Jenis Perkara: merujuk ke tabel jenis_perkara kolom id"
    },
    jenis_perkara_kode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "",
      comment: "Kode Jenis Perkara: merujuk ke tabel jenis_perkara kolom kode (by system)"
    },
    jenis_perkara_nama: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "",
      comment: "Nama Jenis Perkara: merujuk ke tabel jenis_perkara kolom nama (by system)"
    },
    jenis_perkara_text: {
      type: DataTypes.STRING(400),
      allowNull: true,
      defaultValue: "",
      comment: "Nama Jenis Perkara lengkap dengan induk perkaranya(by system)"
    },
    nomor_urut_register: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Nomor Urut Buku Register: Reset per bulan"
    },
    nomor_urut_perkara: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Nomor Urut Perkara: reset per tahun untuk tiap alur_perkara_id (manual\/by system)"
    },
    nomor_perkara: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Nomor Perkara: (manual\/by system)",
      unique: "nomor_perkara"
    },
    nomor_indeks: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Nomor Indeks Perkara: untuk keperluan pengurutan data berdasarkan tahun,alur perkara dan nomor urut perkara (by system)"
    },
    tanggal_surat: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal Surat Gugatan\/Permohonan\/Pelimpahan: isian tanggal"
    },
    nomor_surat: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "",
      comment: "Nomor Surat Gugatan\/Permohonan\/Pelimpahan: isian bebas"
    },
    surat_dok: {
      type: DataTypes.STRING(250),
      allowNull: true,
      defaultValue: "",
      comment: "Dokumen Surat Gugatan\/Permohonan\/Pelimpahan: form upload"
    },
    pihak1_text: {
      type: DataTypes.STRING(3000),
      allowNull: true,
      defaultValue: "",
      comment: "Penggugat\/Pemohon\/Penuntut: (by system)"
    },
    pengacara_pihak1: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      defaultValue: "",
      comment: "Pengacara Penggugat\/Pemohon: isian bebas"
    },
    pihak2_text: {
      type: DataTypes.STRING(3000),
      allowNull: true,
      defaultValue: "",
      comment: "Tergugat\/Termohon\/Terdakwa: (by system)"
    },
    pengacara_pihak2: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      defaultValue: "",
      comment: "Pengacara Tergugat\/Termohon\/Terdakwa: isian bebas"
    },
    pihak3_text: {
      type: DataTypes.STRING(3000),
      allowNull: true,
      defaultValue: "",
      comment: "Pihak Ke Tiga yang melakukan Intervensi: (by system)"
    },
    pengacara_pihak3: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      defaultValue: "",
      comment: "Pengacara pihak yang intervensi: isian bebas"
    },
    pihak4_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pengacara_pihak4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    para_pihak: {
      type: DataTypes.STRING(5000),
      allowNull: true,
      defaultValue: "",
      comment: "Para Pihak: gabungan pihak1 dan pihak2: (by system)"
    },
    pihak_dipublikasikan: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "Y",
      comment: "Para Pihak Dipublikasikan: pilihan(Y=Ya; T=Tidak)"
    },
    posita: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    petitum: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Isi Petitum: isian bebas"
    },
    petitum_dok: {
      type: DataTypes.STRING(250),
      allowNull: true,
      defaultValue: "",
      comment: "Dokumen Petitum: form upload"
    },
    nomor_dakwaan: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tanggal_dakwaan: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dakwaan: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Isi Dakwaan: isian bebas"
    },
    pasal_dakwaan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dakwaan_dok: {
      type: DataTypes.STRING(250),
      allowNull: true,
      defaultValue: "",
      comment: "Dokumen Dakwaan: form upload"
    },
    tanggal_rencana_perdamaian: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal Penerimaan Rencana Perdamaian: isian tanggal"
    },
    tanggal_pengesahan_perdamaian: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal Pengesahan Perdamaian: isian tanggal"
    },
    tanggal_penyelesaian_mediasi: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal Penyelesaian Mediasi: isian tanggal"
    },
    tanggal_penyelesaian_konsiliasi: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal Penyelesaian Konsiliasi: isian tanggal"
    },
    perkara_rujukan_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      comment: "Id Perkara Rujukan: merujuk ke tabel perkara kolom perkara_id"
    },
    nomor_perkara_rujukan: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "",
      comment: "Nomor Perkara yang menjadi rujukan: merujuk ke tabel perkara kolom nomor_perkara (by system)"
    },
    tanggal_pendaftaran_rujukan: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal Pendaftaran Rujukan: merujuk ke tabel perkara kolom tanggal_pendaftaran (by system)"
    },
    catatan_pendaftaran: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Catatan Pendaftaran: isian bebas"
    },
    prodeo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
      comment: "Status Prodeo: 0=Tidak,1:Ya"
    },
    terdakwa_anak: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
      comment: "Terdakwa Anak-Anak: 0 Tidak 1=Ya"
    },
    tahapan_terakhir_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Id Tahapan Proses: merujuk ke tabel tahapan_proses kolom id (by system)"
    },
    tahapan_terakhir_text: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "",
      comment: "Nama Tahapan Terakhir: merujuk ke tabel tahapan_proses kolom nama (by system)"
    },
    proses_terakhir_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Id Proses Perkara Terakhir: menujuk ke tabel proses kolom id (by system)"
    },
    proses_terakhir_text: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: "",
      comment: "Proses Perkara Terakhir: menujuk ke tabel proses kolom Nama(by system)"
    },
    nilai_sengketa: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
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
      defaultValue: "",
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
      defaultValue: "",
      comment: "Diperbaharui Oleh: (by system)"
    },
    diperbaharui_tanggal: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Diperbaharui Tanggal: (by system)"
    }
  }, {
    sequelize,
    tableName: 'perkara',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "perkara_id" },
        ]
      },
      {
        name: "nomor_perkara",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nomor_perkara" },
        ]
      },
      {
        name: "jenis_perkara_id",
        using: "BTREE",
        fields: [
          { name: "jenis_perkara_id" },
        ]
      },
      {
        name: "nomor_indeks",
        using: "BTREE",
        fields: [
          { name: "nomor_indeks" },
        ]
      },
      {
        name: "alur_perkara_id",
        using: "BTREE",
        fields: [
          { name: "alur_perkara_id" },
        ]
      },
      {
        name: "tanggal_pendaftaran",
        using: "BTREE",
        fields: [
          { name: "tanggal_pendaftaran" },
        ]
      },
      {
        name: "tahapan_terakhir_id",
        using: "BTREE",
        fields: [
          { name: "tahapan_terakhir_id" },
        ]
      },
      {
        name: "proses_terakhir_id",
        using: "BTREE",
        fields: [
          { name: "proses_terakhir_id" },
        ]
      },
      {
        name: "diinput_tanggal",
        using: "BTREE",
        fields: [
          { name: "diinput_tanggal" },
        ]
      },
      {
        name: "diperbaharui_tanggal",
        using: "BTREE",
        fields: [
          { name: "diperbaharui_tanggal" },
        ]
      },
    ]
  });
  perkara.associate = ({ perkara_akta_cerai, perkara_jadwal_sidang }) => {
    perkara.hasOne(perkara_akta_cerai, { foreignKey: "perkara_id" })
    perkara.hasMany(perkara_jadwal_sidang, { foreignKey: "perkara_id", sourceKey: "perkara_id" })
  }
  return perkara;
};
