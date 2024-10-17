const express = require("express");
const Program = require("../models/program");
const Track = require("../models/track");
const router = express.Router();

router.get("/programs", async (req, res) => {
  try {
    const programs = await Program.find().populate("tracks");
    res.json(programs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching programs", error });
  }
});

router.get("/programs/:id", async (req, res) => {
  try {
    const program = await Program.findById(req.params.id).populate("tracks");
    if (!program) return res.status(404).json({ message: "Program not found" });
    res.json(program);
  } catch (error) {
    res.status(500).json({ message: "Error fetching program details", error });
  }
});

// // Fetch the list of programs
// router.get("/programs", async (req, res) => {
//   try {
//     // Use Mongoose projection to exclude _id and __v fields
//     const programs = await Program.find({}, { _id: 0, __v: 0 }).populate(
//       "tracks",
//       "-_id -__v"
//     ); // Exclude _id and __v from tracks as well
//     res.json(programs);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching programs", error });
//   }
// });

// // Fetch program details by ID
// router.get("/programs/:id", async (req, res) => {
//   try {
//     const program = await Program.findById(req.params.id, {
//       _id: 0,
//       __v: 0,
//     }).populate("tracks", "-_id -__v");
//     if (!program) return res.status(404).json({ message: "Program not found" });
//     res.json(program);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching program details", error });
//   }
// });

router.post("/programs", async (req, res) => {
  try {
    const { name, imageUrl, tracks } = req.body;

    const trackIds = [];
    for (const track of tracks) {
      const newTrack = new Track({
        title: track.title,
        audioUrl: track.audioUrl,
      });
      const savedTrack = await newTrack.save();
      trackIds.push(savedTrack._id);
    }

    const newProgram = new Program({
      name: name,
      imageUrl: imageUrl,
      tracks: trackIds,
    });

    const savedProgram = await newProgram.save();
    res.status(200).json({
      message: "Program and Tracks inserted successfully",
      program: savedProgram,
    });
  } catch (error) {
    res.status(500).json({ message: "Error inserting data", error });
  }
});

module.exports = router;
