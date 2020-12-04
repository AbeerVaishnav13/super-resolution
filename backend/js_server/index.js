const fileupload = require("express-fileupload");
const express = require("express");
const bodyparser = require("body-parser");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const SERVER_PORT = 4000;

var app = express();
app.use(bodyparser.json());
app.use(fileupload());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});

app.listen(SERVER_PORT, () =>
  console.log("Server running in port " + SERVER_PORT)
);

app.post("/upload", (req, res) => {
  console.log(req.files);
  fs.writeFile(
    "../LR-input/lr_image.png",
    req.files.image.data,
    function (err) {
      if (err) {
        throw err;
        res.sendStatus(400);
      }
      console.log("Saved!");
      res.sendStatus(200);
    }
  );
});
