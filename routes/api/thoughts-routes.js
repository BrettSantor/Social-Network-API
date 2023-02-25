//? home route /thoughts
    //todo get all thoughts
//! /api/thoughts
    //todo GET a single thought by id
    //todo POST to create a new thought and push thought id to users thoughts array field
    //todo PUT update thought by id
    //todo DELETE thought by id
    //! /api/thoughts/:thoughtsId/reactions
        //todo POST to create a reaction stored in a single thoughts reactions array field
        //todo DELETE to pull and remove a reaction by the reactions reactionId value

        const router =require('express').Router();
        const {
            getThoughts,
            getSingleThought,
            createThought,
            updateThought,
            deleteThought,
            createReaction,
            deleteReaction
        } = require('../../controllers/thoughtController');

        //* /api/thoughts
router.route('/')
.get(getThoughts)
.post(createThought);

        //* /api/thoughts/:thoughtId
router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

        //* /api/thoughts/:thoughtId/reactions
        router.route('/:thoughtId/reactions')
        .post(createReaction);

        //* /api/thoughts/:thoughtId/reactions/:reactionId
        router.route('/:thoughtId/reactions/:reactionId')
        .delete(deleteReaction);
