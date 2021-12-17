const { QuestionType } = require("../models/model");

exports.getQuestionType = async (req, res) => {
  try {
    const id = req.params.id;
    const aQuestionType = await QuestionType.findOne({
      where: {
        id,
      },
    });
    return res.json(aQuestionType);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.deleteQuestionType = async (req, res) => {
  try {
    const id = req.params.id;
    const aQuestionType = await QuestionType.destroy({
      where: {
        id,
      },
    });
    return res.json(aQuestionType);
  } catch (e) {
    return res.json({ message: e.message });
  }
};
exports.getAllQuestionType = async (req, res) => {
  try {
    const aQuestionType = await QuestionType.findAll();
    return res.json(aQuestionType);
  } catch (e) {
    return res.json({ message: e.message });
  }
};
exports.createQuestionType = async (req, res) => {
  try {
    const aQuestionType = await QuestionType.create(req.body);

    return res.json(aQuestionType);
  } catch (e) {
    return res.json({ message: e.message });
  }
};
exports.updateQuestionType = async (req, res) => {
  try {
    const id = req.params.id;
    const aQuestionType = await QuestionType.findOne({
      where: {
        id,
      },
    });
    aQuestionType.update(req.body);
    aQuestionType.save();
    return res.json(aQuestionType);
  } catch (e) {
    return res.json({ message: e.message });
  }
};