const authModel = require("../Model/mAuth");
const formResponse = require("../Helpers/res");

module.exports = {
  register: (req, res) => {
    authModel
      .register(req.body)
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
  login: (req, res) => {
    authModel
      .login(req.body)
      .then((data) =>
        res.status(200).send({
          success: true,
          message: "login successfully",
          token: data,
        })
      )
      .catch((err) => {
        res.send({
          success: false,
          message: err,
        });
      });
  },
};
