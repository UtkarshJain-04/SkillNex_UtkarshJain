import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    dateofbirth:{
        type:Date,
        required: true
    },
    gender:{
        type:String,
        enum:['Male','Female','Rather not to say'],
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    bio:{
        type:String,
        required: true
    },
    college:{
        type:String,
        required: true
    }
},{timestamps:true})

export const User = mongoose.model('User',UserSchema);
