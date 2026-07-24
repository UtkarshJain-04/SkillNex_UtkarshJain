import { createUser, findUserByEmail } from "../Repositories/userRepository.js"
import bcrypt from "bcrypt"


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

