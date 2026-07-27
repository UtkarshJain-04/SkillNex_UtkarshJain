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
    profile_img: {
    type: String,
    default: function () {
        return `https://api.dicebear.com/10.x/lorelei/svg?seed=${this._id}`
    }
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
