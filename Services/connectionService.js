import { createConnection, findAcceptedConnectionsForUser, findAllRequestsForUser, findExistingRequest, findFeedInfoForUser, findPendingRequestsForUser, findRequestById, updateRequestStatus } from "../Repositories/connectionRepository.js"
import { findIncludedUserIds, findUserById } from "../Repositories/userRepository.js"

export const sendConnectionRequest = async(sender, receiver)=>{
    if(sender === receiver){
        throw new Error("Cannot send request to yourself")
    }
    const existingRequest = await findExistingRequest(sender, receiver)
    if(existingRequest.length>0){
        throw new Error("Request already exists between the users")
    }
    const connection = await createConnection(sender, receiver)
    return connection
}

export const respondToRequest = async(requestId, userId, action)=>{
    const request = await findRequestById(requestId)
    if(!request){
        throw new Error("There is no such request")
    }
    if(request.status!=='pending'){
        throw new Error("Cannot respond to request")
    }
    if(request.receiver.toString()!==userId){
        throw new Error("Authorization error!")
    }
    const status = action === 'accepted' ? 'accepted' : 'rejected'
    const updatedRequest = await updateRequestStatus(requestId, status)
    return updatedRequest
}

export const getMyConnectionFeed = async(userId)=>{
    const user = await findUserById(userId)
    if(!user){
        throw new Error("User not found")
    }
    const allRequests = await findAllRequestsForUser(userId)
    const excludedIds = allRequests.map((req)=>{
         return req.sender.toString() === userId ? req.receiver.toString() : req.sender.toString()
    })
    excludedIds.push(userId)
    const feedInfo = await findIncludedUserIds(excludedIds)
    return feedInfo
}

export const getAcceptedConnection = async(userId)=>{
    const user = await findUserById(userId)
    if(!user){
        throw new Error("User not found")
    }
    const acceptedConnections = await findAcceptedConnectionsForUser(userId)
    return await acceptedConnections
}

export const getPendingRequestsForUser = async(userId)=>{
    const user = await findUserById(userId)
    if(!user){
        throw new Error("User not found")
    }
    const pendingRequests = await findPendingRequestsForUser(userId)
    return await pendingRequests
}

