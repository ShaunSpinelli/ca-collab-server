const  router = require('express').Router()
const User = require('../models/User')
const { register, requireJwt ,signJwtForUser, login} = require('../middleware/authentication')


router.post('/register', register, signJwtForUser)

router.post('/login', login, signJwtForUser)


router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});


module.exports = router

