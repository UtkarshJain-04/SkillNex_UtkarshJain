import { updateRequestStatus } from "../Repositories/connectionRepository.js"
import { createProject, deleteProjectById, fetchMyProjectFeed, findMyProjects, findProjectById, updateProjectById } from "../Repositories/projectRepository.js"
import { findUserById } from "../Repositories/userRepository.js"

export const createNewProject = async({title, description, techstack, link, images, owner})=>{
    const project = await createProject({title, description, techstack, link, images, owner})
    return ({title: title, description: description, techstack: techstack, link: link, images: images, owner: owner})
}

export const updateProject = async(userId, id, updates)=>{
    const project = await findProjectById(id)
    if(!project){
        throw new Error("Project doesn't exists")
    }
    if(project.owner.toString()!==userId.toString()){
        throw new Error("You are not authorized to updated")
    }
    const allowedUpdates = {}
    if(updates.owner){
        throw new Error("Authorization error")
    }
    else{
        allowedUpdates.title = updates.title
        allowedUpdates.description = updates.description
        allowedUpdates.techstack = updates.techstack
        allowedUpdates.link = updates.link
        allowedUpdates.images = updates.images
    }
    const updatedProject = await updateProjectById(id, allowedUpdates)
    return updateProject
}

export const deleteProject = async(id)=>{
    const project = await findProjectById(id)
    if(!project){
        throw new Error("Project doesn't exists")
    }
    return await deleteProjectById(id)
}

export const getProjectFeed = async(userId)=>{
    const user = await findUserById(userId)
    if(!user){
        throw new Error("User not found")
    }
    const myProjectFeed = await fetchMyProjectFeed(userId)
    return myProjectFeed
}

export const getMyProjects = async(userId)=>{
    const user = await findUserById(userId)
    if(!user){
        throw new Error("User not found")
    }
    const myProjects = await findMyProjects(userId)
    return myProjects
}