import { createEvent, findEventById, findEventByIdAndDelete, findEventByIdAndUpdate, getAllEvents, getMyEvents } from "../Repositories/eventRepository.js"
import { findUserById } from "../Repositories/userRepository.js"

export const createNewEvent = async({title, description, category, mode, eligibility, startDate, endDate, regDeadline, status, organizer, prize, venue})=>{
    const event = await createEvent({title, description, category, mode, eligibility, startDate, endDate, regDeadline, status, organizer, prize, venue})
    return ({eventTitle: title, eventDescription: description, eventCategory: category, eventMode: mode, eventEligibility: eligibility, eventStartDate :startDate, eventendDate: endDate, eventRegDeadline: regDeadline, eventStatus: status, eventOrganizer: organizer, eventPrize: prize, eventVenue: venue})
}

export const updateEventById = async(eventId, updates)=>{
    const event = findEventById(eventId)
    if(!event){
        throw new Error("Event doesn't exists")
    }
    if(updates.organizer){
        throw new Error("Cannot update organizer")
    }
    const updatedEvent = await findEventByIdAndUpdate(eventId, updates)
    return updatedEvent
}

export const deleteEventById = async(eventId)=>{
    const event = await findEventById(eventId)
    if(!event){
        throw new Error("Event doesn't exists")
    }
    return await findEventByIdAndDelete(eventId)
}

export const getEventFeed = async(userId)=>{
    const user = await findUserById(userId)
    if(!user){
        throw new Error("User doesn't exists")
    }
    const allEvents = await getAllEvents()
    const myFeed =  allEvents.filter((event)=>{
        return event.organizer.toString()!==userId.toString()
    })
    return myFeed
}

export const fetchMyEventsById = async(userId)=>{
    if(!getMyEvents(userId)){
        throw new Error("You haven't organised events yet")
    }
    return await getMyEvents(userId)
}