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
        .then((user) => res.status(200).json(user))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
    //? updates single user
    updateUser(req,res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        .then((user) => 
        !user
        ? res.status(404).json({message: 'no user with this id'})
        : res.status(200).json(user))
        .catch((err) =>{
            console.log('line 55', err);
            res.status(500).json(err);
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
          .then(() => res.status(200).json({ message: 'user and thoughts deleted...💀' }))
          .catch((err) => res.status(500).json(err));
      },
      //? adds a friend to a single users friend list
      addFriend(req,res){
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$addToSet: { friends: req.body._id}},
            {runValidators: true, new: true }
        )
        .then((user) => 
        !user
        ? res.status(404).json({messge: 'no user with that id'})
        : res.json(user))
        .catch((err) => res.status(500).json(err));
      },
      //? removes friend from list of single user
      removeFriend(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $pull: { friends: req.params.friendId } },
          { runValidators: true, new: true }
        )
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with this id' })
              : res.json({message: 'friend removed...💀'})
          )
          .catch((err) => res.status(500).json(err));
      },

}