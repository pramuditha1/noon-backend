import express from 'express';
import { getFavourites, addFavourites, deleteFavourite } from '../controllers/favouriteControllers.js';

const router = express.Router();

router.get('/', getFavourites);
router.post('/', addFavourites);
router.delete('/:id', deleteFavourite);

export default router;