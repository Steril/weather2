const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  minTemp: {
    type: Number,
    required: true
  },
  maxTemp: {
    type: Number,
    required: true
  },
  precipitation: {
    type: Number,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Location', locationSchema);