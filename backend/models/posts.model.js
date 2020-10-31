const { number } = require("joi");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema({ 
  title: {
    type: String,
    required: true,
  },
  body: {
      type: String,
      required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true
  },
  category: {
      type: String,
      required: true
  },
  previewImage: {
      type: String,
      default: "noimage.jpg"
  },
  votes:{
      type: number,
      required: true
  }
});

module.exports = mongoose.model("Posts", PostSchema);