const express = require("express");
const userController = require("../Controller/authController");
const userRoute = express.Router();

userRoute.route("/signUp").post(userController.signUp); // route for sign up user
userRoute.route("/signIn").post(userController.signIn); // route for sign in user
userRoute.route("/reset-password").post(userController.resetPassword); // route for resetting password for user
userRoute.route("/google").post(userController.googleAuth); // route for google authenticationusing firebase
userRoute.route("/github").post(userController.githubAuth); // route for google authenticationusing firebase
module.exports = userRoute;
