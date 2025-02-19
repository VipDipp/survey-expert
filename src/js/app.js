'use strict'

const dotenv = require('dotenv').config();
const express = require('express');
const server = express();
server.use(express.json());

// add routes
const routes = require('./routes');
for (const route of routes) {
    server[route.method](route.path, route.func);
}

// connect to database
const sequelizeObject = require('./db');

// start server
void async function() {
  await sequelizeObject.sync({ force: false });

  server.listen(process.env.EXPRESS_PORT, () => {
    console.log(`Server started!`);
  });
}();
