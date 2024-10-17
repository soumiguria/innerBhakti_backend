const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
  title: { type: String, required: true },
  audioUrl: { type: String, required: true },
});

const Track = mongoose.model("Track", trackSchema);

module.exports = Track;
