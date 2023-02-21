//todo thoughtText
    //? string
    //? required
    //? must be between 1-280 characters
//todo createdAt
    //? date
    //? set default value to the current time stamp
    //? use a getter method to format the timestamp on query
//todo Username
    //? string
    //? required
//todo reactions
    //? array of nested documents created with the reactionSchema

    //! schema settings
        //create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query