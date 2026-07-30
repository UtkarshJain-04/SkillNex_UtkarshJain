import express from 'express'
import protect from '../Middlewares/authMiddleware.js';
import { analyzeEvents } from '../Controllers/eventAiController.js';

const router = express.Router()

router.post('/analyze', protect, analyzeEvents)

export default router;
