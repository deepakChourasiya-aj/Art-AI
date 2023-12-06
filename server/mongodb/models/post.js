import mongoose from 'mongoose';

const postSchema =  mongoose.Schema({
  name: { type: String },
  prompt: { type: String},
  photo: { type: String, required: true },
});

const Post = mongoose.model('Post', postSchema);

export default Post;
