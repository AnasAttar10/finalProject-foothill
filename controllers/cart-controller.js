const express = require("express");
const router = express.Router();
const {
  getCarts,
  newCart,
  inserteProduct,
  getCart,
  // updateProduct,
  updateProductQuantity,
  deleteProduct,
} = require("../services/cart-services");

router.get("/", getCarts);

router.post("/", newCart);

router.get("/:id", getCart);

router.put("/:id/productquantity/:productId", updateProductQuantity);

router.delete("/:id/removeproduct/:productId", deleteProduct);

// router.delete("/:id/product/:productId", deleteProduct);

module.exports = router;
