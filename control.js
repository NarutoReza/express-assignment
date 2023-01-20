const express = require('express')
const Type = require('./Type')

exports.displayData = async(req, res) => {
    try{
        const types = await Type.find()
        res.json(types)
    }
    catch(err){
        message:err
    }
}

exports.saveData = async(req, res) => {

    const data = new Type({
        studentFirstName: req.body.studentFirstName,
        collegeName: req.body.collegeName,
        location: req.body.location
    })

    try {
         const saveData = await data.save()
         res.json("result: success")
    } catch (err) {
        message: err
    }
}