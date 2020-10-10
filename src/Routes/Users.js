const userRoute = require('express').Router();
const userController = require('../Controllers/cUsers');

userRoute.get('/', userController.getAllUser);

module.exports = userRoute;

// const userRoute = require('express').Router()
// const usersController = require('../Controllers/cUsers')

// userRoute.get('/', usersController.getAllUsers)


// module.exports = userRoute


