const express = require('express')
const router = express.Router()
const postControllers = require('../controllers/posts')
console.log("postControllers",postControllers)
router.get('/',postControllers.allPosts)
router.get('/:id',postControllers.postById)
router.post('/',postControllers.createPost)

module.exports = router;
