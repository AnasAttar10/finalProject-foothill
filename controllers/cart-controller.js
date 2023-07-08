const express = require("express");
const router = express.Router();
const {
  getCarts,
  newCart,
  getCart,
  insertProductToCart,
  updateProductQuantity,
  deleteProduct,
  deleteCart,
} = require("../services/cart-services");

router.get("/", getCarts);

router.post("/", newCart);

router.get("/:id", getCart);

router.delete("/:id", deleteCart);

router.put("/:id/product/:productId", insertProductToCart);

router.put("/:id/productquantity/:productId", updateProductQuantity);

router.delete("/:id/removeproduct/:productId", deleteProduct);

module.exports = router;
