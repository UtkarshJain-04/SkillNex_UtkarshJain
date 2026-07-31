import { findMyProfile, updateMyProfile } from "../Services/profileService.js"

export const getProfile = async(req, res)=>{
    try {
        const userId = req.id
        const profile = await findMyProfile(userId)
        res.status(200).json({
            success: true,
            message: "Profile fetched successfully",
            profile
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const updateProfile = async(req, res)=>{
    try {
        const userId = req.id
        const updatedProfile = await updateMyProfile(userId, req.body)
        res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            updatedProfile
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}