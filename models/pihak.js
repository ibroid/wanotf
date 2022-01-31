const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const pihak = sequelize.define('pihak', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Primary key (by system)"
    },
    jenis_pihak_id: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      comment: "Jenis Pihak: merujuk ke tabel jenis_pihak kolom id",
      references: {
        model: 'jenis_pihak',
        key: 'id'
      }
    },
    jenis_indentitas: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Jenis identitas: diisi dengan KTP\/SIM\/PASPOR"
    },
    nomor_indentitas: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Nomor Identitas: isian bebas"
    },
    nama: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "Nama: isian bebas"
    },
    tempat_lahir: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Tempat Lahir: isian bebas"
    },
    tanggal_lahir: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Tanggal lahir: selisih tanggal lahir dengan tanggal hari ini tidak boleh kurang dari 5 tahun"
    },
    jenis_kelamin: {
      type: DataTypes.STRING(1),
      allowNull: true,
      comment: "Jenis Kelamin: L= Laki-laki, P=Perempuan"
    },
    golongan_darah: {
      type: DataTypes.STRING(2),
      allowNull: true,
      comment: "Golongan darah: A\/B\/AB\/O"
    },
    alamat: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "Alamat: Isian bebas"
    },
    rtrw: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "RT\/RW: isian bebas"
    },
    kelurahan: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Kelurahan\/Desa: isian bebas"
    },
    kecamatan: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Kecamatan: Isian bebas"
    },
    kabupaten_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Kabupaten\/Kota: merujuk ke tabel kabupaten kolom id",
      references: {
        model: 'kabupaten',
        key: 'id'
      }
    },
    kabupaten: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Kabupaten\/Kota: merujuk ke tabel kabupaten kolom nama(by system)"
    },
    propinsi_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Propinsi: merujuk ke tabel propinsi kolom id"
    },
    propinsi: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Propinsi: merujuk ke tabel propinsi kolom nama(by system)"
    },
    telepon: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Nomor telepon: isian bebas"
    },
    fax: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Nomor Fax: isian bebas"
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Alamat email: isan format email"
    },
    agama_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Agama: merujuk ke tabel agama kolom id",
      references: {
        model: 'agama',
        key: 'id'
      }
    },
    agama_nama: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Nama Agama: merujuk ke tabel agama kolom nama(by system)"
    },
    status_kawin: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      comment: "Statu Kawin: diisi dengan Kawin\/Belum Kawin"
    },
    pekerjaan: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Pekerjaan: isian bebas"
    },
    pendidikan_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Id Tingkat Pendidikan Terakhir: merujuk ke tabel tingkat_pendidikan kolom id",
      references: {
        model: 'tingkat_pendidikan',
        key: 'id'
      }
    },
    pendidikan: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Pendidikan terakhir: merujuk ke tabel pendidikan kolom kode"
    },
    warga_negara_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Id Negara: merujuk ke tabel negara kolom id",
      references: {
        model: 'negara',
        key: 'id'
      }
    },
    warga_negara: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Warga Negara: merujuk ke tabel negara kolom nama (by system)"
    },
    nama_ayah: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Nama Ayah: isian bebas"
    },
    nama_ibu: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Nama ibu: isian bebas"
    },
    keterangan: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Keterangan: isian bebas"
    },
    foto: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    difabel: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "T",
      comment: "Y=Ya, T = Tidak"
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
    tableName: 'pihak',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "nama",
        using: "BTREE",
        fields: [
          { name: "nama" },
        ]
      },
      {
        name: "jenis_pihak_id",
        using: "BTREE",
        fields: [
          { name: "jenis_pihak_id" },
        ]
      },
      {
        name: "kabupaten_id",
        using: "BTREE",
        fields: [
          { name: "kabupaten_id" },
        ]
      },
      {
        name: "agama_id",
        using: "BTREE",
        fields: [
          { name: "agama_id" },
        ]
      },
      {
        name: "warga_negara_id",
        using: "BTREE",
        fields: [
          { name: "warga_negara_id" },
        ]
      },
      {
        name: "pendidikan_id",
        using: "BTREE",
        fields: [
          { name: "pendidikan_id" },
        ]
      },
    ]
  });
  pihak.associate = ({ perkara_pihak1 }) => {
    pihak.hasOne(perkara_pihak1, {
      foreignKey: "pihak_id"
    })
  }
  return pihak
};
