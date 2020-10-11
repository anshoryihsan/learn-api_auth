require("dotenv/config");

jwt = require("jsonwebtoken");

module.exports = {
  authorization: (req, res, next) => {
    const token = req.headers.token;
    // console.log(head);
    if (token === undefined || token === "") {
      res.send({
        message: "Require token",
      });
    } else {
      // if (token) {
      // console.log(token);
      jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
        if (err) {
          //   console.log(err);
          return res.sendStatus(403); //forbiden
        }
        // console.log(data.role);
        req.data = data;
        //   const role = data.role;
        //   console.log(req.role);
        //   console.log(role);
        next();
      });
      // }
    }
  },
  permit: (req, res, next) => {
    // if (typeof roles === "string") {
    //   roles = [roles];
    // }
    const role = req.data.role.toLowerCase();
    if (role !== "admin") {
      return res.sendStatus(403);
    }
    next();
    // console.log(req);
  },
};
