const indexRoute = require("express").Router();
const authRoute = require("./Auth");
const userRoute = require("./Users");

indexRoute.use("/auth", authRoute);

indexRoute.use("/user", userRoute);

module.exports = indexRoute;
