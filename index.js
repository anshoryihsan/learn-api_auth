const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const cors = require('cors')
const userRoute = require("./src/Routes/Users");
const authRoute = require("./src/Routes/Auth");
require("dotenv").config();

// //midleware]
// app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("sampurasun awsd");
});

app.use("/api/v1/users", userRoute);
// app.use('/users', userRoute);
app.use("/api/v1/auth", authRoute);

// app.get("*", (req, res) => {
//   res.status(404).send("404 - Not Found");
// });
// //get Methode
app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
