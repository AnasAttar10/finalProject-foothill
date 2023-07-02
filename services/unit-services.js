const Unit = require("../models/unit");
const Product = require("../models/product");

module.exports.getUnits = async (req, res) => {
  try {
    const units = await Unit.find({});
    res.status(200).json({ message: "Units has been Retrieved", units });
  } catch (e) {
    res.status(404).json({ error: "couldn't  find Units", errors: e });
  }
};

module.exports.newUnit = async (req, res) => {
  try {
    const unit = req.body;
    const newUnit = new Unit(unit);
    await newUnit.save();
    res.status(201).json({ message: "unit added successfully", newUnit });
  } catch (e) {
    res.status(404).json({ error: "couldn't  create the unit ", errors: e });
  }
};
module.exports.getUnit = async (req, res) => {
  const { id } = req.params;
  try {
    const unit = await Unit.findById(id);
    res.status(200).json({ messgae: "Single unit have been Retrived", unit });
  } catch (e) {
    res.status(404).json({ error: "couldn't  get the category", errors: e });
  }
};
module.exports.updateUnit = async (req, res) => {
  try {
    const { id } = req.params;
    const unit = req.body;
    const updatedUnit = await Unit.findByIdAndUpdate(id, unit, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({ message: "unit updated successfully", updatedUnit });
  } catch (e) {
    res.status(404).json({ error: "couldn't  update the unit", errors: e });
  }
};

module.exports.deleteUnit = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUnit = await Unit.findByIdAndDelete(id, { new: true });
    const deletedProducts = await Product.deleteMany(
      { unitOfMeasure: id },
      { new: true }
    );
    res.status(200).json({ messgae: "unit deleted successfully", deletedUnit });
  } catch (e) {
    res.status(404).json({ error: "couldn't  delete the unit", errors: e });
  }
};
