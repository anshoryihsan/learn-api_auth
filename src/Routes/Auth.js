const authRoute = require("express").Router();
const authCotroller = require("../Controllers/cAuth");

authRoute.post("/register", authCotroller.register);
authRoute.get("/login", authCotroller.login);

module.exports = authRoute;
