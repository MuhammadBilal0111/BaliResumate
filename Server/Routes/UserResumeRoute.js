const express = require("express");
const userResumeController = require("../Controller/userResumeController");
const userResumeRouter = express.Router();

userResumeRouter
  .route("/create-resume")
  .post(userResumeController.createResume);
userResumeRouter.get("/:userEmail", userResumeController.getUserResumes);
module.exports = userResumeRouter;
