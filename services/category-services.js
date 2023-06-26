const Category = require("../models/category");

module.exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.send(categories);
  } catch (e) {
    res.status(404).json({ message: "Coudn't find categories", error: e });
  }
};
module.exports.newCategory = async (req, res) => {
  const category = req.body;
  try {
    let newCategory = new Category(category);
    newCategory = await newCategory.save();
    res.send(newCategory);
  } catch (e) {
    res.status(404).json({ message: "coudno't create the category", error: e });
  }
};
module.exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const Category = req.body;
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, Category, {
      new: true,
      runValidators: true,
    });
    res.send(updatedCategory);
  } catch (e) {
    res.status(404).json({
      message: "coudln't update the category with id :" + id,
      error: e,
    });
  }
};

module.exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCategory = await Category.findByIdAndDelete(id, { new: true });
    res.send(deletedCategory);
  } catch (e) {
    res.status(404).json({
      messgae: "coudn't delete the category with id :" + id,
      error: e,
    });
  }
};
