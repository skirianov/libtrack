const express = require('express');
const cors = require('cors');
require('express-async-errors');
const mongoose = require('mongoose');
const config = require('./utils/config');
const loginRouter = require('./controllers/login');
const usersRouter = require('./controllers/users');

const app = express();

mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
  .then(() => {
    console.log(`connected to MongoDB`)
  })
  .catch((error) => {
    console.log(`error connecting to MongoDB ${error.message}`)
  });

app.use(cors());
app.use(express.json());

app.use('/api/login', loginRouter);
app.use('/api/users', usersRouter);

module.exports = app;
