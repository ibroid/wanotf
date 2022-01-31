const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const perkara_pihak1 = sequelize.define('perkara_pihak1', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Primary key: (by system)"
    },
    perkara_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      comment: "Id Perkara: merujuk ke tabel perkara kolom perkara_id(by system)",
      references: {
        model: 'perkara',
        key: 'perkara_id'
      }
    },
    urutan: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Urutan: disi dengan bilangan"
    },
    pihak_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      comment: "Id Pihak: merujuk ke tabel pihak kolom id",
      references: {
        model: 'pihak',
        key: 'id'
      }
    },
    jenis_pihak_id: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      comment: "Id Jenis Pihak: merujuk ke tabel pihak kolom jenis_pihak_id(by system)"
    },
    nama: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "Nama: merujuk ke tabel pihak kolom nama(by system)"
    },
    alamat: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    keterangan: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Keterangan: Isian bebas"
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
      comment: "Diperbaiki Oleh: (by system)"
    },
    diperbaharui_tanggal: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Diperbaiki Tanggal: (by system)"
    }
  }, {
    sequelize,
    tableName: 'perkara_pihak1',
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
        name: "perkara_id",
        using: "BTREE",
        fields: [
          { name: "perkara_id" },
        ]
      },
      {
        name: "pihak_id",
        using: "BTREE",
        fields: [
          { name: "pihak_id" },
        ]
      },
    ]
  });
  perkara_pihak1.associate = ({ perkara, pihak }) => {
    perkara_pihak1.belongsTo(perkara, { foreignKey: "perkara_id" });
    perkara_pihak1.belongsTo(pihak, { foreignKey: "pihak_id" })
  }
  return perkara_pihak1
};
