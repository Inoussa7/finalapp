// mongoData.js
const mongoose = require('mongoose');

// Define a Mongoose schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Define a Mongoose model
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;
