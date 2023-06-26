const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  price: { type: Number, required: true, min: 1 },
  category: { type: mongoose.Types.ObjectId, ref: "Category" },
  image: { type: String, required: true },
  // unitOfMeasure: { type: mongoose.Types.ObjectId, ref: "Unit" },
});

module.exports = mongoose.model("Product", productSchema);
