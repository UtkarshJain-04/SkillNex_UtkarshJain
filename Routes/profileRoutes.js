import express from 'express'
import { getProfile, updateProfile } from '../Controllers/profileController.js';
import protect from '../Middlewares/authMiddleware.js';

const router = express.Router()

router.get('/info', protect, getProfile)
router.put('/update', protect, updateProfile)

export default router;