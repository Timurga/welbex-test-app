const Router = require('express')
const router = new Router()
const controller = require('./postsController')
const jwtMiddleware = require('../middleware/jwtMiddleware')
const editMiddleware = require('../middleware/editMiddleware')

router.get('/getPosts', controller.getPosts)
router.post('/createPost', jwtMiddleware, controller.createPost)
router.delete('/deletePost', editMiddleware, controller.deletePost)
router.put('/editPost', jwtMiddleware, editMiddleware, controller.editPost)

module.exports = router