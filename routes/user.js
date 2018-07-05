const  router = require('express').Router()
const User = require('../models/User')
const { register } = require('../middleware/authentication')


router.post('/register', register, (req,res) =>{
    res.send(req.user)
})

module.exports = router

