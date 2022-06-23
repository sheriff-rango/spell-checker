const { exit } = require("process");
const express = require("express");
const fs = require("fs");
const cors = require("cors");

const PORT = process.env?.PORT || 3000;

const app = express();
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server running at (http://localhost:${PORT})`);
});

app.get("/spellcheck/:word", function (req, res) {
  res.send({ status: req.params });
});
