const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({

    taskName : {
        type : String,
        require : true,
    },

    status : {
        type : String,
        require : true,
        default : "pendind"
    },
    email : {
        type : String,
        require : true,
        allownull : true
    },

    created_at : {
        type : Date,
        require : true,
        default : new Date
    },

    updated_at : {
        type : String,
        require : true,
        default : "--- / ---"
    }

})

const todoModule = mongoose.model("todo", todoSchema)
module.exports = todoModule