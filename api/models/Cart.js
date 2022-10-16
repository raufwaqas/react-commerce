const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    productId: {
      type: String,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    img: {
      type: String,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    artnr: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cart', CartSchema);
