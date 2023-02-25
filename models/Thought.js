const { Schema, model } = require('mongoose');


const reactionSchema = new Schema({
    reactionId:  Schema.Types.ObjectId,
    reactionBody: {type: String, required: true, maxLength: 280 },
    username: { type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})


const thoughtSchema = new Schema({

    //todo thoughtText
  
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    //todo createdAt
    createdAt: { type: Date, default: Date.now},
    //todo Username
    username: { type: String, required: true},
    //todo reactions
    reactions: [reactionSchema]
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
});

    //! schema settings
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;