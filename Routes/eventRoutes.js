import express from 'express'
import { newEvent } from '../Controllers/eventController.js'

const router = express.Router()

router.post('/create',newEvent)
export default router