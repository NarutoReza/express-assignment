const express = require('express')
const router = express.Router();

const{displayData, saveData} = require('./control')

router.get('/getDetails', displayData)
router.post('/add', saveData)

module.exports = router