const express = require("express");
const bodyParser = require("body-parser");
const path = require("path"); // Ensure you require path module for file path handling
const app = express();

// CORS setup
var cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Get MongoDB connection
const connectToMongo = require("./db");
connectToMongo(); // Execute the MongoDB connection

// JSON parsing middleware (should be above the routes)
app.use(express.json());

// Serve static files from the 'uploads' folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Import routes after app is initialized
const userRoute = require("./routes/User");
const joinRequestRoute = require("./routes/JoinRequest");
const contactRoute = require("./routes/Contact");
const societyRoute = require("./routes/societies");
const eventRoute = require("./routes/eventRoutes");

// Use the routes
app.use("/api/user", userRoute);
app.use("/api/joinRequest", joinRequestRoute);
app.use("/api/contact", contactRoute);
app.use("/api/society", societyRoute);
app.use("/api/event", eventRoute);

// Mention port
let port = 3001;
app.listen(port, () => {
    console.log("App is running on port " + port);
});
