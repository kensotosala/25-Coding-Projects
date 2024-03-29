const mongoose = require("mongoose");
const shortId = require("shortid");

// Database table
const shortUrlSchema = new mongoose.Schema({
  // Table columns
  full: {
    // Table attributes
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("ShortUrl", shortUrlSchema);
