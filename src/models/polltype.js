const {DataTypes} = require('sequelize');
const sequelize = require('../lib/db');

const PollType = sequelize.define(
  'polltype',
  {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'polltype',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          {name: "Id"},
        ]
      },
    ]
  }
);

module.exports = PollType;