const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const functions = require("firebase-functions");

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "..", "public")));
// Middlewares end

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.get("/error", (req, res) => {
  res.status(404).send("Not Found");
});

exports.app = app;
exports.app_firebase = functions.https.onRequest(app);
