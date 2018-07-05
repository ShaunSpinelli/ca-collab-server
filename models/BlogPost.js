const mongoose = require('mongoose')
const Schema = mongoose.Schema


const BlogPost = new Schema({
    title: String,
    content: String,
    topicId: String,
    userId: String,
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

module.exports = mongoose.model('BlogPost',BlogPost)