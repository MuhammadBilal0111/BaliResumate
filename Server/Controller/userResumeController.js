const UserResume = require("../Model/UserResumeModel");
const CustomError = require("../Utils/customErrors");
const asyncErrorHandler = require("../Utils/asyncErrorHandlers");

// creating resume routes
exports.createResume = asyncErrorHandler(async (req, res, next) => {
  const { email, ...rest } = req.body;
  if (!email) {
    return next(new CustomError("Email is required field", 404));
  }
  const userResumeinfo = await UserResume.create(req.body);

  res.status(201).json({
    status: "success",
    userResumeinfo,
  });
});

// creating get User resume routes
exports.getUserResumes = asyncErrorHandler(async (req, res, next) => {
  const email = req.params.userEmail;
  if (!email) {
    return next(new CustomError("No email found", 404));
  }
  const userResumes = await UserResume.find({ email });
  res.status(200).json({
    status: "success",
    userResumes,
  });
});
