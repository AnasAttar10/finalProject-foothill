const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  price: { type: Number, required: true, min: 1 },
  category: { type: mongoose.Types.ObjectId, ref: "Category" },
  unitOfMeasure: { type: mongoose.Types.ObjectId, ref: "Unit" },
  image: { type: String, required: true },
});

module.exports = mongoose.model("Product", productSchema);
