import express from 'express'
import { acceptRequest, connectionFeed, fetchMyAcceptedConnection, fetchPendingRequests, rejectRequest, sendRequest } from '../Controllers/connectionController.js';
import protect from '../Middlewares/authMiddleware.js';
import { fetchMyFeed } from '../Controllers/eventController.js';

const router = express.Router()

router.post('/send/:receiverId', protect, sendRequest)
router.put('/accept/:requestId', protect, acceptRequest)
router.put('/reject/:requestId',protect, rejectRequest)
router.get('/feed', protect, connectionFeed)
router.get('/accepted', protect, fetchMyAcceptedConnection)
router.get('/pending', protect, fetchPendingRequests)

export default router;