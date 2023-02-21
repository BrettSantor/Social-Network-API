//todo username
    //? string
    //? unique
    //? required
    //? trimmed
//todo email
    //? string
    //? required
    //? unique
    //? must match a valid email address
        //! Mongoose's matching validation
//todo thoughts
    //? array of id values referencing the thought model
//todo friends
    //? array of id values referencing the user model

//! schema settings
    // create a virtual called friendcount that retrieves the length of the users friends array field on query