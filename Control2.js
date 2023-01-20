const express = require('express')
const Students = require('./Students')

exports.displayData = async(req, res) =>{
    try {
        const Stude = await Students.find({},{_id:0})
        res.json(Stude)
    }
    catch (err) {
        message: err
    }
}