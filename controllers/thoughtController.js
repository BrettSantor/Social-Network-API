const { ObjectId } = require('mongoose').Types;
const { User, Thought }=require('../models');

module.exports = {
    //? gets all thoughts
    getThoughts(req,res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    //? gets single thought
    getSingleThought(req,res) {
        Thought.findOne({_id: req.params.thoughtId})
        .select('-__v')
        .then((thought) =>
        !thought? res.status(404).json({message: 'no thought with that id!'})
        :res.json(thought))
        .catch((err) => res.status(500).json(err));
    },
    //? create a thought
    createThought(req,res){
        Thought.create(req.body)
        .then((thought) => {
        User.findOneAndUpdate(
            {_id:req.body.userId },
            {$addToSet: {thoughts: thought._id}},
            {new:true}
        )
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
    //? updates single thought
    updateThought(req,res) {
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        .then((thought) => 
        !thought
        ? res.status(404).json({message: 'no thought with this id'})
        : res.json(thought))
        .catch((err) =>{
            console.log('line 55', err);
            res.status(500).json(err);
        });
    },
    //? deletes a single thought
    deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with that ID' })
          : User.findOneAndUpdate(
            {thoughts: req.params.thoughtId},
            {$pull: {thoughts: req.params.thoughtId}},
            {new:true}
          )
          )
          .catch((err) => res.status(500).json(err))
      },
      //? adds a reaction to a single thoughts reactions list
      createReaction(req,res){
        Reaction.create(req.body)
        .then((reaction) => {
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$addToSet: { reactions: req.body.reactionId}},
            {runValidators: true, new: true }
        )})
        .then((thought) => 
        !thought
        ? res.status(404).json({messge: 'no thought with that id'})
        : res.json(thought))
        .catch((err) => res.status(500).json(err));
      },
      //? removes friend from list of single user
      deleteReaction(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $pull: { reactions: { reactionId: req.params.reactionId } } },
          { runValidators: true, new: true }
        )
          .then((application) =>
            !application
              ? res.status(404).json({ message: 'No thought with this id' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },

}