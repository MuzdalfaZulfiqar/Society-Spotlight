const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// Route to handle contact form submission
router.post("/", async (req, res) => {
    try {
        const { fullname, email, phone, message } = req.body;

        // Validate required fields
        if (!fullname || !email || !message) {
            return res.status(400).json({ error: "Please fill in all required fields." });
        }

        // Save the contact data
        const contact = new Contact({
            fullname,
            email,
            phone,
            message,
        });

        await contact.save();
        res.status(201).json({ message: "Contact form submitted successfully!" });
    } catch (error) {
        console.error("Error saving contact form data:", error);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
});

module.exports = router;
