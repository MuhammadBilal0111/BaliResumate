const express = require("express");
const userResumeController = require("../Controller/userResumeController");
const userResumeRouter = express.Router();

userResumeRouter
  .route("/create-resume")
  .post(userResumeController.createResume);

module.exports = userResumeRouter;