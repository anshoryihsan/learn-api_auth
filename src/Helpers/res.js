const res = {
  success: (value, res, msg) => {
    const data = {
      succsess: true,
      status: 200,
      message: msg,
      data: value,
    };
    res.json(data);
  },

  failed: (err, res, msg) => {
    const data = {
      success: false,
      status: 400,
      message: msg,
      data: err,
    };
    res.json(data);
  },

  forbiden: (res, msg) => {
    const data = {
      success: false,
      status: 403,
      message: msg,
    };
    res.json(data);
  },
  unauth: (res, msg) => {
    const data = {
      success: false,
      status: 401,
      message: msg,
    };
    res.json(data);
  },
};

module.exports = res;

// exports.ok = function (data, res) {
//   const data = {
//     status: 200,
//     data: data,
//   };
//   res.json(data);
//   res.end();
// };

// exports.clientError = function (values, res) {
//   const data = {
//     status: 400,
//     message: values.sqlMessage,
//     code: values.code,
//   };
//   res.json(data);
//   res.end();
// };
// "use strict";
// exports.serverError = function (values, res) {
//   const data = {
//     satatus: 500,
//     message: values.sqlMessage,
//     code: values.code,
//   };
//   res.json(data);
//   res.end();
// };
