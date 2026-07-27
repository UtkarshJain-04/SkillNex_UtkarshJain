import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const EventRegSchema = new mongoose.Schema({
    eventId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true,
    },
    participantId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status:{
        type: String,
        enum: ['Registered','Cancelled'],
        required: true
    }
},{timestamps: true})

export const EventReg = mongoose.model('EventReg',EventRegSchema)