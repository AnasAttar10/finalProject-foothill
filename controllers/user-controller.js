const express = require("express");
const router = express.Router();
const { fileUpload } = require("../cloudinary/multer");
const { HME, fileValidation } = require("../cloudinary/multer");
const { profilePicture, usersCount } = require("../services/auth-services");

const {
  signUp,
  signIn,
  getUsers,
  getUser,
} = require("../services/auth-services");
const { isLoggedIn, isAdmin } = require("../middlewares/auth.middelware");
router.post("/register", signUp);
router.post("/login", signIn);
router.get("/count", usersCount);
router.patch(
  "/profilePicture/:id",
  fileUpload(fileValidation.image).single("image"),
  HME,
  profilePicture
);

module.exports = router;
