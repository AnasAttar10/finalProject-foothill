const Category = require("../models/category");
const Product = require("../models/product");
const cloudinary = require("../cloudinary/cloudinary.js");
module.exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    return res
      .status(200)
      .json({ message: "categories have been Retrived ", categories });
  } catch (e) {
    return res
      .status(404)
      .json({ error: "couldn't find categories", errors: e });
  }
};
module.exports.newCategory = async (req, res) => {
  const category = req.body;
  try {
    const newCategory = new Category(category);
    await newCategory.save();
    res
      .status(201)
      .json({ message: "Category added successfully", newCategory });
  } catch (e) {
    res.status(404).json({ error: "couldn't create the category", errors: e });
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
    res.status(404).json({ error: "couldn't  get the category", errors: e });
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
      error: "couldn't  update the category with id :" + id,
      errors: e,
    });
  }
};

module.exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCategory = await Category.findByIdAndDelete(id, {
      new: true,
    });
    const deletedProducts = await Product.deleteMany(
      { category: id },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Category deleted successfully", deletedCategory });
  } catch (e) {
    res.status(404).json({
      error: "couldn't  delete the category with id :" + id,
      errors: e,
    });
  }
};
module.exports.categoriesCount = async (req, res) => {
  try {
    const categoriesCount = await Category.find({}).count();
    res.status(200).json({
      message: "get categories count successfully",
      count: categoriesCount,
    });
  } catch (err) {
    res.status(404).json({ message: "couldn't retrive the categories count" });
  }
};
module.exports.categoryPicture = async (req, res) => {
  const { id } = req.params;
  if (!req.file) {
    return res.status(400).json({ error: "file is required" });
  }
  const { secure_url } = await cloudinary.uploader.upload(req.file.path, {
    folder: `${process.env.ProjectName}/category/${req.id}`,
  });
  const category = await Category.findByIdAndUpdate(
    { _id: id },
    { image: secure_url },
    {
      new: true,
      runValidators: true,
    }
  );
  return res.status(200).json({ message: "success", image: category.image });
};
