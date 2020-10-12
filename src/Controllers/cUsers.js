const userModel = require("../Model/mUsers");
const response = require("../Helpers/res");

module.exports = {
  getAllUser: (req, res) => {
    userModel
      .getAllUsers()
      .then((data) => response.success(data, res))
      .catch((err) => response.failed(err, res));
  },
  getAllUserById: (req, res) => {
    userModel
      .getAllUserById(req.params.id)
      .then((data) => response.success(data, res))
      .catch((err) => response.failed(err, res));
  },
  setUser: (req, res) => {
    userModel
      .setUser(req.body)
      .then((data) => response.success(data, res, "Insert Successfull"))
      .catch((err) => response.failed(err, res));
  },
  updateUser: (req, res) => {
    userModel
      .updateUser(req.params, req.body)
      .then((data) => response.success(data, res, "Update Successfull"))
      .catch((err) => response.failed(err, res));
  },
  deleteUser: (req, res) => {
    userModel
      .deleteUser(req.params)
      .then((data) => response.success(data, res, "Delete Successfull"))
      .catch((err) => response.failed(err, res));
  },
};
