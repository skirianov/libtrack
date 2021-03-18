const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const User = require('../models/user');

usersRouter.get('/', async (request, response) => {
  const users = await User.find({});
  response.json(users);
})

usersRouter.post('/', async (request, response) => {
  const { body } = request;

  const passwordHash = await bcrypt.hash(body.password, 10);
  const newUser = new User({
    email: body.email,
    username: body.username,
    passwordHash,
  });
  console.log(newUser);
  await newUser.save();
  response
    .status(200)
    .send({ username: newUser.username})
});

module.exports = usersRouter;