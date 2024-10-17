const express = require("express");
const Track = require("../models/track");
const router = express.Router();

router.get("/tracks/:id", async (req, res) => {
  try {
    const track = await Track.findById(req.params.id);
    if (!track) return res.status(404).json({ message: "Track not found" });
    res.json(track);
  } catch (error) {
    res.status(500).json({ message: "Error fetching track details", error });
  }
});

module.exports = router;
