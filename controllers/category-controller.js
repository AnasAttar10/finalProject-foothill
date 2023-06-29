const express = require("express");
const router = express.Router();
const {
  getCategories,
  newCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../services/category-services");
router.get("/", getCategories);
router.post("/", newCategory);
router.get("/:id", getCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
