require("dotenv/config");
const response = require("./res");

jwt = require("jsonwebtoken");

module.exports = {
  authorization: (req, res, next) => {
    const token = req.headers.token;
    if (token === undefined || token === "") {
      return response.unauth(res, "Require token");
      // res.send({
      //   message: "Require token",
      // });
    } else {
      jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
        if (err) {
          return response.forbiden(res, "you not have access");
        }
        req.data = data;
        next();
      });
    }
  },
  permit: (req, res, next) => {
    const role = req.data.role.toLowerCase();
    if (role !== "admin") {
      return response.forbiden(res, "you not have access");
    }
    next();
  },
};
