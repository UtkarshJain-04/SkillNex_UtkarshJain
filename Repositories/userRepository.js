import { User } from "../Models/User.js"

export const findUserById = async(id)=>{
    return await User.findById(id)
}

export const findUserByEmail = async(email)=>{
    return await User.findOne({email})
}

export const findUserByCollege = async(college)=>{
    return await User.find({
        college: college
    }).select('-password')
}

export const findUserByName = async(name)=>{
    return await User.find({
        name: name
    }).select('-password')
}

export const createUser = async(userData)=>{
    return await User.create(userData)
}

export const findUserByIdAndUpdate = async(id, updates)=>{
    return await User.findByIdAndUpdate(id, updates, {new:true})
}

export const findUserByIdAndDelete = async(id)=>{
    return await User.findByIdAndDelete(id)
}