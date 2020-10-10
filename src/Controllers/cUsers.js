const userModel = require('../Model/mUsers');
// const res = require('../Helpers/FormResponse');
const formResponse = require('../Helpers/FormResponse');

module.exports = {
    getAllUser: (req, res) => {
        userModel
            .getAllUsers()
            .then((data) => formResponse(data, res, 200))
            .catch((err) => console.log(err))
    }
}