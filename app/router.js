const router = require('express').Router()

// import controllers here
const catController = require('./controllers/catController')

// set up routes here
router.post('/cats', catController.create)
router.get('/cats', catController.list)
router.get('/cats/:id', catController.get)
router.put('/cats/:id', catController.update)
router.delete('/cats/:id', catController.delete)

module.exports = router
