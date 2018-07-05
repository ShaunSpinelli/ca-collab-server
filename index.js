require('dotenv').config()
const mongoose = require('mongoose')
const express= require('express')

// const BlogPost = require('./models/BlogPost')
// Middleware
const bodyParser = require('body-parser')
const { requireJwt } = require('./middleware/authentication')
const cors = require('cors')

// Routing 
const blogPostRoutes = require('./routes/blogPost')
const topicRoutes = require('./routes/topic')
const userRoutes = require('./routes/user')
const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/blogpost', requireJwt,blogPostRoutes)

app.use('/topics', requireJwt,topicRoutes)

app.use('/user', userRoutes)


console.log(process.env.DB_USER)

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds125871.mlab.com:25871/cs-collab`,(err)=>{
    if(err){
        console.log('Error:', err.message)
    }else{
        console.log('Connected to db')
    }
})

app.listen(process.env.PORT || 8080, ()=> console.log('listening on 8080'))