const userModel = require("../Model/mUsers");
// const res = require('../Helpers/FormResponse');
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
      const role = req.data.role;
      if (role !== "admin") {
        return res.sendStatus(403);
      }
      const id = req.params.id;
      userModel
        .getAllUserById(id)
        .then((data) => formResponse(data, res, 200))
        .catch((err) => console.log(err));
    } catch (err) {
      //   console.log(res, [], err);
    }
  },
};
