const jwt = require("jsonwebtoken");
const User = require("./../Model/UserModel");
const asyncErrorHandler = require("../Utils/asyncErrorHandlers");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_STR, {
    expiresIn: process.env.LOGIN_EXPIRES,
  });
};
const createSendendResponse = (user, statusCode, res) => {
  const token = signToken(user._id);
  const options = {
    maxAge: process.env.LOGIN_EXPIRES,
    httpOnly: true,
  };
  res.cookie("jwt", token, options);
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signUp = asyncErrorHandler(async (req, res, next) => {
  const user = await User.create(req.body);
  createSendendResponse(user, 201, res);
});
