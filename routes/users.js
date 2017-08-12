const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const _ = require('lodash');

const { mongoose } = require('./../db/mongoose.js');
const { User } = require('./../models/user');
const { authenticate } = require('./../middleware/authenticate');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const body = _.pick(req.body, ['email', 'password']);
    const user = new User(body);

    await user.save();
    const token = await user.generateAuthToken();
    res.header('x-auth', token).send(user);
  }
  catch (e) {
    res.status(400).json({success: false, e});
  }
});

router.get('/me', authenticate, (req, res) => {
  try {
    res.send(req.user);
  }
  catch(e) {
    res.status(400).send();
  }
});

router.post('/login', async (req, res) => {
  try {
    const body = _.pick(req.body, ['email', 'password']);
    const user = await User.findByCredentials(body.email, body.password);
    const token = await user.generateAuthToken();
    res.header('x-auth', token).send(user);
  }
  catch (e) {
    res.status(400).send();
  }
});

router.delete('/me/token', authenticate, async (req, res) => {
  try {
    await req.user.removeToken(req.token);
    res.send();
  }
  catch (e) {
    res.status(400).send();
  }
});

module.exports = router;