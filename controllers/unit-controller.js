const express = require("express");
const router = express.Router();
const {
  getUnits,
  newUnit,
  getUnit,
  updateUnit,
  deleteUnit,
} = require("../services/unit-services");
router.get("/", getUnits);
router.post("/", newUnit);
router.get("/:id", getUnit);
router.put("/:id", updateUnit);
router.delete("/:id", deleteUnit);

module.exports = router;
