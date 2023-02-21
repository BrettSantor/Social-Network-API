//? home routes /users
    //todo GET all users
//! /api/users
//todo GET a single user by id and populated thought and friend data
//todo POST new user
//todo PUT update a user by its id
//todo DELETE to remove its user by id
//! /api/users/:userId/friends/:friendId
    //? friend route
//todo POST to add a new friend to a users friend list
//todo DELETE to remove a friend from a users friend list

//? remove a users associated thoughts when deleted

//? home route /thoughts
    //todo get all thoughts
//! /api/thoughts
    //todo GET a single thought by id
    //todo POST to create a new thought and push though id to users thoughts array field
    //todo PUT update thought by id
    //todo DELETE thought by id
    //! /api/thoughts/:thoughtsId/reactions
        //todo POST to create a reaction stored in a single thoughts reactions array field
        //todo DELETE to pull and remove a reaction by the reactions reactionId value