const mongoose = require("mongoose")

const Assignment = new mongoose.Schema({
    studentFirstName:{
        type:String
    },
    collegeName:{
        type:String
    },
    location:{
        type:String
    }
})

module.exports = mongoose.model('Assignment', Assignment)