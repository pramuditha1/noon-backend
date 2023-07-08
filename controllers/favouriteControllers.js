import mongoose from "mongoose";
import FavouritePostModel from "../models/favouritePost.js";

export const getFavourites = async (req, res) => {
    try {
        const favouritePosts = await FavouritePostModel.find();
        res.status(200).json(favouritePosts);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

export const addFavourites = async (req,res) => {
    const post = req.body;
    const newPost = new FavouritePostModel(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
        console.log(newPost)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const deleteFavourite = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    await FavouritePostModel.findByIdAndRemove(id);
    res.json({message: 'Post deleted successfully'});
}