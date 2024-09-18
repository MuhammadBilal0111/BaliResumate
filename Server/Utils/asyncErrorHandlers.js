module.exports = (func) => {
  console.log("asunc function");
  return (req, res, next) => {
    console.log("asunc function k under");
    func(req, res, next).catch((err) => next(err));
  };
};
