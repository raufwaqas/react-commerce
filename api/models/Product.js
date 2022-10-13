const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    artnr: { type: Number },
    img: { type: String },
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    ean: { type: Number },
    volume: { type: String },
    desc: { type: String },
    shortdesc: { type: String },
    ingredients: { type: String },
    tag: { type: String },
    colorgroup: { type: String },
    label: { type: String },
    slug: { type: String },
    category: { type: String },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
