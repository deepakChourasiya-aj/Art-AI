import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "../mongodb/models/post.js";

dotenv.config();

const router = express.Router();
console.log(
  process.env.CLOUNDINARY_CLOUD_NAME,
  "process.env.CLOUNDINARY_CLOUD_NAME,"
);
cloudinary.config({
  cloud_name: process.env.CLOUNDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.route("/").get(async (req, res) => {
  try {
    console.log("Save images post routes request");
    const posts = await Post.find({});
    console.log(posts,"Save images post routes request");
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "Fetching posts failed, please try again",
      });
  }
});

router.route("/").post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    console.log(name, "name", prompt, "prompt", photo, "photo");
    const photoUrl = await cloudinary.uploader.upload(photo);
    console.log(photoUrl, "photo url here : is there present.");
    const newPost = new Post({
      name,
      prompt,
      photo: photoUrl.url,
    });
    await newPost.save();
    res.status(200).json({ success: true, data: newPost });
  } catch (err) {
    console.log(err, "upload error . ");
    res
      .status(500)
      .json({
        success: false,
        message: "Unable to create a post, please try again",
      });
  }
});
export default router;
