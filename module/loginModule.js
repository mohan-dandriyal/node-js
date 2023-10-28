

const mongoose = require('mongoose')

const loginSchema = mongoose.Schema({
    email : {
        type : String,
        require : true
    },

    pass : {
        type : String,
        require : true
    },

    timing : {
        type : [],
    }
})

const userlogin = mongoose.model("loginuser", loginSchema)