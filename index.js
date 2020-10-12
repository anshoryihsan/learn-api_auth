const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const indexRoute = require("./src/Routes/index");
require("dotenv").config();

//midleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("sampurasun aoowsd");
});

app.use("/api/v1/", indexRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
