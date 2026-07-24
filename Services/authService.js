import { createUser, findUserByEmail } from "../Repositories/userRepository.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

export const signupUser = async({name, email, password, dateofbirth, gender, bio, college})=>{
    const existingUser = await findUserByEmail(email)
    if(existingUser){
        throw new Error("User already exists")
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await createUser({name, email, bio, college, dateofbirth, gender, password: hashedPassword})
    return {userId: user._id, name: user.name, email: user.email, bio: user.bio,
        college: user.college, dateofbirth: user.dateofbirth, gender: user.gender}
}

export const loginUser = async({email, password}) =>{
    const user = await findUserByEmail(email)
    if(!user){
        throw new Error("Invalid email or password")
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        throw new Error("Invalid email or password")
    }
    const token = await jwt.sign({userId: user._id},process.env.JWT_SECRET, {expiresIn: '24h'})
    return {token, user:{
        userId: user._id, userEmail: user.email, 
        userName: user.name, userBio: user.bio, 
        userCollege: user.college, userDateofbirth: user.dateofbirth, 
        userGender: user.gender} }
}

