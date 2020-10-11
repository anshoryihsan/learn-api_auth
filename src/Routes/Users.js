const userRoute = require("express").Router();
const userController = require("../Controllers/cUsers");
const authJWT = require("../Helpers/auth");
// const permit = require("../Helpers/permit");
// const roles = require("../Helpers/role");

userRoute
  .get("/", userController.getAllUser)
  .get(
    "/:id",
    authJWT.authorization,
    authJWT.permit,
    userController.getAllUserById
  )
  // .get("/:id", authJWT.authorization, userController.getAllUserById)
  .post("/", authJWT.authorization, authJWT.permit, userController.setUser)
  .put("/:id", authJWT.authorization, authJWT.permit, userController.updateUser)
  .delete(
    "/:id",
    authJWT.authorization,
    authJWT.permit,
    userController.deleteUser
  );

// .get(
//   "/:id",
//   authJWT.authorization,
//   userController.getAllUserById
// );
// .get("/", authJWT.authorization, userController.getAllUser)
// userRoute.get("/", (req, res) => {
//   const token = req.headers.token;
//   console.log(token);
//   res.send("sampurasun");
// });
// indexRoute.get("/user", (req, res) => {
//   res.send("sampurasun");
// });

// userRoute.get("/", userController.getAllUser);

module.exports = userRoute;

// const userRoute = require('express').Router()
// const usersController = require('../Controllers/cUsers')

// userRoute.get('/', usersController.getAllUsers)

// module.exports = userRoute
