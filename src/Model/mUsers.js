const db = require("../Helpers/db");

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
