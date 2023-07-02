const Product = require("../models/product");

module.exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({})
      .populate("category")
      .populate("unitOfMeasure");
    return res
      .status(200)
      .json({ messgae: "products have been Retrived", products });
  } catch (e) {
    return res.status(404).json({ error: "couldn't find products", errors: e });
  }
};

module.exports.newProduct = async (req, res) => {
  try {
    const product = req.body;
    console.log(product);
    const newProduct = new Product(product);
    await newProduct.save();
    res.status(201).json({ messgae: "product added successfully", newProduct });
  } catch (e) {
    res.status(404).json({ error: "couldn't create the product", errors: e });
  }
};
module.exports.getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id)
      .populate("category")
      .populate("unitOfMeasure");
    res
      .status(200)
      .json({ message: "Single product have been Retrived ", product });
  } catch (e) {
    res.status(404).json({ error: "couldn't get the product", errors });
  }
};
module.exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = req.body;
    console.log(id);
    console.log(product);
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
      runValidators: true,
    })
      .populate("category")
      .populate("unitOfMeasure");
    res
      .status(201)
      .json({ message: "product updated successfully", updatedProduct });
  } catch (e) {
    res.status(404).json({ error: "couldn't update the product", errors: e });
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id, { new: true });
    res
      .status(200)
      .json({ message: "product deleted successfully", deletedProduct });
  } catch (e) {
    res.status(404).json({ error: "couldn't delete the product", errors: e });
  }
};
