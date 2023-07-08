const express = require("express");
const router = express.Router();
const { fileUpload } = require("../cloudinary/multer");
const { HME, fileValidation } = require("../cloudinary/multer");
const {
  getCategories,
  newCategory,
  getCategory,
  updateCategory,
  deleteCategory,
  categoryPicture,
  categoriesCount,
} = require("../services/category-services");
const { isLoggedIn, isAdmin } = require("../middlewares/auth.middelware");
router.get("/", getCategories);
router.post("/", isAdmin, newCategory);
router.get("/count", isAdmin, categoriesCount);
router.get("/:id", isAdmin, getCategory);
router.put("/:id", isAdmin, updateCategory);
router.delete("/:id", isAdmin, deleteCategory);

router.patch(
  "/categoryPicture/:id",
  isLoggedIn,
  isAdmin,
  fileUpload(fileValidation.image).single("image"),
  HME,
  categoryPicture
);

module.exports = router;
