const express = require('express');
const router = express.Router();
const init = require('../dbConfig')
const Post = require('../models/post')

// post index route
router.get('/', async (req, res) => {
    try {
        const posts = await Post.all
        res.status(200).json({posts})
    } catch(err) {
        res.status(500).json({err})
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
// post show route
router.get('/:id', async(req,res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    }   catch(err) {
        res.status(404).json({err}) // why is this an obj?
    }
})


module.exports = router;
