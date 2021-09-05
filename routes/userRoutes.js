const express = require('express');
const userController = require('./../controller/userController');

const router = express.Router();

// unprotecetd routes --login not required
router.route('/')
    .post(userController.createUser)

// protected routes -- login required
// router.route('/')
//     .get(authController.isAuthenticated, userController.getUsers)
//     .put(authController.isAuthenticated, userController.updatedUser)
//     .delete(authController.isAuthenticated, userController.deleteUser)

// router.route('/me')
//     .get(authController.isAuthenticated, userController.getMe)

module.exports = router
