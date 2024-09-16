const UserResume = require("../Model/UserResumeModel");
exports.createResume = async (req, res) => {
  try {
    const userResumeinfo = await UserResume.create(req.body);
    res.status(201).json({
      status: "success",
      userResumeinfo,
    });
  } catch (err) {
    console.log(err.message);
  }
};
