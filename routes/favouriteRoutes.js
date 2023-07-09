import express from 'express';
import { getFavourites, addFavourites, deleteFavourite } from '../controllers/favouriteControllers.js';
import { addPosts, getPosts } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getFavourites);
router.get('/posts', getPosts);
router.post('/', addFavourites);
router.post('/posts', addPosts);
router.delete('/:id', deleteFavourite);

export default router;