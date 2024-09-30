const UserResume = require("../Model/UserResumeModel");
const CustomError = require("../Utils/customErrors");
const asyncErrorHandler = require("../Utils/asyncErrorHandlers");

exports.createResume = asyncErrorHandler(async (req, res, next) => {
  const userResumeinfo = await UserResume.create(req.body);
  res.status(201).json({
    status: "success",
    userResumeinfo,
  });
});
