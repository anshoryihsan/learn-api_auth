const db = require("../Helpers/db");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const userModel = {
  getAllUsers: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM user", (err, res) => {
        if (!err) {
          resolve(res);
        }
        console.log(err);
      });
    });
  },
  getAllUserById: (id) => {
    return new Promise((resolve, reject) => {
      //   const role = req.headers.role;
      //   console.log(role);
      const sql = "SELECT * FROM user WHERE id=?";
      db.query(sql, id, (err, res) => {
        if (!err) {
          resolve(res);
        }
        console.log(err);
      });
    });
  },
  setUser: (body) => {
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

  updateUser: (param, body) => {
    return new Promise((resolve, reject) => {
      const { password } = body;
      bcrypt.hash(password, 10, function (err, hashPass) {
        const newBody = { ...body, password: hashPass };
        if (err) {
          reject(err);
        }
        const query = `UPDATE 
                          user 
                      SET ?
                      WHERE id=${param.id}`;
        db.query(query, newBody, (err, data) => {
          console.log(data);
          if (!err) {
            resolve(newBody);
          } else {
            reject(err);
          }
        });
      });
    });
  },
  deleteUser: (param) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM user
                      WHERE id=${param.id}`;
      db.query(query, (err, data) => {
        // console.log(data);
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};

module.exports = userModel;

// const db = require('../Helpers/db')
// const userModel = {
//     getAllUsers: () => {
//         return new Promise((resolve, reject) => {
//             db.query('SELECT * FROM user', (err, res) => {
//                 if (!err) {
//                     resolve(res)
//                 }
//                 console.log(err)
//             })
//         })
//     },
// }
// module.exports = userModel
