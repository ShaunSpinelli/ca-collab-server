const  router = require('express').Router()
const Topic = require('../models/Topic')


router.get('/',(req,res)=>{
    Topic.find((err,topics)=>{
        if (err)  res.send(err)
        res.send(topics)
    })
})

router.post('/',(req,res)=>{
    Topic.create(req.body)
    .then( topics => res.send(topics))
    .catch(err => res.send(err))
})


module.exports = router