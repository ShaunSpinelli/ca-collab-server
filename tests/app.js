const mongoose = require('mongoose')
const express= require('express')
const BlogPost = require('../models/BlogPost')
const bodyParser = require('body-parser')
const blogPostRoutes = require('../routes/blogPost')
const topicRoutes = require('../routes/topic')

const app = express()

app.use(bodyParser.json())

app.use('/blogposts', blogPostRoutes)

app.use('/topics', topicRoutes)


mongoose.connect('mongodb://localhost/ca-collab-test',(err)=>{
    if(err){
        console.log('Error:', err.message)
    }else{
        console.log('Connected to db')
    }
})

module.exports = app