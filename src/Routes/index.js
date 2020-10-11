const indexRoute = require("express").Router();
const authRoute = require("./Auth");
const userRoute = require("./Users");

indexRoute.use("/auth", authRoute);

indexRoute.use("/user", userRoute);
// indexRoute.get("/user", (req, res) => {
//   res.send("sampurasun");
// });

module.exports = indexRoute;
