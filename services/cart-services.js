const Cart = require("../models/cart");

module.exports.getCarts = async (req, res) => {
  try {
    const carts = await Cart.find({}).populate("products.product");
    res.status(200).json({ messgae: "carts have been Retrived ", carts });
  } catch (e) {
    res.status(404).json({ message: "Coudn't find carts", error: e });
  }
};

module.exports.getCart = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.find({ _id: id }).populate("products.product");
    res.status(200).json({ messgae: "Single cart have been Retrived ", cart });
  } catch (e) {
    res.status(404).json({ message: "Coudn't find carts", error: e });
  }
};

module.exports.newCart = async (req, res) => {
  try {
    const cart = req.body;
    let newCart = new Cart(cart);
    newCart = await newCart.save();
    res.status(201).json({ message: "cart added successfully", newCart });
  } catch (e) {
    res.status(404).json({ message: "coudln't add cart", error: e });
  }
};
module.exports.deleteCart = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCart = await Cart.findByIdAndDelete(id, { new: true });
    res.status(200).json({ messgae: "cart deleted successfully", deletedCart });
  } catch (e) {
    res.status(404).json({
      messgae: "couldn't  delete the cart with id :" + id,
      error: e,
    });
  }
};
module.exports.updateProductQuantity = async (req, res) => {
  const { id, productId } = req.params;
  const { newQuantity } = req.body;
  try {
    const updatedCarts = await Cart.updateOne(
      {
        "products._id": productId,
      },
      {
        $set: {
          "products.$.quantity": newQuantity,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res
      .status(201)
      .json({ messgae: "product qunatity updated successfully", updatedCarts });
  } catch (e) {
    res.status(404).json({ messgae: "couldn't update product quantity" });
  }
};
module.exports.insertProductToCart = async (req, res) => {
  const { id, productId } = req.params;
  // const { newProduct } = req.body;
  const newProduct = { product: productId, quantity: 1 };
  try {
    // const insertedProduct = await Cart.updateOne(
    const insertedProduct = await Cart.findByIdAndUpdate(
      { _id: id },
      { $push: { products: newProduct } },
      {
        new: true,
        runValidators: true,
      }
    ).populate("products.product");
    res.status(201).json({
      messgae: "product added to the cart successfully",
      insertedProduct,
    });
    console.log(insertedProduct);
    return insertedProduct;
    // return productId;
  } catch (e) {
    res.status(404).json({ messgae: "couldn't insert product to cart " });
  }
};

module.exports.deleteProduct = async (req, res) => {
  const { id, productId } = req.params;
  try {
    const updatedCarts = await Cart.findByIdAndUpdate(
      id,
      {
        $pull: {
          products: { _id: productId },
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      messgae: "product deleted from the cart successfully",
      updatedCarts,
    });
  } catch (e) {
    res.status(404).json({ messgae: "couldn't remove product from this cart" });
  }
};
