const {Schema, model} = require('mongoose')

const Post = new Schema({
    text: {type: String, required: true},
    image: {type: String, required: false},
    author: {type: String, required: true},
    dateCreate: {type: Date, required: true, default: Date.now}
})

module.exports = model('Post', Post)