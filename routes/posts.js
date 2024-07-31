const mongoose = require('mongoose');

// Define the schema
const postSchema = new mongoose.Schema({
  imageText: {
    type: String,
    required: true
  },
  image:{
    type: String
  },
  user:{
   type: mongoose.Schema.Types.ObjectId,
   ref:"User"
  },
  currentDateTime: {
    type: Date,
    default: Date.now,
    required: true
  },
  likes: {
    type: Array,
    default: []
  }
});

// Create the model
module.exports = mongoose.model('Post', postSchema);


