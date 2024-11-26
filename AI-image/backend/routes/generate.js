const express  = require('express')
const router = express.Router()
const {sendQuery} = require('../controllers/imageController')

router.post('/query', sendQuery)



module.exports = router