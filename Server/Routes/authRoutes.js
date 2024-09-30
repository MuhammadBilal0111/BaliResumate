const express = require("express");
const userController = require("../Controller/authController");
const userRoute = express.Router();

userRoute.route("/signUp").post(userController.signUp);
userRoute.route("/signIn").post(userController.signIn);
module.exports = userRoute;
