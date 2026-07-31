import { findUserByIdAndUpdate, getUserById } from "../Repositories/userRepository.js"

export const findMyProfile = async(id)=>{
    const userProfile = await getUserById(id)
    console.log(id)
    if(!userProfile){
        throw new Error("User doesn't exists")
    }
    return await userProfile
}

export const updateMyProfile = async(id, updates)=>{
    const userProfile = await getUserById(id)
    if(!userProfile){
        throw new Error("Profile doesn't exists")
    }
    const allowedUpdates = {}
    if(updates.name) allowedUpdates.name = updates.name
    if(updates.bio) allowedUpdates.bio = updates.bio
    if(updates.college) allowedUpdates.college = updates.college
    const updatedUser = await findUserByIdAndUpdate(id, allowedUpdates)
    return await updatedUser
}