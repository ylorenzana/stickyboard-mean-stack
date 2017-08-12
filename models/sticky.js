const mongoose = require('mongoose');

const Sticky = mongoose.model('Sticky', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  _createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

module.exports = { Sticky };