const express = require("express");
const userController = require("../Controller/authController");
const userRoute = express.Router();

userRoute.route("/signUp").post(userController.signUp);
module.exports = userRoute;
