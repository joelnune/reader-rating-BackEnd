import express from 'express';
import {
    insertRating
} from '../controllers/ratingController.js'

import  verifyJWT  from '../utils/verifyJwt.js';

const router = express.Router();

router.post('/insert-rating',verifyJWT, insertRating);

export default router;
