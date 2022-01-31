const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const perkara_pembayaran = sequelize.define('perkara_biaya', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Primary key: (by system)"
    },
    id_pembiayaan: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1,
      comment: "1:reguler;2:Prodeo DIPA;3:Prodeo Murni"
    },
    perkara_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      comment: "Id Perkara: merujuk ke tabel perkara kolom perkara_id (by system)",
      references: {
        model: 'perkara',
        key: 'perkara_id'
      }
    },
    tahapan_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Tahapan Proses : merujuk ke tabel tahapan_proses (by system)"
    },
    kategori_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Kategori Biaya: merujuk ke tabel kategori_biaya kolom id"
    },
    jenis_biaya_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Jenis Biaya: merujuk ke tabel jenis_biaya kolom id",
      references: {
        model: 'jenis_biaya',
        key: 'id'
      }
    },
    pihak_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "ID Pihak pembayar"
    },
    pihak_ke: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Pihak Pembayar ke (1=Penggugat, 2=Tergugat)"
    },
    urutan: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    jenis_transaksi: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: "Jenis Transaksi: -1=Pengeluaran; 1=Penerimaan"
    },
    tanggal_transaksi: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Tanggal Tansaksi: isian tanggal"
    },
    uraian: {
      type: DataTypes.STRING(500),
      allowNull: false,
      defaultValue: "",
      comment: "Uraian Transaksi: isian bebas"
    },
    jumlah: {
      type: DataTypes.DECIMAL(16, 2),
      allowNull: false,
      comment: "Jumlah nominal tansaksi(dalam Rp)"
    },
    sisa: {
      type: DataTypes.DECIMAL(16, 2),
      allowNull: true,
      comment: "Jumlah Nominal Sisa: isian bilangan (Rp)"
    },
    keterangan: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "Keterangan: isian bebas"
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
    tableName: 'perkara_biaya',
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
        name: "perkara_id",
        using: "BTREE",
        fields: [
          { name: "perkara_id" },
        ]
      },
      {
        name: "jenis_biaya_id",
        using: "BTREE",
        fields: [
          { name: "jenis_biaya_id" },
        ]
      },
      {
        name: "jumlah",
        using: "BTREE",
        fields: [
          { name: "jumlah" },
        ]
      },
      {
        name: "urutan",
        using: "BTREE",
        fields: [
          { name: "urutan" },
        ]
      },
      {
        name: "tahapan_id",
        using: "BTREE",
        fields: [
          { name: "tahapan_id" },
        ]
      },
      {
        name: "kategori_id",
        using: "BTREE",
        fields: [
          { name: "kategori_id" },
        ]
      },
      {
        name: "tanggal_transaksi",
        using: "BTREE",
        fields: [
          { name: "tanggal_transaksi" },
        ]
      },
    ]
  });

  perkara_pembayaran.associate = ({ perkara }) => {
    perkara_pembayaran.belongsTo(perkara, { foreignKey: 'perkara_id' })
  }

  return perkara_pembayaran;
};
