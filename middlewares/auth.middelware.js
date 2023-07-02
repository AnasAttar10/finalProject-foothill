const User = require("../models/user");
const { verifyToken } = require("../services/generateAndVerifyToken");

module.exports.isLoggedIn = async (req, res, next) => {
  const { authorization } = req.headers;
  console.log("authorization");
  console.log(typeof authorization);
  if (!authorization?.startsWith(process.env.BEARARDATA)) {
    console.log("anas");
    return res.json({ message: "Invalid authorization , you must Logged In" });
  }
  console.log("authorization2");
  console.log(typeof authorization);
  const token = authorization.split(process.env.BEARARDATA)[1];
  if (!token) {
    return res.json({ message: "Invalid token" });
  }
  const decoded = verifyToken(token);
  const authUser = await User.findById(decoded.id).select("userName email");
  if (!authUser) {
    return res
      .status(401)
      .json({ message: "not registered account , you must Logged In " });
  }
  req.id = decoded.id;

  next();
};

module.exports.isAdmin = async (req, res, next) => {
  const targetUser = await User.findById(req.id);
  if (!targetUser.isAdmin) {
    return res.status(403).json({ message: "you are not Admin " });
  } else next();
};
