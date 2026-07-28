import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
    title:{
        type: String,
        trim: true,
        required: true
    },
    images:{
        type: String,
        default: ""
    },
    description:{
        type: String,
        trim: true,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    techstack:[
        {
            type: String
        }
    ],
    progress:{
        type: Number,
        min: 0,
        max: 100,
        default: 0
    }
},{timestamps: true})

export const Project = mongoose.model('Project',projectSchema)