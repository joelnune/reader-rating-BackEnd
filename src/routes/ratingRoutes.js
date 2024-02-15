import express from 'express';
import {
    insertRating
} from '../controllers/ratingController.js'
const router = express.Router();

router.get('/insert-rating', insertRating);

export default router;
