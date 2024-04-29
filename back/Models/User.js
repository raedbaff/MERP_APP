const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
  {
    Email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
const User = mongoose.model("User", UserSchema);
module.exports = User;
