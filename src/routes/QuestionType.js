const express = require('express');
const questionTypeController = require('../controllers/QuestionType.js');
const questionTypeRouter = express.Router();

questionTypeRouter
    .get(questionTypeController.getAllQuestionType)
    .route('/')
    .post(questionTypeController.createQuestionType);

questionTypeRouter
    .get(questionTypeController.getQuestionType)
    .route('/:id')
    .patch(questionTypeController.updateQuestionType)
    .delete(questionTypeController.deleteQuestionType);

module.exports = questionTypeRouter;