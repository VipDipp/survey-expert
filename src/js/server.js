const express = require('express');
const app = express();

const questionTypeRouter = require('./routes/QuestionType.js');
const questionRouter = require('./routes/Question.js');

app.use(express.json());
app.use('/questiontype', questionTypeRouter);
app.use('/question', questionRouter);

module.exports = app;