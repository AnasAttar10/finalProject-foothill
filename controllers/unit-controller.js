const express = require("express");
const router = express.Router();
const {
  getUnits,
  newUnit,
  getUnit,
  updateUnit,
  deleteUnit,
  unitsCount,
} = require("../services/unit-services");
const { isLoggedIn, isAdmin } = require("../middlewares/auth.middelware");

router.get("/", getUnits);
router.post("/", isAdmin, newUnit);
router.get("/count", isAdmin, unitsCount);
router.get("/:id", isAdmin, getUnit);
router.put("/:id", isAdmin, updateUnit);
router.delete("/:id", isAdmin, deleteUnit);

module.exports = router;
