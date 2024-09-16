const express = require("express");
const app = express();
const userResumeRouter = require("./Routes/UserResumeRoute");

app.use(express.json());
app.use("/api/user-resume", userResumeRouter);
// client s title, uuid or email yege

module.exports = app;
