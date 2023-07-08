const express = require("express");
const router = express.Router();
const { fileUpload } = require("../cloudinary/multer");
const { HME, fileValidation } = require("../cloudinary/multer");
const {
  getProducts,
  newProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  productPicture,
  productsCount,
} = require("../services/product-services");
const { isLoggedIn, isAdmin } = require("../middlewares/auth.middelware");

router.get("/", getProducts);
router.post("/", isAdmin, newProduct);
router.get("/count", isAdmin, productsCount);
router.get("/:id", isAdmin, getProduct);
router.put("/:id", isAdmin, updateProduct);
router.delete("/:id", isAdmin, deleteProduct);

router.patch(
  "/productPicture/:id",
  isLoggedIn,
  isAdmin,
  fileUpload(fileValidation.image).single("image"),
  HME,
  productPicture
);

module.exports = router;
