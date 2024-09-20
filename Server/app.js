const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const userResumeRouter = require("./Routes/UserResumeRoute");
const authRouter = require("./Routes/authRoutes");
const CustomError = require("./Utils/customErrors");
const app = express();

app.use(express.json());
// app.use(cookieParser());
app.use(morgan("dev"));
app.use("/api/user-resume", userResumeRouter);
app.use("/api/auth", authRouter);
// client s title, uuid or email yege

// global error handler middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || "fail";
  const message = err.message || "Internal Server error";
  res.status(statusCode).json({
    status,
    statusCode,
    message,
  });
});
app.use("*", (req, res, next) => {
  next(new CustomError(`Cannot find ${req.originalUrl} on the server`, 404));
});
module.exports = app;
