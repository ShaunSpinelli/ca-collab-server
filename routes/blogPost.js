const router= require('express').Router()
const BlogPost = require('../models/BlogPost')


router.get('/',(req,res)=>{
    BlogPost.find()
    .then((blogPost)=>res.send(blogPost))
    .catch(err => res.send(err))    
})

router.post('/',(req,res)=>{
    BlogPost.create(req.body)
    .then(blogPost => res.send(blogPost))
    .catch(err => res.send(err))
})

module.exports = router
