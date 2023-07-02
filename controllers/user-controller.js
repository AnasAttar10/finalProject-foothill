const express = require("express");
const router = express.Router();
// import fileUpload, { HME, fileValidation } from '../../services/multer.js'
// import fileUpload, { HME, fileValidation } from "../cloudinary/multer";
// const { fileUpload } = require("../cloudinary/multer");
// const { HME, fileValidation } = require("../cloudinary/multer");
// const router = express.Router();
// const { profilePicture } = require("../services/user-services");
// router.patch(
//   "/profilePicture",
//   fileUpload(fileValidation.image).single("image"),
//   // HME,
//   profilePicture
// );
// router.patch("/profilePicture", profilePicture);

const {
  signUp,
  signIn,
  getUsers,
  getUser,
} = require("../services/auth-services");
const { isLoggedIn, isAdmin } = require("../middlewares/auth.middelware");
router.post("/register", signUp);
router.post("/login", signIn);
// router.get("/:id", getUser);

module.exports = router;
