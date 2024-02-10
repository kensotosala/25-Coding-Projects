const express = require("express");
const mongoose = require("mongoose");
const shortURL = require("./models/shortURL");

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost/urlShortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// View engine setup
app.set("view engine", "ejs");

// Parse request bodies
app.use(express.urlencoded({ extended: false }));

// Home route
app.get("/", async (req, res) => {
  const shortUrls = await shortURL.find();
  res.render("index", { shortUrls });
});

// Create short URL
app.post("/shortUrls", async (req, res) => {
  await shortURL.create({ full: req.body.urlInput });
  res.redirect("/");
});

// Redirect short URL
app.get("/:shortUrl", async (req, res) => {
  const url = await shortURL.findOne({ short: req.params.shortUrl });
  if (!url) {
    return res.sendStatus(404);
  }

  url.clicks++;
  await url.save();

  res.redirect(url.full);
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
