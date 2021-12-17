const { Question } = require('../models/model');
exports.createQuestion = async (req, res) => {
  try {
    const aQuestion = await Question.create(req.body);

    return res.json(aQuestion);
  } catch (e) {
    return res.json({ message: e.message });
  }
};
exports.getQuestion = async (req, res) => {
  try {
    const id = req.params.id;
    const aQuestion = await Question.findOne({
      where: {
        id,
      },
    });
    return res.json(aQuestion);
  } catch (e) {
    return res.json({ message: e.message });
  }
};
exports.getAllQuestion = async (req, res) => {
  try {
    const aQuestion = await Question.findAll();
    return res.json(aQuestion);
  } catch (e) {
    return res.json({ message: e.message });
  }
};
exports.deleteQuestion = async (req, res) => {
  try {
    const id = req.params.id;
    const aQuestion = await Question.destroy({
      where: {
        id,
      },
    });
    return res.json(aQuestion);
  } catch (e) {
    return res.json({ message: e.message });
  }
};
exports.updateQuestion = async (req, res) => {
  try {
    const id = req.params.id;
    const aQuestion = await Question.findOne({
      where: {
        id,
      },
    });
    aQuestion.update(req.body);
    aQuestion.save();
    return res.json(aQuestion);
  } catch (e) {
    return res.json({ message: e.message });
  }
};