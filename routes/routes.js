
const express = require("express")
const bodyParser = require("body-parser")
const { createdTask, gettodo, updateTodo, delteTodo } = require("../controller/createdTodo")

const routes = express.Router()
routes.post("/creat-task", createdTask)
routes.get("/get-todo", gettodo)
routes.patch("/update/:id", updateTodo)
routes.delete("/delete/:id", delteTodo)


module.exports = routes;