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

const { ObjectId } = require('mongoose').Types;
const { User, Thought }=require('../models');

module.exports = {
    //? gets all users
    getUsers(req,res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    //? gets single user
    getSingleUser(req,res) {
        User.findOne({_id: req.params.userId})
        .select('-__v')
        .then((user) =>
        !user? res.status(404).json({message: 'no user with that id!'})
        :res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    //? create a user
    createUser(req,res){
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
    //? deletes a single user
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : Thought.deleteMany({ _id: { $in: user.thoughts } })
          )
          .then(() => res.json({ message: 'user and thoughts deleted!' }))
          .catch((err) => res.status(500).json(err));
      },

}