import { EventReg } from "../Models/EventReg.js"
import { findEventById } from "./eventRepository.js"
import { findUserById } from "./userRepository.js"

export const createEventReg = async(regData)=>{
    return await EventReg.create(regData)
}

export const findEventRegById = async(event_Id, participant_id)=>{
    return await EventReg.find({
        $and:[
            {eventId: event_Id},
            {participantId: participant_id}
        ]
    })
}

export const updateEventRegById = async(event_Id, participant_id, updates)=>{
    return await EventReg.findByIdAndUpdate(event_Id, participant_id, updates, {new:true})
}



