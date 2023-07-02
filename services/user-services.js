// import userModel from "../../../../DB/model/User.model.js";
const User = require("../models/user.js");
const cloudinary = require("../cloudinary/cloudinary.js");

module.exports.profilePicture = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "file is required" });
  }
  const { secure_url } = await cloudinary.uploader.upload(req.file.path, {
    folder: `saraha/user/"anas123"`,
  });
  const user = await User.updateOne(
    { _id: req.id },
    { profilePicture: secure_url }
  );
  return res.status(200).json({ message: "success" });
};
