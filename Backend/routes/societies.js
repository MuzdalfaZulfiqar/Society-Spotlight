// express setup
const express = require("express");
// get the society schema
const Society = require("../models/Society");
// get the router
const router = express.Router();
// express-validator setup
const { body, validationResult } = require("express-validator");
let success = true;

// route - 1 create a society
router.post(
  "/createSociety",
  [
    body("name", "There must be a name for the society").exists(),
    body("tagline", "The tagline cannot be empty").isLength({ min: 1 }),
  ],
  async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      success = false;
      return res.status(400).json({ success, error: errors });
    }

    try {
      let society = await Society.create({
        name: req.body.name,
        category: req.body.category,
        tagline: req.body.tagline,
        imgURL: req.body.imgURL,
      });
      res.send({success, society});
    } catch (error) {
      res.status(400).json({ success, error: error.message });
    }
  }
);

// route - 2 update a society
router.put(
  "/updateSociety/:id",
  [
    body("name", "There must be a name for the society").exists(),
    body("tagline", "The tagline cannot be empty").isLength({ min: 1 }),
  ],
  async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      success = false;
      return res.status(400).json({ success, error: errors });
    }

    let { name, category, tagline, imgURL } = req.body;
    try {
      // first check if the society exists
      let societyId = req.params.id;
      let society = await Society.findById({ _id: societyId });
      if (!society) {
        success = false;
        return res.status(400).json({ success, error: "No society found" });
      }

      // found the society, now update in DB
      let updatedSociety = {};

      if (name) updatedSociety.name = name;
      if (category) updatedSociety.category = category;
      if (tagline) updatedSociety.tagline = tagline;
      if (imgURL) updatedSociety.imgURL = imgURL;

      let dbGotSociety = await Society.findByIdAndUpdate(
        societyId,
        { $set: updatedSociety },
        { new: true }
      );
      success = true;
      res.send({ success, dbGotSociety });
    } catch (error) {
      success = false;
      return res.status(400).json({ success, error: error.message });
    }
  }
);

// route - 3 get all societies
router.get("/getAll", async (req, res) => {
  try {
    // get all societies
    let societies = await Society.find({});
    res.send(societies);
  } catch (error) {
    return res.status(400).json({ success, error: "Unable to fetch societies" });
  }
});

// route - 4 get societies by category
router.get("/getAll/:category", async (req, res) => {
  try {
    let searchCategory = req.params.category;
    let societies = await Society.find({ category: searchCategory });
    res.send(societies);
  } catch (error) {
    return res.status(400).json({ success, error: "Unable to fetch societies by category" });
  }
});

// route - 5 get a single society
router.get("/getSociety/:id", async (req, res) => {
  try {
    let society = await Society.findOne({ _id: req.params.id });
    if (!society) {
      success = false;
      return res.status(400).json({ success, error: "No society found" });
    }
    res.send(society);
  } catch (error) {
    return res.status(400).json({ success, error: "Unable to fetch the society" });
  }
});

// route - 6 delete a society
router.delete("/deleteSociety/:id", async (req, res) => {
  try {
    let deleteid = req.params.id;
    let society = await Society.findById({ _id: deleteid });
    if (!society) {
      success = false;
      return res.status(400).json({ success, error: "No society found" });
    }

    success = true;
    let deletedSociety = await Society.findByIdAndDelete(deleteid);
    res.json({ success, deletedSociety });
  } catch (error) {
    return res.status(400).json({ success, error: "Unable to delete the society" });
  }
});

module.exports = router;
