const db = require("../Helpers/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authModel = {
  register: (body) => {
    return new Promise((resolve, reject) => {
      const { password } = body;
      bcrypt.hash(password, 10, function (err, hashPass) {
        const newBody = { ...body, password: hashPass };
        if (err) {
          reject(err);
        }
        const query = "INSERT INTO user SET ?";
        db.query(query, newBody, (err, data) => {
          if (!err) {
            resolve(newBody);
          } else {
            reject(err);
          }
        });
      });
    });
  },
  login: (body) => {
    return new Promise((resolve, reject) => {
      const { email, password } = body;
      const query = "SELECT * FROM user WHERE email=?";
      db.query(query, email, (err, data) => {
        // console.log(data);
        let dataUser = data[0];
        if (!data.length) {
          reject("Email Not Found.");
        } else {
          if (!err) {
            const token = jwt.sign(
              {
                email: dataUser.email,
                id: dataUser.id,
                name: dataUser.name,
                role: dataUser.role,
              },
              process.env.SECRET_KEY,
              { expiresIn: "1 days" }
            );
            bcrypt.compare(body.password, dataUser.password, (err, result) => {
              if (err) {
                reject("your password is incorect");
              } else {
                if (!result) {
                  reject("your password is incorect");
                } else {
                  const sql = "SELECT * FROM user WHERE password=?";
                  db.query(sql, dataUser.password, (err, data) => {
                    if (!err) {
                      resolve(token);
                    } else {
                      reject("your password is incorect");
                    }
                  });
                }
              }
            });
          } else {
            reject(err);
          }
        }
      });
    });
  },
};

module.exports = authModel;
