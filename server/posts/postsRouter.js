const Router = require('express')
const router = new Router()
const controller = require('./postsController')
const jwtMiddleware = require('../middleware/jwtMiddleware')

router.get('/getPosts', controller.getPosts)
router.post('/createPost', jwtMiddleware, controller.createPost)
router.delete('/deletePost', controller.deletePost)
router.put('/editPost', jwtMiddleware, controller.editPost)

module.exports = router