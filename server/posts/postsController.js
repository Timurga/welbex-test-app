const Post = require('../models/Post')
const { secret } = require("../config")

class postsController {
    async getPosts(req, res) {
        try {
            const posts = await Post.find()
            res.json(posts)
        } catch (e) {
            console.error(e);
        }
    }

    async createPost(req, res) {
        const { text, author } = req.body
        const post = new Post({ text, author })
        post.save()
            .then(() => res.status(201).json({ message: 'Post saved successfully' }))
            .catch(error => res.status(500).json({ error: 'Unable to save the post entry' }));
    }

    async deletePost(req, res) {
        const postId = req.body.id
        await Post.findByIdAndDelete(postId)
            .then(() => {
                res.json({ message: 'Post deleted successfully' })
            })
            .catch((error) => {
                console.log('Error deleting post', error);
                res.status(500).json({ error: 'Failed to delete post' });
            });
    }

    async editPost(req, res) {
        try {
            const { id, content } = req.body
            const post = await Post.findByIdAndUpdate(id, {text: content})
            if (!post) {
                return res.status(404).json({ error: 'Пост не найден' })
            }

            post.text = content

            res.json(post)
        } catch (e) {
            console.log('Error editing post')
            res.status(500).json({ error: 'Failed to edit post' })
        }

    }
}

module.exports = new postsController()