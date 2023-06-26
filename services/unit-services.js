const Unit = require("../models/unit");

module.exports.addUnit = async (req, res) => {
  try {
    const Unit = req.body;
    let newUnit = new Unit(Unit);
    newUnit = newUnit.save();
    res.send(newUnit);
  } catch (e) {
    res
      .status(404)
      .json({ messgae: "couldn't create the category ", error: e });
  }
};
module.exports.updateUnit = async (req, res) => {
  try {
    const { id } = req.params;
    const unit = req.body;
    const updatedUnit = await Product.findByIdAndUpdate(id, unit, {
      new: true,
      runValidators: true,
    });
    res.send(updatedUnit);
  } catch (e) {
    res.status(404).json({ message: "Coudn't update the unit", error: e });
  }
};

module.exports.deleteUnit = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUnit = await Product.findByIdAndDelete(id, { new: true });
    res.send(deletedUnit);
  } catch (e) {
    res.status(404).json({ message: "Coudn't delete the unit", error: e });
  }
};
