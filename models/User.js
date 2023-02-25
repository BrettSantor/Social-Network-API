const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    //todo username
    username: {type: String, required: true, unique: true, trim: true },
    //todo email
    email: { type:String, required: true, unique: true, match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/},
    //todo thoughts
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'thought'}],
    //todo friends
    friends: [{ type: Schema.Types.ObjectId, ref: 'user'}]
    
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
});

    userSchema.virtual('friendCount').get(function () {
        return this. friends.length;
    });

    const User = model('user', userSchema);
    module.exports = User;