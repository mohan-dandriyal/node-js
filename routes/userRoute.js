
const express = require("express");
const bodyParser = require("body-parser");
const { create_user, get_user, delete_user, update_user } = require("../controller/createUser");
const {login_User} = require("../controller/loginuser")

const userRout = express.Router(); 

// create a user routes 
userRout.post("/post", create_user);
userRout.get("/get", get_user);
userRout.patch("/update/:id", update_user)
userRout.delete("/delete/:id", delete_user);

// ligin user 
userRout.post('/login', login_User )

module.exports = userRout;