
const userModule = require("../module/userModule");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config();

const SECRTY_KEY = process.env.SECRTY_KEY;
const login_User = async (req, res) => {
    const { userEmail, userPass } = req.body;
    try {
        const user = await userModule.findOne({ userEmail: userEmail })
// console.log(user);
        if(userEmail === null || userEmail === "") {
            return res.status(404).json({
                Message: "plase enter email"
            })
        }
       else if (!user) {
            return res.status(404).json({
                Message: "user dose note exit"
            })
        }
        const result = bcrypt.compareSync(userPass, user.userPass)
        // const result = userPass === user.userPass;
        // console.log(result);
        if(userPass === null || userPass === "") {
            return res.status(404).json({
                Message: "enter  your paaword"
            })
        }
        if(!result) {
            return res.status(404).json({
                Message: "Invalid Password"
            })
        }  else {
            // const token = jwt.sign({ userEmail: user.userEmail }, SECRTY_KEY, { expiresIn: '1m' })
            return res.status(200).json({
                Message: "login successfuly",
                user: user,
                // token: token
            })
        }
    } catch (err) {
        return res.status(500).json({
            Message: 'this is a server error'
        })
    }
}

module.exports = {
    login_User
}