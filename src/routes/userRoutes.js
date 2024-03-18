import express from 'express';
import { createUser,Login } from '../controllers/userController.js';
const router = express.Router();

router.post('/signup', createUser);
router.post('/login', Login);

export default router;
