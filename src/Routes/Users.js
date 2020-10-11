const userRoute = require("express").Router();
const userController = require("../Controllers/cUsers");
const authJWT = require("../Helpers/auth");

userRoute
  .get("/", userController.getAllUser)
  .get(
    "/:id",
    authJWT.authorization,
    authJWT.permit,
    userController.getAllUserById
  )
  .post("/", authJWT.authorization, authJWT.permit, userController.setUser)
  .put("/:id", authJWT.authorization, authJWT.permit, userController.updateUser)
  .delete(
    "/:id",
    authJWT.authorization,
    authJWT.permit,
    userController.deleteUser
  );

module.exports = userRoute;
