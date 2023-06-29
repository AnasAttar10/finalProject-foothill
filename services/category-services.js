const Category = require("../models/category");
const Product = require("../models/product");

module.exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res
      .status(200)
      .json({ message: "categories have been Retrived ", categories });
  } catch (e) {
    res.status(404).json({ message: "couldn't find categories", error: e });
  }
};
module.exports.newCategory = async (req, res) => {
  const category = req.body;
  try {
    const newCategory = new Category(category);
    await newCategory.save();
    res
      .status(201)
      .json({ messgae: "Category added successfully", newCategory });
  } catch (e) {
    res.status(404).json({ message: "couldn't create the category", error: e });
  }
};
module.exports.getCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findById(id);
    res
      .status(200)
      .json({ message: "Single category have been Retrived ", category });
  } catch (e) {
    res.status(404).json({ message: "couldn't  get the category", error: e });
  }
};
module.exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const category = req.body;
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, category, {
      new: true,
      runValidators: true,
    });
    res
      .status(201)
      .json({ message: " category updated successfully", updatedCategory });
  } catch (e) {
    res.status(404).json({
      message: "couldn't  update the category with id :" + id,
      error: e,
    });
  }
};

module.exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCategory = await Category.findByIdAndDelete(id, { new: true });
    const deletedProducts = await Product.deleteMany(
      { category: id },
      { new: true }
    );
    res
      .status(200)
      .json({ messgae: "Category deleted successfully", deletedCategory });
  } catch (e) {
    res.status(404).json({
      messgae: "couldn't  delete the category with id :" + id,
      error: e,
    });
  }
};
