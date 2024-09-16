const mongoose = require("mongoose");
const validator = require("validator");

const userResumeSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is a required field"],
  },
  ResumeID: {
    type: Number,
    required: [true, "Resume ID is a required field"],
  },
  userEmail: {
    type: String,
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, "User Email is a required field"],
  },
  userName: {
    type: String,
    required: [true, "User name is a required field"],
  },
});

const userResumeModel = mongoose.model("UserResume", userResumeSchema);
module.exports = userResumeModel;
