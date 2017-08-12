const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const _ = require('lodash');

const { mongoose } = require('./../db/mongoose.js');
const { Sticky } = require('./../models/sticky');
const { authenticate } = require('./../middleware/authenticate');

const router = express.Router();

router.post('/', authenticate, async (req, res) => {
  try {
    const sticky = new Sticky({
      text: req.body.text,
      _createdBy: req.user._id
    });

    const savedSticky = await sticky.save();
    res.send(savedSticky);
  }
  catch (e) {
    res.status(400).send();
  }
});

router.get('/', authenticate, async (req, res) => {
  try {
    const stickies = await Sticky.find({
      _createdBy: req.user._id
    });
    res.send({stickies});
  }
  catch (e) {
    res.status(400).send();
  }
});

router.patch('/:id', authenticate, async (req, res) => {
  try {
    const id = req.params.id;
    const body = _.pick(req.body, ['isCompleted']);
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    const sticky = await Sticky.findOneAndUpdate({_id: id, _createdBy: req.user._id}, {$set: body}, {returnNewDocument: true});
    if (!sticky) {
      return res.status(404).send();
    }
    res.send({sticky});
  }
  catch (e) {
    res.status(400).json({e});
  }
});

router.delete('/:id', authenticate, async (req, res) => {
  try {
    const id = req.params.id;

    if (!ObjectID.isValid(id)) {
      res.status(404).send();
    }

    const sticky = await Sticky.findOneAndRemove({
      _id: id,
      _createdBy: req.user._id
    });

    if (sticky) {
      res.send({sticky});
    }
    else {
      res.status(404).send();
    }
  }
  catch (e) {
    res.status(400).send();
  }
});

router.delete('/', authenticate, async (req, res) => {
  try {
    await Sticky.remove({_createdBy: req.user._id});
    res.send();
  }
  catch (e) {
    res.status(400).send();
  }
});

module.exports = router;