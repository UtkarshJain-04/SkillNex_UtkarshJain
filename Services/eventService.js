import { createEvent } from "../Repositories/eventRepository.js"

export const createNewEvent = async({title, description, category, mode, eligibility, startDate, endDate, regDeadline, status, organizer, prize, venue})=>{
    const event = await createEvent({title, description, category, mode, eligibility, startDate, endDate, regDeadline, status, organizer, prize, venue})
    return ({eventTitle: title, eventDescription: description, eventCategory: category, eventMode: mode, eventEligibility: eligibility, eventStartDate :startDate, eventendDate: endDate, eventRegDeadline: regDeadline, eventStatus: status, eventOrganizer: organizer, eventPrize: prize, eventVenue: venue})
}