const mongoose = require("mongoose");
const { Schema } = mongoose;
const cartSchema = new Schema({
  name: { type: String, required: true },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: { type: Number, required: true, default: 1 },
    },
  ],
});

module.exports = mongoose.model("Cart", cartSchema);
