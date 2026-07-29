import { analyzeEventsWithAI } from "../Services/eventAiService.js"

export const analyzeEvents = async(req, res) =>{

    try {
        const userId = req.id
        const eventAiResult = await analyzeEventsWithAI(userId)
        res.status(200).json({ 
            success: true, 
            eventAiResult 
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}