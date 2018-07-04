const  router = require('express').Router()
const Topic = require('../models/Topic')


router.get('/',(req,res)=>{
    Topic.find()
    .then( topics => res.send(topics))
    .catch(err => res.send(err))
})

router.post('/',(req,res)=>{
    Topic.create(req.body)
    .then( topics => res.send(topics))
    .catch(err => res.send(err))
})


module.exports = router