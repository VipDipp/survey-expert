var DataTypes = require("sequelize").DataTypes;
var _Answer = require("./Answer");
var _AnswerOption = require("./AnswerOption");
var _BlacklistedUser = require("./BlacklistedUser");
var _Organization = require("./Organization");
var _Poll = require("./Poll");
var _PollFeedback = require("./PollFeedback");
var _PollResult = require("./PollResult");
var _PollType = require("./PollType");
var _Question = require("./Question");
var _QuestionFeedback = require("./QuestionFeedback");
var _QuestionType = require("./QuestionType");
var _User = require("./User");
var _WhitelistedUser = require("./WhitelistedUser");

function initModels(sequelize) {
  var Answer = _Answer(sequelize, DataTypes);
  var AnswerOption = _AnswerOption(sequelize, DataTypes);
  var BlacklistedUser = _BlacklistedUser(sequelize, DataTypes);
  var Organization = _Organization(sequelize, DataTypes);
  var Poll = _Poll(sequelize, DataTypes);
  var PollFeedback = _PollFeedback(sequelize, DataTypes);
  var PollResult = _PollResult(sequelize, DataTypes);
  var PollType = _PollType(sequelize, DataTypes);
  var Question = _Question(sequelize, DataTypes);
  var QuestionFeedback = _QuestionFeedback(sequelize, DataTypes);
  var QuestionType = _QuestionType(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);
  var WhitelistedUser = _WhitelistedUser(sequelize, DataTypes);

  Answer.belongsToMany(PollFeedback, { as: 'PollFeedback_id_PollFeedbacks', through: QuestionFeedback, foreignKey: "Answer_id", otherKey: "PollFeedback_id" });
  Organization.belongsToMany(User, { as: 'User_Id_Users', through: BlacklistedUser, foreignKey: "Organization_id", otherKey: "User_Id" });
  Organization.belongsToMany(User, { as: 'User_Id_User_WhitelistedUsers', through: WhitelistedUser, foreignKey: "Organization_id", otherKey: "User_Id" });
  Poll.belongsToMany(QuestionType, { as: 'QuestionType_id_QuestionTypes', through: Question, foreignKey: "Poll_id", otherKey: "QuestionType_id" });
  Poll.belongsToMany(User, { as: 'User_id_Users', through: PollResult, foreignKey: "Poll_id", otherKey: "User_id" });
  PollFeedback.belongsToMany(Answer, { as: 'Answer_id_Answers', through: QuestionFeedback, foreignKey: "PollFeedback_id", otherKey: "Answer_id" });
  PollResult.belongsToMany(Question, { as: 'Question_Id_Questions', through: Answer, foreignKey: "PollResult_id", otherKey: "Question_Id" });
  PollResult.belongsToMany(User, { as: 'Creator_Id_Users', through: PollFeedback, foreignKey: "PollResult_Id", otherKey: "Creator_Id" });
  Question.belongsToMany(PollResult, { as: 'PollResult_id_PollResults', through: Answer, foreignKey: "Question_Id", otherKey: "PollResult_id" });
  QuestionType.belongsToMany(Poll, { as: 'Poll_id_Poll_Questions', through: Question, foreignKey: "QuestionType_id", otherKey: "Poll_id" });
  User.belongsToMany(Organization, { as: 'Organization_id_Organizations', through: BlacklistedUser, foreignKey: "User_Id", otherKey: "Organization_id" });
  User.belongsToMany(Organization, { as: 'Organization_id_Organization_WhitelistedUsers', through: WhitelistedUser, foreignKey: "User_Id", otherKey: "Organization_id" });
  User.belongsToMany(Poll, { as: 'Poll_id_Polls', through: PollResult, foreignKey: "User_id", otherKey: "Poll_id" });
  User.belongsToMany(PollResult, { as: 'PollResult_Id_PollResults', through: PollFeedback, foreignKey: "Creator_Id", otherKey: "PollResult_Id" });
  QuestionFeedback.belongsTo(Answer, { as: "Answer", foreignKey: "Answer_id"});
  Answer.hasMany(QuestionFeedback, { as: "QuestionFeedbacks", foreignKey: "Answer_id"});
  BlacklistedUser.belongsTo(Organization, { as: "Organization", foreignKey: "Organization_id"});
  Organization.hasMany(BlacklistedUser, { as: "BlacklistedUsers", foreignKey: "Organization_id"});
  Poll.belongsTo(Organization, { as: "Organization", foreignKey: "Organization_id"});
  Organization.hasMany(Poll, { as: "Polls", foreignKey: "Organization_id"});
  WhitelistedUser.belongsTo(Organization, { as: "Organization", foreignKey: "Organization_id"});
  Organization.hasMany(WhitelistedUser, { as: "WhitelistedUsers", foreignKey: "Organization_id"});
  PollResult.belongsTo(Poll, { as: "Poll", foreignKey: "Poll_id"});
  Poll.hasMany(PollResult, { as: "PollResults", foreignKey: "Poll_id"});
  Question.belongsTo(Poll, { as: "Poll", foreignKey: "Poll_id"});
  Poll.hasMany(Question, { as: "Questions", foreignKey: "Poll_id"});
  QuestionFeedback.belongsTo(PollFeedback, { as: "PollFeedback", foreignKey: "PollFeedback_id"});
  PollFeedback.hasMany(QuestionFeedback, { as: "QuestionFeedbacks", foreignKey: "PollFeedback_id"});
  Answer.belongsTo(PollResult, { as: "PollResult", foreignKey: "PollResult_id"});
  PollResult.hasMany(Answer, { as: "Answers", foreignKey: "PollResult_id"});
  PollFeedback.belongsTo(PollResult, { as: "PollResult", foreignKey: "PollResult_Id"});
  PollResult.hasMany(PollFeedback, { as: "PollFeedbacks", foreignKey: "PollResult_Id"});
  Poll.belongsTo(PollType, { as: "PollType", foreignKey: "PollType_Id"});
  PollType.hasMany(Poll, { as: "Polls", foreignKey: "PollType_Id"});
  Answer.belongsTo(Question, { as: "Question", foreignKey: "Question_Id"});
  Question.hasMany(Answer, { as: "Answers", foreignKey: "Question_Id"});
  AnswerOption.belongsTo(Question, { as: "Question", foreignKey: "Question_id"});
  Question.hasMany(AnswerOption, { as: "AnswerOptions", foreignKey: "Question_id"});
  Question.belongsTo(QuestionType, { as: "QuestionType", foreignKey: "QuestionType_id"});
  QuestionType.hasMany(Question, { as: "Questions", foreignKey: "QuestionType_id"});
  BlacklistedUser.belongsTo(User, { as: "User", foreignKey: "User_Id"});
  User.hasMany(BlacklistedUser, { as: "BlacklistedUsers", foreignKey: "User_Id"});
  Organization.belongsTo(User, { as: "Creator", foreignKey: "Creator_Id"});
  User.hasMany(Organization, { as: "Organizations", foreignKey: "Creator_Id"});
  Poll.belongsTo(User, { as: "Creator", foreignKey: "Creator_Id"});
  User.hasMany(Poll, { as: "Polls", foreignKey: "Creator_Id"});
  PollFeedback.belongsTo(User, { as: "Creator", foreignKey: "Creator_Id"});
  User.hasMany(PollFeedback, { as: "PollFeedbacks", foreignKey: "Creator_Id"});
  PollResult.belongsTo(User, { as: "User", foreignKey: "User_id"});
  User.hasMany(PollResult, { as: "PollResults", foreignKey: "User_id"});
  WhitelistedUser.belongsTo(User, { as: "User", foreignKey: "User_Id"});
  User.hasMany(WhitelistedUser, { as: "WhitelistedUsers", foreignKey: "User_Id"});

  return {
    Answer,
    AnswerOption,
    BlacklistedUser,
    Organization,
    Poll,
    PollFeedback,
    PollResult,
    PollType,
    Question,
    QuestionFeedback,
    QuestionType,
    User,
    WhitelistedUser,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
