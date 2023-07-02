const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    isAdmin: { type: Boolean, required: true, default: false },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
