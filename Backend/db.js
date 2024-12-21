const mongoose = require("mongoose");

// Replace with your MongoDB Atlas connection string
const mongoURI = "mongodb+srv://muzdalfa:muzdalfadb@cluster0.mpcou.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Spotlight";


function connectToMongo() {
    mongoose.connect(mongoURI)
    .then(() => {
        console.log("Connected to MongoDB  Successfully");
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB :", error);
    });
}

module.exports = connectToMongo;


