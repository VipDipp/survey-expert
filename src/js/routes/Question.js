    const express = require('express');
    const questionController = require('../controllers/Question.js');
    const questionRouter = express.Router();

    questionRouter
        .route('/')
        .get(questionController.getAllQuestion)
        .post(questionController.createQuestion);

    questionRouter
        .route('/:id')
        .get(questionController.getQuestion)
        .patch(questionController.updateQuestion)
        .delete(questionController.deleteQuestion);

    module.exports = questionRouter;
