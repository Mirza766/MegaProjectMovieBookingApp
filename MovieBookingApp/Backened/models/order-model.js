
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: String,
  name:{
    type:String,
    required:true
  },
  email:{
     type:String,
    required:true
  },
  items: [{
    age_rating:String,
    title: String,
    quantity: Number,
    language:String,
    release_year:String,
    poster_url:String,
    price: Number
  }],
  subtotal: Number,
  discount: Number,
  tax: Number,
  finalTotal: Number,
  createdAt: { type: Date, default: Date.now }
});

const Order=mongoose.model('Order', OrderSchema);

module.exports={Order}