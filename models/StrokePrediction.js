// models/StrokePrediction.js
const mongoose = require("mongoose");

const StrokePredictionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    advice: {
      type: String, // Store the advice text
    },
    interpretation: {
      type: String, // Store the interpretation text
    },
    prediction: {
      type: Number,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true, // This will add createdAt and updatedAt fields to your document
  }
);

module.exports = mongoose.model("StrokePrediction", StrokePredictionSchema);
