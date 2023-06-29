const mongoose = require("mongoose");
const { Schema } = mongoose;
const unitSchema = new Schema({
  name: { type: String, required: true },
  baseUnit: { type: String, required: true },
  conversionFactor: { type: Number, required: true },
});

module.exports = mongoose.model("Unit", unitSchema);
