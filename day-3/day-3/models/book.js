const mongoose = require("mongoose");

// use the object to create the Schema, & build and export the model
module.exports = mongoose.model(
  "User",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    author: {
      type: String,
      required: true,
    },
  })
);
