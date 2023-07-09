import mongoose from "mongoose";
import FavouritePostModel from "../models/favouritePost.js";

export const getFavourites = async (req, res) => {
    try {
        const favouritePosts = await FavouritePostModel.find();
        res.status(200).json(favouritePosts);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

export const addFavourites = async (req, res) => {
    const post = req.body;
    const newPost = new FavouritePostModel(post);
    try {
        // Check if the post already exists in the collection
        const existingPost = await FavouritePostModel.findOne({ _id: post._id });

        if (existingPost) {
            return res.status(201).json({ id: post._id, error: "Post already exists." });
        } else {
            await newPost.save();
            res.status(201).json(newPost);
            console.log(newPost)
        }

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const deleteFavourite = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    await FavouritePostModel.findByIdAndRemove(id);
    res.status(201).json({ id, message: 'Post deleted successfully' });
}