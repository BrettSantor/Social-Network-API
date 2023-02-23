const mongoose = require('mongoose');
const { Thought } = require('.');

//! REACTION
//todo reactionId
    //? use mongooses objectId data type
    //? default value is set to a new objectId
//todo reactionBody
    //? string
    //? required
    //? 280 character max
//todo Username
    //? string
    //? required
//todo createdAt
    //? date
    //? set default to the current timestamp 
    //? use a getter method to format the time stamp on query
    //! schema settings
        // not a model but will be used as the reaction fields subdocument schema in the thought model

const reactionSchema = new mongoose.Schema({
    reactionId:  mongoose.ObjectId,
    reactionBody: {type: String, required: true, maxLength: 280 },
    username: { type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})

const thoughtSchema = new mongoose.Schema({

    //todo thoughtText
    //? string
    //? required
    //? must be between 1-280 characters
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    //todo createdAt
    //? date
    //? set default value to the current time stamp
    //? use a getter method to format the timestamp on query
    createdAt: { type: Date, default: Date.now},
    //todo Username
    //? string
    //? required
    username: { type: String, required: true},
    //todo reactions
    //? array of nested documents created with the reactionSchema
    reactions: [reactionSchema]
});

    //! schema settings
        //create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query

module.exports = Thought;