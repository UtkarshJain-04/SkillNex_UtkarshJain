import express from 'express'
import protect from '../Middlewares/authMiddleware.js'
import { deleteMyProject, fetchMyProjects, getMyProjectFeed, newProject, updateMyProject } from '../Controllers/projectController.js'


const router = express.Router()

router.post('/create', protect, newProject)
router.put('/update/:projectId', protect, updateMyProject)
router.post('/delete/:projectId', protect, deleteMyProject)
router.get('/feed', protect, getMyProjectFeed)
router.get('/myprojects', protect, fetchMyProjects)

export default router;