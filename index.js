
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(bodyParser.json({extended : true, limit: "5mb"}))
app.use(bodyParser.urlencoded({extended : true, limit: "5mb"}))
app.use(express.json({extended:true , limit:"5mb"}))

app.use(cors())

const todo = require("./routes/routes")
const user = require("./routes/userRoute")

app.use("/todo", todo)
app.use("/users", user)

const DB_URL = process.env.DB_URL;
const port = process.env.PORT;
mongoose.connect(DB_URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    app.listen(port, () => {
        console.log("server is running");
        console.log("database is connected ", port);
    })
}).catch((err) => {
    console.log("database is note connected =====>");
})

