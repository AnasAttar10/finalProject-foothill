const express = require("express");
const router = express.Router();
const {
  getCategories,
  newCategory,
  updateCategory,
  deleteCategory,
} = require("../services/category-services");
router.get("/", getCategories);
router.post("/", newCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
