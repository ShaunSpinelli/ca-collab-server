const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Topic = new Schema({
    title: String,
    parentId: String
})


module.exports = mongoose.model('Topic',Topic)
