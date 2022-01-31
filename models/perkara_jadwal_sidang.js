const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  perkara_jadwal_sidang = sequelize.define('perkara_jadwal_sidang', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Primary key: (by system)"
    },
    perkara_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      comment: "Id Perkara: merujuk ke tabel perkara kolom perkara_id",
      references: {
        model: 'perkara',
        key: 'perkara_id'
      }
    },
    verzet: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "T",
      comment: "flag untuk sidang verzet\/biasa (by system)"
    },
    keberatan: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "T",
      comment: "flag untuk sidang perkara keberatan"
    },
    ikrar_talak: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "T"
    },
    urutan: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "Urutan Jadwal Sidang Salam Satu Hari yang sama: (by system)"
    },
    tanggal_sidang: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Tanggal Sidang: isian tanggal"
    },
    jam_sidang: {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "Mulai Jam Sidang: isian format jam:menit"
    },
    sampai_jam: {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "Sampai Jam Sidang : isian format jam:menit"
    },
    agenda_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Agenda Sidang : merujuk ke tabel agenda_sidang dengan pemisah koma"
    },
    agenda: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "Agenda Sidang: isian bebas"
    },
    ruangan_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "id Ruangan Sidang: merujuk ke tabel ruangan_sidang kolom id",
      references: {
        model: 'ruangan_sidang',
        key: 'id'
      }
    },
    ruangan: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Ruangan Sidang: merujuk ke tabel ruangan_sidang kolom nama (by system)"
    },
    sidang_keliling: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "T",
      comment: "Y dan T"
    },
    dihadiri_oleh: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ditunda: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "T",
      comment: "Sidang Ditunda: pilihan Y=Ya; T=Tidak"
    },
    alasan_ditunda: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "Alasan Ditunda: isian bebas"
    },
    sidang_ditempat: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
      comment: "Sidang Di Tempat: 0=Tidak, 1=Ya"
    },
    sifat_sidang: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "Y",
      comment: "Y: Dibuka Untuk Umum, T: Tertutup Untuk Umum"
    },
    keterangan: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "Keterangan: isian bebas"
    },
    edoc_bas: {
      type: DataTypes.STRING(250),
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
    tableName: 'perkara_jadwal_sidang',
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
        name: "verzet",
        using: "BTREE",
        fields: [
          { name: "verzet" },
        ]
      },
      {
        name: "perkara_id",
        using: "BTREE",
        fields: [
          { name: "perkara_id" },
        ]
      },
      {
        name: "ruangan_id",
        using: "BTREE",
        fields: [
          { name: "ruangan_id" },
        ]
      },
      {
        name: "tanggal_sidang",
        using: "BTREE",
        fields: [
          { name: "tanggal_sidang" },
        ]
      },
      {
        name: "jam_sidang",
        using: "BTREE",
        fields: [
          { name: "jam_sidang" },
        ]
      },
    ]
  });
  perkara_jadwal_sidang.associate = ({ perkara, perkara_pihak1 }) => {
    perkara_jadwal_sidang.belongsTo(perkara, { foreignKey: "perkara_id", sourceKey: "perkara_id" });
    perkara_jadwal_sidang.hasOne(perkara_pihak1, { through: perkara, foreignKey: "perkara_id", sourceKey: "perkara_id" })
  }
  return perkara_jadwal_sidang;
};
