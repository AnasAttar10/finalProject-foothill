const User = require("../models/user");
const { generateToken, verifyToken } = require("./generateAndVerifyToken.js");
const { hash, compare } = require("./hashAndCompare.js");
module.exports.signUp = async (req, res) => {
  const { userName, email, password, profilePicture, isAdmin } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(404).json({ error: "already email exists" });
  }
  const hashPassword = hash(password);
  const token = generateToken({ email }, process.env.EmailToken);
  const newUser = { userName, email, password: hashPassword };
  const createUser = await User.create({
    userName,
    email,
    password: hashPassword,
    profilePicture,
    isAdmin,
  });

  res.status(201).json({ message: "success register", user: createUser });
};
module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    res.status(404).json({ error: " email not exists" });
  } else {
    const match = compare(password, user.password);
    if (!match) {
      res.status(404).json({ error: "incorrect email or password" });
    } else {
      const token = generateToken({ id: user._id });
      res.status(200).json({ message: "success", cuser: user, token });
    }
  }
};
