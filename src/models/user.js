const {DataTypes} = require('sequelize');
const sequelize = require('../lib/db');

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    Salt: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    Token: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "user",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{name: "id"}],
      },
    ],
  }
);

module.exports = User;
