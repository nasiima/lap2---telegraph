const express = require('express');
const router = express.Router();

const Post = require('../models/post')

// post index route
// should be make-new-post page?

// post show route
router.get('/:id', async(req,res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    }   catch(err) {
        res.status(404).json({err}) // why is this an obj?
    }
})

// create post route
router.post('/', async (req,res) => {
    try {
        const post = await Post.create(req.body.title, req.body.name, req.body.content)
        res.status(201).json(post)
    } catch (err) {
        res.status(404).json({err})
    }
})

module.exports = router;
