import { loginUser, signupUser } from "../Services/authService.js"

export const signup = async(req, res)=>{
    try {
        const user = await signupUser(req.body)
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        })
    } catch (error) {
        console.log("Error while signing up",error)
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const login = async(req, res)=>{
    try {
        const userData = await loginUser(req.body)
        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            userData
        })
    } catch (error) {
        console.log("Error while logging in",error)
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}