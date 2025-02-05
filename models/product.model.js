const mongoose = require("mongoose");

const prodcutSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter your name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);




const Product =  mongoose.model("Product",prodcutSchema);

module.exports = Product;