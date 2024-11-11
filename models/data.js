// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required:true
  },
  isAllowed :{
    type: Boolean,
    default : true
  }
});

module.exports = mongoose.model('User', userSchema);
