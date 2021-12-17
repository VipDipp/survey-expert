const express = require('express');
const questionTypeController = require('../controllers/QuestionType.js');
const questionTypeRouter = express.Router();

questionTypeRouter
    .route('/')
    .get(questionTypeController.getAllQuestionType)
    .post(questionTypeController.createQuestionType);

questionTypeRouter
    .route('/:id')
    .get(questionTypeController.getQuestionType)
    .patch(questionTypeController.updateQuestionType)
    .delete(questionTypeController.deleteQuestionType);

module.exports = questionTypeRouter;
