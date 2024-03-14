import express from 'express';
import {
    insertRating
} from '../controllers/ratingController.js'
const router = express.Router();

router.post('/insert-rating', insertRating);

export default router;
