const userModel = require("../Model/mUsers");
const formResponse = require("../Helpers/FormResponse");

module.exports = {
  getAllUser: (req, res) => {
    userModel
      .getAllUsers()
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },
  getAllUserById: (req, res) => {
    try {
      userModel
        .getAllUserById(req.params.id)
        .then((data) => formResponse(data, res, 200))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(res, [], err);
    }
  },
  setUser: (req, res) => {
    userModel
      .setUser(req.body)
      .then((data) => {
        res.status(200).send({
          Success: true,
          message: "Register Successfully",
          data: data,
        });
      })
      .catch((err) => {
        res.send({
          success: false,
          message: err.message,
        });
      });
  },
  updateUser: (req, res) => {
    userModel
      .updateUser(req.params, req.body)
      .then((data) => {
        res.status(200).send({
          Success: true,
          message: "Register Successfully",
          data: data,
        });
      })
      .catch((err) => {
        res.send({
          success: false,
          message: err.message,
        });
      });
  },
  deleteUser: (req, res) => {
    userModel
      .deleteUser(req.params)
      .then((data) => {
        res.status(200).send({
          Success: true,
          message: "Register Successfully",
        });
      })
      .catch((err) => {
        res.send({
          success: false,
          message: err.message,
        });
      });
  },
};
