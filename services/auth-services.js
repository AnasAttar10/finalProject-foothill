const User = require("../models/user");
const cloudinary = require("../cloudinary/cloudinary.js");
const { generateToken, verifyToken } = require("./generateAndVerifyToken.js");
const { hash, compare } = require("./hashAndCompare.js");
module.exports.signUp = async (req, res) => {
  try {
    const { userName, email, password, profilePicture, isAdmin } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(404).json({ error: "already email exists" });
    }
    const hashPassword = hash(password);
    const token = generateToken({ email }, process.env.EmailToken);
    const newUser = {
      userName,
      email,
      password: hashPassword,
      profilePicture,
      isAdmin,
    };
    let newUser1 = new User(newUser);
    newUser1 = await newUser1.save();
    res.status(201).json({ message: "success register", user: newUser1 });
  } catch (err) {
    res.status(404).json({ message: "problem in register" });
  }
};
module.exports.signIn = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(404).json({ error: "couldn't Login" });
  }
};
module.exports.usersCount = async (req, res) => {
  try {
    const usersCount = await User.find({}).count();
    res.status(200).json({
      message: "get users count successfully",
      count: usersCount,
    });
  } catch (err) {
    res.status(404).json({ message: "couldn't retrive the users count" });
  }
};
module.exports.profilePicture = async (req, res) => {
  const { id } = req.params;
  if (!req.file) {
    return res.status(400).json({ error: "file is required" });
  }
  const { secure_url } = await cloudinary.uploader.upload(req.file.path, {
    folder: `${process.env.ProjectName}/user/${id}`,
    // folder: `${process.env.ProjectName}/user/${req.id}`,
  });
  const user = await User.updateOne(
    // { _id: req.id },
    { _id: id },
    { profilePicture: secure_url }
  );
  return res.status(200).json({ message: "success" });
};
