const mongoose = require('mongoose');
const {Schema} = mongoose
const seler_data = new Schema({
    title: { type: String},
    price: { type: String},
    discount: { type: String},
    rating: { type: String},
    stock: { type: Number},
    brand: { type: String},
    category: { type: String},
    image: { type: String},
    
  });

  const seler_register = mongoose.model('product_data', seler_data);


  module.exports = seler_register