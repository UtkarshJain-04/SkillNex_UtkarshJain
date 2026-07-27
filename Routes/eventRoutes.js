import express from 'express'
import { deleteEvent, fetchMyEvents, fetchMyFeed, newEvent, updateEvent } from '../Controllers/eventController.js'
import protect from '../Middlewares/authMiddleware.js'

const router = express.Router()

router.post('/create', protect, newEvent)
router.put('/update/:eventId', protect, updateEvent)
router.post('/delete/:eventId', protect, deleteEvent)
router.get('/eventfeed', fetchMyFeed)
router.get('/myevents', protect, fetchMyEvents)

export default router;