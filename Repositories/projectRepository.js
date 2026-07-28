import { Project } from "../Models/Project.js"

export const findProjectById = async(id)=>{
    return await Project.findById(id)
}

export const createProject = async(projectData)=>{
    return await Project.create(projectData)
}

export const updateProjectById = async(projectId, updates)=>{
    return await Project.findByIdAndUpdate(projectId, updates, {new:true})
}

export const deleteProjectById = async(projectId)=>{
    return await Project.findByIdAndDelete(projectId)
}

export const findMyProjects = async(userId)=>{
    return await Project.find({
        owner: userId
    })
}

export const fetchMyProjectFeed = async(userId)=>{
    return await Project.find({
        owner: {$ne: userId}
    })
}