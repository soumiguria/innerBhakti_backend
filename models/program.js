const mongoose = require("mongoose");

const programSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  tracks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Track" }],
});

const Program = mongoose.model("Program", programSchema);

module.exports = Program;
