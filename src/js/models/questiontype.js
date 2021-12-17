const {DataTypes} = require('sequelize');
const sequelize = require('../lib/db');

const QuestionType = sequelize.define(
  'questiontype',
  {
    id: {
      autoIncrement: true,
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
    tableName: 'questiontype',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          {name: "id"},
        ]
      },
    ]
  }
);

module.exports = QuestionType;