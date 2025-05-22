const mongoose = require("mongoose");

let employee = {
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 10,
  },
  hobby: {
    type: String,
    enum: ["reading", "gaming", "sports"],
    required: true,
  },
};

// use the object to create the Schema
const userSchema = new mongoose.Schema(employee);

// now build and export the model
module.exports = mongoose.model("User", userSchema);
