const router = require('express').Router()

// import controllers here
const helloController = require('./controllers/helloController')

// set up routes here
router.get('/', helloController.hello)

module.exports = router
