const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

dotenv.config();

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Success");
});

app.listen(3000, () => console.log("Example app is listening on port 3000."));
