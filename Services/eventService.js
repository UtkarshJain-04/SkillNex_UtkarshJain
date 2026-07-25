import { createEvent, findEventById, findEventByIdAndUpdate } from "../Repositories/eventRepository.js"

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