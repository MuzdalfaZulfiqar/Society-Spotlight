const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
