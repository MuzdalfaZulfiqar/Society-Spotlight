const mongoose = require("mongoose");
const { Schema } = mongoose;

let societySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    tagline: {
        type: String
    },
    imgURL: {
        type: String
    }
});

const Society = mongoose.model("Society", societySchema);
module.exports = Society;
