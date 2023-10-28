
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const Salt_Factor = 10;

const userSchema = mongoose.Schema({
    userName : {
        type : String,
        require : true,
        allowNull : true
    },

    userContect: {
       type :  String,
        require : true,
        allowNull : true
    },

    userEmail : {
        type : String,
        require : true,
        allowNull : true
    },

    userPass : {
        type : String,
        require : true,
        allowNull : true
    },

    create_At : {
        type : Date,
        default : new Date
    },
    
    userActive : {
        type : []
    }
})

userSchema.pre("save", function(next) {
    const user = this;

    bcrypt.genSalt(Salt_Factor, function(err, salt) {
        if(err) return next(err.message);

        bcrypt.hash(user.userPass, salt, function(err, hash) {
            if(err) return next(err.message);
            user.userPass = hash
            next()
        })
    })
})

// userSchema.pre("save", async function(next){
//     const user = this;

//     try{
//         const salt = await bcrypt.genSalt(10)
//         const hash = await bcrypt.hash(user.userPass, salt)
//         user.userPass = hash;
//         next();
//     } catch (err){
//         next(err)
//     }

// })

const userModule = mongoose.model("users", userSchema)

module.exports = userModule