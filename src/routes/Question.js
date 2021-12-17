    const express = require('express');
    const questionController = require('../controllers/Question.js');
    const questionRouter = express.Router();

    questionRouter
        .get(questionController.getAllQuestion)
        .route('/')
        .post(questionController.createQuestion);

    questionRouter
        .get(questionController.getQuestion)
        .route('/:id')
        .patch(questionController.updateQuestion)
        .delete(questionController.deleteQuestion);

    module.exports = questionRouter;