import express from 'express'
import { newEvent, updateEvent } from '../Controllers/eventController.js'
import protect from '../Middlewares/authMiddleware.js'

const router = express.Router()

router.post('/create', protect, newEvent)
router.put('/update/:eventId', protect, updateEvent)

export default router