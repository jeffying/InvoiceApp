const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
mongoose.connect(keys.mongoURI);
require("./models/Invoice");

const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "friends" });
});

app.get("/invoice", (req, res) => {
  res.redirect("routes/invoice/new");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
