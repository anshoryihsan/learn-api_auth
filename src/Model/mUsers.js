const db = require('../Helpers/db')

const userModel = {
    getAllUsers: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM user', (err, res) => {
                if (!err) {
                    resolve(res)
                }
                console.log(err);
            })
        })
    },
}

module.exports = userModel

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

