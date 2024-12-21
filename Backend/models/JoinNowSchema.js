// models/JoinRequest.js
const mongoose = require("mongoose");

const joinRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  societyName: {
    type: String,
    required: true
  },
  message: {
    type: String
  },
  semester: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  }
});

const JoinRequest = mongoose.model("JoinRequest", joinRequestSchema);

module.exports = JoinRequest;
