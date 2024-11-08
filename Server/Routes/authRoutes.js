const express = require("express");
const userController = require("../Controller/authController");
const userRoute = express.Router();

userRoute.route("/signUp").post(userController.signUp);
userRoute.route("/signIn").post(userController.signIn);
userRoute.route("/reset-password").post(userController.resetPassword);
module.exports = userRoute;
