const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const perkara_akta_cerai = sequelize.define(
    "perkara_akta_cerai",
    {
      perkara_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "perkara",
          key: "perkara_id",
        },
      },
      tahun_akta_cerai: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      nomor_urut_akta_cerai: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      nomor_akta_cerai: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      tgl_akta_cerai: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      no_seri_akta_cerai: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      jenis_cerai: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      faktor_perceraian_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      qobla_bada: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      perceraian_ke: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      keadaan_istri: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      tgl_penyerahan_akta_cerai: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      tgl_penyerahan_akta_cerai_pihak2: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      akta_cerai_dok: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      blangko_akta_cerai: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0,
      },
      diedit_oleh: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      diedit_tanggal: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      diinput_oleh: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      diinput_tanggal: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      diperbaharui_oleh: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      diperbaharui_tanggal: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "perkara_akta_cerai",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "perkara_id" }],
        },
      ],
    }
  );
  perkara_akta_cerai.associate = ({ perkara, perkara_pihak1 }) => {
    perkara_akta_cerai.belongsTo(perkara, {
      foreignKey: "perkara_id",
    });

    perkara_akta_cerai.belongsTo(perkara_pihak1, {
      through: perkara,
      foreignKey: "perkara_id",
      sourceKey: "perkara_id",
    });
  };
  return perkara_akta_cerai;
};
