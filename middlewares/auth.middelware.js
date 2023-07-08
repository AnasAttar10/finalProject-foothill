const User = require("../models/user");
const { verifyToken } = require("../services/generateAndVerifyToken");

module.exports.isLoggedIn = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization?.startsWith(process.env.BEARARDATA)) {
    return res.json({ error: "Invalid authorization , you must Logged In" });
  }
  const token = await authorization.split(process.env.BEARARDATA)[1];
  if (!token) {
    return res.json({ error: "Invalid token" });
  }
  const decoded = verifyToken(token);
  const authUser = await User.findById(decoded.id).select("userName email");
  if (!authUser) {
    return res
      .status(401)
      .json({ error: "not registered account , you must Logged In " });
  }
  req.id = decoded.id;
  next();
};

module.exports.isAdmin = async (req, res, next) => {
  const targetUser = await User.findById(req.id);
  if (!targetUser.isAdmin) {
    return res.status(403).json({ error: "you are not Admin " });
  } else next();
};
