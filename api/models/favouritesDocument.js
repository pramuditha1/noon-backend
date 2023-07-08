import mongoose from "mongoose";

const favouritePostsSchema = mongoose.Schema({
  title: String,
  subTitle: String,
  image: String,
  post: String,
  tags: [String],
  likes: Number,
  comments: Number,
  user: {
    userID: String,
    username: String,
    profileImage: String,
  },
});

const favouritesDocument = mongoose.model("favouritesPostsCollection", favouritePostsSchema);

export default favouritesDocument;
