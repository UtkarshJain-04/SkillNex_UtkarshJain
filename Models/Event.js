import mongoose from "mongoose";

const EventScehma = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    category:{
        type: String,
        required: true,
        trim: true
    },
    mode:{
        type: String,
        enum: ['Online','Offline','Hybrid'],
        required: true
    },
    eligibility:{
        type: String,
        required: true,
        trim: true
    },
    startDate:{
        type: Date,
        required: true
    },
    endDate:{
        type: Date,
        required: true
    },
    regDeadline:{
        type: Date,
        required: true
    },
    prize:{
        type: Number,
        min: 0,
        default: 0
    },
    teamSize:{
        type: Number,
        min: 1,
        max: 4,
        default: 1
    },
    status:{
        type: String,
        enum: ['Live','Upcoming','Completed'],
        required: true
    },
    venue:{
        type: String
    },
    organizer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{timestamps:true})

export const Event = mongoose.model('Event',EventScehma);