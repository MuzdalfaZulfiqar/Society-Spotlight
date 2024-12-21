// routes/joinRequest.js
const express = require("express");
const router = express.Router();
const JoinRequest = require("../models/JoinNowSchema");

// POST request to handle the form submission
router.post("/", async (req, res) => {
  const { name, email, societyName, message, semester, department } = req.body;

  try {
    // Create a new join request
    const joinRequest = new JoinRequest({
      name,
      email,
      societyName,
      message,
      semester,
      department
    });

    // Save the request to the database
    await joinRequest.save();
    res.status(201).json({ message: "Join request submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting join request: " + error.message });
  }
});

module.exports = router;
