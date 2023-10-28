
const userModule = require("../module/userModule");
const bcrypt = require("bcrypt");

const SALT_FACTOR = 10;
// create user 
const create_user = async (req, res) => {
    const user = req.body;
    const newUser = userModule(user)

    try {
        const email = await userModule.findOne({
            userEmail: user.userEmail
        });

        if (email) {
            return res.status(400).json({
                Message: "Email are alredy Exit"
            })
        }

        else {
            await newUser.save();
            return res.status(201).json({
                Message: "user is created",
                result: newUser
            })
        }


    } catch (err) {
        return res.status(500).json({
            Message: "user create message is faild"
        })
    }
}

// get user data 
const get_user = async (req, res) => {

    const result = await userModule.find({})
    try {
        return res.status(200).json({
            Message: "get the user data",
            result: result,
            count: result.length
        })
    } catch (err) {
        return res.status(500).json({
            Message: "get requst is faild"
        })
    }
}

// update the user data 

const update_user = async (req, res) => {
    const id = req.params.id;
    const user = req.body
    await userModule.findOne({ _id: id })
    await userModule.findByIdAndUpdate(id, user)

    try {
        return res.status(200).json({
            Message: "data is updated",
            result: user
        })
    } catch (err) {
        return res.status(400).json({
            Message: " faild",
        })
    }
}

// delete the user 
const delete_user = async (req, res) => {

    const id = req.params.id;
    const find = await userModule.findOne({ _id: id });
    const result = await userModule.findByIdAndDelete(id);

    try {
        return res.status(200).json({
            Message: "data is deleted"
        })
    } catch (err) {
        return res.status(500).json({
            Message: "data is not deleted"
        })
    }
}



module.exports = {
    create_user,
    get_user,
    update_user,
    delete_user,
}