const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

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

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);


module.exports = Thought;