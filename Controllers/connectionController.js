import { getAcceptedConnection, getMyConnectionFeed, getPendingRequestsForUser, respondToRequest, sendConnectionRequest } from "../Services/connectionService.js"

export const sendRequest = async(req, res)=>{
    try {
        const {receiverId} = req.params
        const request = await sendConnectionRequest(req.id, receiverId)
        res.status(200).json({
            success: true,
            message: "Request sent successfully",
            request
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const acceptRequest = async(req, res)=>{
    try {
        const {requestId} = req.params
        const acceptedRequest = await respondToRequest(requestId, req.id, 'accepted')
        res.status(200).json({
            success: true,
            message: "Request accepted successfully",
            acceptRequest
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const rejectRequest = async(req, res)=>{
    try {
        const {requestId} = req.params
        const rejectedRequest = await respondToRequest(requestId, req.id, 'rejected')
        res.status(200).json({
            success: true,
            message: "Request rejected successfully",
            rejectRequest
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const connectionFeed = async(req, res)=>{
    try {
        const userId = req.id
        const myConnectionFeed = await getMyConnectionFeed(userId)
        res.status(200).json({
            success: true,
            message: "Connection Feed fetched successfully",
            myConnectionFeed
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const fetchMyAcceptedConnection = async(req, res)=>{
    try {
        const userId = req.id
        const myAcceptedConnections = await getAcceptedConnection(userId)
        res.status(200).json({
            success: true,
            message: "Accepted Connections fetched successfully",
            myAcceptedConnections
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const fetchPendingRequests = async(req, res)=>{
    try {
        const userId = req.id
        const myPendingRequests = await getPendingRequestsForUser(userId)
        res.status(200).json({
            success: true,
            message: "Pending requests fetched successfully",
            myPendingRequests
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


