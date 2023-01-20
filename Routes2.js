const express = require('express')
const router = express.Router();

const{ displayData } = require('./Control2')

router.get('/studentsList', displayData)

module.exports = router