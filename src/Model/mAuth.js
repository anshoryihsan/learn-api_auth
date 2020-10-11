// const db = require("../Helpers/db");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const authModel = {
//   register: (body) => {
//     return new Promise((resolve, reject) => {
//       bcrypt.genSalt(10, function (er, salt) {
//         const { password } = body;
//         bcrypt.hash(password, salt, function (err, hashedPassword) {
//           const newBody = { ...body, password: hashedPassword };
//           if (err) {
//             reject(err);
//           }
//           const query = "INSERT INTO user SET ?";
//           db.query(query, newBody, (err, data) => {
//             if (!err) {
//               resolve(newBody);
//             } else {
//               reject(err);
//             }
//           });
//         });
//       });
//     });
//   },
//   login: (body) => {
//     return new Promise((resolve, reject) => {
//       const { email, password } = body;
//       const query = "SELECT * FROM user WHERE email=?";
//       db.query(query, email, (err, data) => {
//         let dataUser = data[0];
//         if (!data.length) {
//           reject("email salah.");
//         } else {
//           if (!err) {
//             const token = jwt.sign(
//               {
//                 email: dataUser.email,
//                 id: dataUser.id,
//                 name: dataUser.name,
//               },
//               process.env.SECRET_KEY
//             );
//             bcrypt.compare(password, dataUser.password, function (err, result) {
//               if (err) {
//                 reject("Password Salah");
//               } else {
//                 if (!result) {
//                   reject("password salah");
//                 } else {
//                   const sql = "SELECT * FROM user WHERE password=?";
//                   db.query(sql, dataUser.password, (err, data) => {
//                     if (!err) {
//                       resolve(token);
//                     } else {
//                       reject("password salah");
//                     }
//                   });
//                 }
//               }
//             });
//           } else {
//             reject(err);
//           }
//         }
//       });
//     });
//   },
// };

// module.exports = authModel;

// const db = require("../Helpers/db");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const authModel = {
//   register: (body) => {
//     return new Promise((resolve, reject) => {
//       bcrypt.genSalt(10, function (err, salt) {
//         const { password } = body;
//         bcrypt.hash(password, salt, function (err, hashedPassword) {
//           const newBody = { ...body, password: hashedPassword };
//           if (err) {
//             reject(err);
//           }
//           const query = "INSERT INTO user SET ?";
//           db.query(query, newBody, (err, data) => {
//             if (!err) {
//               resolve(newBody);
//             } else {
//               reject(err);
//             }
//           });
//         });
//       });
//     });
//   },
//   login: (body) => {
//     return new Promise((resolve, reject) => {
//       const { email, password } = body;
//       const query = "SELECT * FROM user WHERE email=?";
//       db.query(query, email, (err, data) => {
//         // if(!err){
//         //     resolve(data[0]);
//         // }else{
//         //     reject(err)
//         // }
//         // console.log(err);
//         let dataUser = data[0];
//         if (!data.length) {
//           reject("Email Salah.");
//         } else {
//           if (!err) {
//             const token = jwt.sign(
//               {
//                 email: dataUser.email,
//                 id: dataUser.id,
//                 name: dataUser.name,
//               },
//               process.env.SECRET_KEY
//             );
//             console.log(body.password);
//             console.log(dataUser.password);

//             console.log(bcrypt.compareSync(body.password, dataUser.password));

//             bcrypt.compare(body.password, dataUser.password, function (
//               err,
//               result
//             ) {
//               if (err) {
//                 reject("password Salahaa");
//               } else {
//                 let assd = result;
//                 // console.log(assd);
//                 if (!assd) {
//                   //   console.log(assd);
//                   reject("password salah");
//                 } else {
//                   //   console.log(assd);
//                   reject("password benar");
//                   //   const sql = "SELECT * FROM user WHERE asas='san1'";
//                   //   db.query(sql, dataUser.password, (err, data) => {
//                   //     if (err) {
//                   //       resolve(token);
//                   //     } else {
//                   //       //   reject("password Salah");
//                   //     }
//                   //   });
//                 }
//               }
//             });
//           } else {
//             reject(err);
//           }
//         }
//       });
//     });
//   },
// };

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
          reject("Email Salah.");
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
              { expiresIn: "2 h" }
            );
            bcrypt.compare(body.password, dataUser.password, (err, result) => {
              if (err) {
                reject("password Salahaa");
              } else {
                if (!result) {
                  reject("Password Salah");
                } else {
                  const sql = "SELECT * FROM user WHERE password=?";
                  db.query(sql, dataUser.password, (err, data) => {
                    if (!err) {
                      resolve(token);
                    } else {
                      reject("Password Salah");
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
