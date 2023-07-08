import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    user: {
        userID: String,
        username: String,
        profileImage: String,
    },
    title: String,
    subTitle: String,
    image: String,
    post: String,
    tags: [String],
    likes: Number,
    comments: Number,
    LikedUser: String
})

const FavouritePostsCollection = mongoose.model('FavouritePostsCollection', postSchema);

export default FavouritePostsCollection;