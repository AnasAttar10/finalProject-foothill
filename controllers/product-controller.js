const express = require("express");
const router = express.Router();
const {
  getProducts,
  newProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../services/product-services");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", newProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
