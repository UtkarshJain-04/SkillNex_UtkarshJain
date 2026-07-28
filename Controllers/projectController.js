import { Project } from "../Models/Project.js"
import { createNewProject, deleteProject, getMyProjects, getProjectFeed, updateProject } from "../Services/projectService.js"

export const newProject = async(req, res)=>{
    try {
        const existingProject = await Project.findOne({
                    title: req.body.title.trim(),
                    owner: req.id
                })
                if(existingProject){
                    return res.status(400).json({
                        success: false,
                        message: "Project already exists"
                    })
                }
                const project = await createNewProject({
                    ...req.body,
                    owner: req.id
                })
                res.status(201).json({
                    success: true,
                    message: "Project added successfully",
                    project
                })
    } catch (error) {
        res.status(400).json({
            success: true,
            message: error.message
        })
    }
}

export const updateMyProject = async(req, res)=>{
    try {
        const {projectId} = req.params
        const updatedProjectDetail = await updateProject(req.id, projectId, req.body)
        res.status(200).json({
            success: true,
            message: "Project updated successfully",
            updatedProjectDetail
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const deleteMyProject = async(req, res)=>{
    try {
        const {projectId} = req.params
        const deletedProjectDetail = await deleteProject(projectId)
        res.status(200).json({
            success: true,
            message: "Project deleted successfully",
            deletedProjectDetail
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const getMyProjectFeed = async(req, res)=>{
    try {
        const id = req.id
        const myProjectFeed = await getProjectFeed(id)
        res.status(200).json({
            success: true,
            message: "Project feed fetched successfully",
            myProjectFeed
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const fetchMyProjects = async(req, res)=>{
    try {
        const id = req.id
        const myProjects = await getMyProjects(id)
        res.status(200).json({
            success: true,
            message: "Your created projects fetched successfully",
            myProjects
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}