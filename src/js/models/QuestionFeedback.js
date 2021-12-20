const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QuestionFeedback', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Comment: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PollFeedback_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PollFeedback',
        key: 'id'
      }
    },
    Answer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Answer',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'QuestionFeedback',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "PollFeedback_id" },
          { name: "Answer_id" },
        ]
      },
      {
        name: "fk_QuestionFeedback_PollFeedback1_idx",
        using: "BTREE",
        fields: [
          { name: "PollFeedback_id" },
        ]
      },
      {
        name: "fk_QuestionFeedback_Answer_idx",
        using: "BTREE",
        fields: [
          { name: "Answer_id" },
        ]
      },
    ]
  });
};
