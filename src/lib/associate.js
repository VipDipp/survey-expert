const Answer = require('../models/answer');
const AnswerOption = require('../models/answeroption');
const BlackListedUser = require('../models/blacklisteduser');
const Organization = require('../models/organization');
const Poll = require('../models/poll');
const PollFeedback = require('../models/pollfeedback');
const PollResult = require('../models/pollresult');
const PollType = require('../models/polltype');
const Question = require('../models/question');
const QuestionFeedback = require('../models/questionfeedback');
const QuestionType = require('../models/questiontype');
const WhiteListedUser = require('../models/whitelisteduser');
const User = require('../models/user');

const associate = () => {
    Answer.belongsToMany(Pollfeedback, {
      as: "PollFeedback_id_pollfeedbacks",
      through: Questionfeedback,
      foreignKey: "Answer_id",
      otherKey: "PollFeedback_id",
    });
    Organization.belongsToMany(User, {
      as: "User_Id_users",
      through: Blacklisteduser,
      foreignKey: "Organization_id",
      otherKey: "User_Id",
    });
    Organization.belongsToMany(User, {
      as: "User_Id_user_whitelistedusers",
      through: Whitelisteduser,
      foreignKey: "Organization_id",
      otherKey: "User_Id",
    });
    Poll.belongsToMany(Questiontype, {
      as: "QuestionType_id_questiontypes",
      through: Question,
      foreignKey: "Poll_id",
      otherKey: "QuestionType_id",
    });
    Poll.belongsToMany(User, {
      as: "User_id_users",
      through: Pollresult,
      foreignKey: "Poll_id",
      otherKey: "User_id",
    });
    Pollfeedback.belongsToMany(Answer, {
      as: "Answer_id_answers",
      through: Questionfeedback,
      foreignKey: "PollFeedback_id",
      otherKey: "Answer_id",
    });
    Pollresult.belongsToMany(Question, {
      as: "Question_Id_questions",
      through: Answer,
      foreignKey: "PollResult_id",
      otherKey: "Question_Id",
    });
    Pollresult.belongsToMany(User, {
      as: "Creator_Id_users",
      through: Pollfeedback,
      foreignKey: "PollResult_Id",
      otherKey: "Creator_Id",
    });
    Question.belongsToMany(Pollresult, {
      as: "PollResult_id_pollresults",
      through: Answer,
      foreignKey: "Question_Id",
      otherKey: "PollResult_id",
    });
    Questiontype.belongsToMany(Poll, {
      as: "Poll_id_poll_questions",
      through: Question,
      foreignKey: "QuestionType_id",
      otherKey: "Poll_id",
    });
    User.belongsToMany(Organization, {
      as: "Organization_id_organizations",
      through: Blacklisteduser,
      foreignKey: "User_Id",
      otherKey: "Organization_id",
    });
    User.belongsToMany(Organization, {
      as: "Organization_id_organization_whitelistedusers",
      through: Whitelisteduser,
      foreignKey: "User_Id",
      otherKey: "Organization_id",
    });
    User.belongsToMany(Poll, {
      as: "Poll_id_polls",
      through: Pollresult,
      foreignKey: "User_id",
      otherKey: "Poll_id",
    });
    User.belongsToMany(Pollresult, {
      as: "PollResult_Id_pollresults",
      through: Pollfeedback,
      foreignKey: "Creator_Id",
      otherKey: "PollResult_Id",
    });
    Questionfeedback.belongsTo(Answer, { as: "Answer", foreignKey: "Answer_id" });
    Answer.hasMany(Questionfeedback, {
      as: "questionfeedbacks",
      foreignKey: "Answer_id",
    });
    Blacklisteduser.belongsTo(Organization, {
      as: "Organization",
      foreignKey: "Organization_id",
    });
    Organization.hasMany(Blacklisteduser, {
      as: "blacklistedusers",
      foreignKey: "Organization_id",
    });
    Poll.belongsTo(Organization, {
      as: "Organization",
      foreignKey: "Organization_id",
    });
    Organization.hasMany(Poll, { as: "polls", foreignKey: "Organization_id" });
    Whitelisteduser.belongsTo(Organization, {
      as: "Organization",
      foreignKey: "Organization_id",
    });
    Organization.hasMany(Whitelisteduser, {
      as: "whitelistedusers",
      foreignKey: "Organization_id",
    });
    Pollresult.belongsTo(Poll, { as: "Poll", foreignKey: "Poll_id" });
    Poll.hasMany(Pollresult, { as: "pollresults", foreignKey: "Poll_id" });
    Question.belongsTo(Poll, { as: "Poll", foreignKey: "Poll_id" });
    Poll.hasMany(Question, { as: "questions", foreignKey: "Poll_id" });
    Questionfeedback.belongsTo(Pollfeedback, {
      as: "PollFeedback",
      foreignKey: "PollFeedback_id",
    });
    Pollfeedback.hasMany(Questionfeedback, {
      as: "questionfeedbacks",
      foreignKey: "PollFeedback_id",
    });
    Answer.belongsTo(Pollresult, {
      as: "PollResult",
      foreignKey: "PollResult_id",
    });
    Pollresult.hasMany(Answer, { as: "answers", foreignKey: "PollResult_id" });
    Pollfeedback.belongsTo(Pollresult, {
      as: "PollResult",
      foreignKey: "PollResult_Id",
    });
    Pollresult.hasMany(Pollfeedback, {
      as: "pollfeedbacks",
      foreignKey: "PollResult_Id",
    });
    Poll.belongsTo(polltype, { as: "PollType", foreignKey: "PollType_Id" });
    polltype.hasMany(Poll, { as: "polls", foreignKey: "PollType_Id" });
    Answer.belongsTo(Question, { as: "Question", foreignKey: "Question_Id" });
    Question.hasMany(Answer, { as: "answers", foreignKey: "Question_Id" });
    Answeroption.belongsTo(Question, {
      as: "Question",
      foreignKey: "Question_id",
    });
    Question.hasMany(Answeroption, {
      as: "answeroptions",
      foreignKey: "Question_id",
    });
    Question.belongsTo(Questiontype, {
      as: "QuestionType",
      foreignKey: "QuestionType_id",
    });
    Questiontype.hasMany(Question, {
      as: "questions",
      foreignKey: "QuestionType_id",
    });
    Blacklisteduser.belongsTo(User, { as: "User", foreignKey: "User_Id" });
    User.hasMany(Blacklisteduser, {
      as: "blacklistedusers",
      foreignKey: "User_Id",
    });
    Organization.belongsTo(User, { as: "Creator", foreignKey: "Creator_Id" });
    User.hasMany(Organization, { as: "organizations", foreignKey: "Creator_Id" });
    Poll.belongsTo(User, { as: "Creator", foreignKey: "Creator_Id" });
    User.hasMany(Poll, { as: "polls", foreignKey: "Creator_Id" });
    Pollfeedback.belongsTo(User, { as: "Creator", foreignKey: "Creator_Id" });
    User.hasMany(Pollfeedback, { as: "pollfeedbacks", foreignKey: "Creator_Id" });
    Pollresult.belongsTo(User, { as: "User", foreignKey: "User_id" });
    User.hasMany(Pollresult, { as: "pollresults", foreignKey: "User_id" });
    Whitelisteduser.belongsTo(User, { as: "User", foreignKey: "User_Id" });
    User.hasMany(Whitelisteduser, {
      as: "whitelistedusers",
      foreignKey: "User_Id",
    });
};

module.exports = associate;
