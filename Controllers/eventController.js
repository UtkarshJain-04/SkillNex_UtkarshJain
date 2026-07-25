import { Event } from "../Models/Event.js"
import { createNewEvent } from "../Services/eventService.js"

export const newEvent = async(req, res)=>{
    try {
        const existingEvent = await Event.findOne({
            title: req.body.title,
            organizer: req.body.organizer,
            startDate: req.body.startDate
        })
        if(existingEvent){
            return res.status(400).json({
                success: false,
                message: "Event already exists"
            })
        }
        const event = await createNewEvent(req.body)
        res.status(201).json({
            success: true,
            message: "Event created successfully",
            event
        })
    } catch (error) {
        console.log("Error while creating event",error)
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}