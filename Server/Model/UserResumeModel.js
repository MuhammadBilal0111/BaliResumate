const mongoose = require("mongoose");
const validator = require("validator");

const userResumeSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is a required field"],
  },
  resumeId: {
    type: String,
    required: [true, "Resume ID is a required field"],
  },
  email: {
    type: String,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email address"],
  },
  username: {
    type: String,
    required: [true, "User name is a required field"],
  },
});

const userResumeModel = mongoose.model("UserResume", userResumeSchema);
module.exports = userResumeModel;
