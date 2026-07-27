const event = await findEventById(event_Id)
    if(!event){
        throw new Error("Event doesn't exists")
    }
    const user = await findUserById(participant_id)
    if(!user){
        throw new Error("User doesn't exists")
    }

    const event_reg = await findEventRegById(event_Id, participant_id)
    if(!event_reg){
        throw new Error("No such registration exists!")
    }