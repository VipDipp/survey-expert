const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PollResult', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Comment: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Poll_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Poll',
        key: 'id'
      }
    },
    User_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'PollResult',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "Poll_id" },
          { name: "User_id" },
        ]
      },
      {
        name: "PollResult_User_idx",
        using: "BTREE",
        fields: [
          { name: "User_id" },
        ]
      },
      {
        name: "PollResult_Poll_idx",
        using: "BTREE",
        fields: [
          { name: "Poll_id" },
        ]
      },
    ]
  });
};
