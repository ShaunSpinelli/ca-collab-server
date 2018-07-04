const mongoose = require('mongoose')
const Schema = mongoose.Schema


const BlogPost = new Schema({
    title: String,
    content: String,
    topicid: String,
    userid: String,
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

module.exports = mongoose.model('BlogPost',BlogPost)