const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    //todo username
        //? string
        //? unique
        //? required
        //? trimmed
    username: {type: String, required: true, unique: true, trim: true },
    //todo email
    //? string
    //? required
    //? unique
    //? must match a valid email address
    email: { type:String, required: true, unique: true, match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/},
    //! Mongoose's matching validation
    //todo thoughts
    //? array of id values referencing the thought model
    thoughts: [thoughtSchema],
    //todo friends
    //? array of id values referencing the user model
    friends: [userSchema]
    
})
//! schema settings
    // create a virtual called friendcount that retrieves the length of the users friends array field on query

    // mongoose.Schema.Types.ObjectId

    module.exports = User;