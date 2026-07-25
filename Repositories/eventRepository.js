import { Event } from "../Models/Event.js"

export const findEventById = async(id)=>{
    return await Event.findById(id)
}

export const createEvent = async(eventData)=>{
    return await Event.create(eventData)
}

export const findEventByCategory = async(category)=>{
    return await Event.find({
        category: category.lowercase()
    }).populate()
}

export const findEventByMode = async(mode)=>{
    return await Event.find({
        mode: mode
    }).populate()
}

export const findEventByStatus = async(status)=>{
    return await Event.find({
        status: status
    }).populate()
}

export const findEventByTitle = async(title)=>{
    return await Event.find({
        title: title
    }).populate()
}

export const findEventByIdAndUpdate = async(id, updates)=>{
    return await Event.findByIdAndUpdate(id, updates, {new:true})
}

export const findEventByIdAndDelete = async(id)=>{
    return await Event.findByIdAndDelete(id)
}

export const getAllEvents = async()=>{
    return await Event.find()
}

export const getMyEvents = async(userId)=>{
    return await Event.find({
        organizer: userId
    })
}



