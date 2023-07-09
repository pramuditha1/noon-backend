import mongoose from "mongoose";
import PostModel from "../models/posts.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

export const addPosts = async (req,res) => {
    const post = req.body;
    const newPost = new PostModel(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
        console.log(newPost)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}