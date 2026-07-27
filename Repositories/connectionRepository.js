import connection from "../models/Connection.js";

export const createConnection = async(senderId, receiverId)=>{
    console.log("sender:",senderId)
    console.log("receiver:",receiverId)
    return await connection.create({
        sender: senderId,
        receiver: receiverId
    })
}

export const findExistingRequest = async(userA, userB)=>{
    return await connection.find({
        $or:[
            {sender:userA, receiver:userB},
            {sender:userB, receiver:userA}
        ]
    })
}

export const findRequestById = async(requestId)=>{
    return await connection.findById(requestId)
}

export const updateRequestStatus = async(requestId, newStatus)=>{
    return await connection.findByIdAndUpdate(requestId, {status: newStatus}, {new:true})
}

export const findAllRequestsForUser = async(userId)=>{
    return await connection.find({
        $or:[
            {sender:userId},
            {receiver:userId}
        ]
    })
}

export const findPendingRequestsForUser = async(userId)=>{
    return await connection.find({
        status:'pending',
        receiver:userId
    })
}

export const findAcceptedConnectionsForUser = async(userId)=>{
    return await connection.find({
        status:'accepted',
        $or:[
            {receiver:userId},
            {sender:userId}
        ]
    })
}

export const findFeedInfoForUser = async(userId)=>{
    return await connection.find({
        $and:[
            {receiver:{$ne:userId}},
            {sender:{$ne:userId}}
        ]
    })
}