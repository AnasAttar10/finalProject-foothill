const Cart = require("../models/cart");

module.exports.getCarts = async (req, res) => {
  try {
    const carts = await Cart.find({}).populate("products.product");
    res.send(carts);
  } catch (e) {
    res.status(404).json({ message: "Coudn't find carts", error: e });
  }
};

module.exports.getCart = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.find({ _id: id }).populate("products.product");
    res.send(cart);
  } catch (e) {
    res.status(404).json({ message: "Coudn't find carts", error: e });
  }
};

module.exports.newCart = async (req, res) => {
  try {
    const cart = req.body;
    let newCart = new Cart(cart);
    newCart = await newCart.save();
    res.send(newCart);
  } catch (e) {
    res.status(404).json({ message: "coudln't add cart", error: e });
  }
};

module.exports.updateProductQuantity = async (req, res) => {
  const { id, productId } = req.params;
  const { newQuantity } = req.body;
  try {
    const isTheCartContaineTheProduct = await Cart.find({
      "products._id": productId,
    });
    if (isTheCartContaineTheProduct) {
      res.send(true);
    } else {
      res.send(false);
    }
    // const updatedCarts = await Cart.updateOne(
    //   {
    //     // _id: id,
    //     "products._id": productId,
    //   },
    //   {
    //     $set: {
    //       "products.$.quantity": newQuantity,
    //     },
    //   },
    //   {
    //     new: true,
    //     runValidators: true,
    //   }
    // );
    // res.send(updatedCarts);
  } catch (e) {
    res.status(404).json({ messgae: "couldn't update product quantity" });
  }
};
// module.exports.insertProductToCart = async (req, res) => {
//   const { id, productId } = req.params;
//   const { newQuantity } = req.body;
//   try {
//     const updatedCarts = await Cart.updateOne(
//       {
//         // _id: id,
//         "products._id": productId,
//       },
//       {
//         $set: {
//           "products.$.quantity": newQuantity,
//         },
//       },
//       {
//         new: true,
//         runValidators: true,
//       }
//     );
//     res.send(updatedCarts);
//     // console.log(updatedCarts);
//     // res.end();
//   } catch (e) {
//     res.status(404).json({ messgae: "couldn't decrese product quantity" });
//   }
// };

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
    res.send(updatedCarts);
  } catch (e) {
    res.status(404).json({ messgae: "couldn't remove product from this cart" });
  }
};
