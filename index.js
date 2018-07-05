const mongoose = require('mongoose')
const express= require('express')
const BlogPost = require('./models/BlogPost')
const bodyParser = require('body-parser')
const blogPostRoutes = require('./routes/blogPost')
const topicRoutes = require('./routes/topic')
const userRoutes = require('./routes/user')
const app = express()

app.use(bodyParser.json())

app.use('/blogpost', blogPostRoutes)

app.use('/topics', topicRoutes)

app.use('/user', userRoutes)


mongoose.connect('mongodb://localhost/ca-collab',(err)=>{
    if(err){
        console.log('Error:', err.message)
    }else{
        console.log('Connected to db')
    }
})

app.listen(1234, ()=> console.log('listening on 1234'))