const express = require("express");
const path = require("path");
const multer = require("multer");
const Event = require("../models/Event");
const { body, validationResult } = require("express-validator");
const router = express.Router();

// Configure Multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Folder where the file will be uploaded
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Naming convention for the uploaded file
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true); // If valid type, allow the file
    } else {
      cb(new Error("Invalid file type"), false); // Reject invalid file types
    }
  },
});

// // Serve static files from the 'uploads' folder
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



// Route 1: Create an event
// Add this to your existing route
router.post("/createEvent", upload.single("image"), [
    body("title", "There must be a title for the event").exists(),
    body("description", "The description cannot be empty").isLength({ min: 1 }),
    body("date", "The date must be a valid date").isISO8601(),
    body("location", "Location cannot be empty").exists(),
], async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        success = false;
        return res.status(400).json({ success, error: errors });
    }

    try {
        // Handle the uploaded image path
        let imagePath = req.file ? req.file.path : null; // Get the file path after uploading

        // Parse the date before saving it
        const parsedDate = new Date(req.body.date);
        if (isNaN(parsedDate)) {
            return res.status(400).json({ success: false, error: "Invalid date format" });
        }

        // Create the event with the parsed date and image path
        let event = await Event.create({
            title: req.body.title,
            description: req.body.description,
            date: parsedDate,
            location: req.body.location,
            image: imagePath, // Store the file path in the database
        });

        res.send({success, event}); // Send the event data back as the response
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Server error" });
    }
});

  

// Route 2: Update an event
router.put(
  "/updateEvent/:id",
  upload.single("image"),
  async (req, res) => {
    const { title, description, date, location } = req.body;
    const image = req.file ? req.file.path : null;

    try {
      const event = await Event.findById(req.params.id);

      if (!event) {
        return res.status(404).json({ success: false, error: "Event not found" });
      }

      const updatedEvent = {
        title: title || event.title,
        description: description || event.description,
        date: date || event.date,
        location: location || event.location,
        image: image || event.image,
      };

      const savedEvent = await Event.findByIdAndUpdate(req.params.id, updatedEvent, { new: true });
      res.json({ success: true, savedEvent });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
);

// Route 3: Get all events
router.get("/getAllEvents", async (req, res) => {
  try {
    const events = await Event.find({});
    res.json(events);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Route 4: Get a single event by ID
router.get("/getEvent/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ success: false, error: "Event not found" });
    }

    res.json(event);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Route 5: Delete an event
router.delete("/deleteEvent/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ success: false, error: "Event not found" });
    }

    await Event.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
