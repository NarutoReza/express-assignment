const mongoose = require("mongoose")

const Students = new mongoose.Schema({
    results:{
        type:Array
    }
})

module.exports = mongoose.model('Students', Students)