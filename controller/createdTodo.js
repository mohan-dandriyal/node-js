
const todoModule = require("../module/todoModule");


// this is my post  apil requst
const createdTask = (req, res) => {
    const todo = req.body
    const newTodo = todoModule(todo)

    try{
        newTodo.save()

       return res.status(201).json({
            Message : "task is creates",
            resuls : newTodo
        })
    } catch(err) {
       return res.status(500).json({
            Message : err
        })
        // "task is rejectd =======>",
    }
}

// this is my get api requst 
const gettodo  = async (req, res) => {

    try {
        const result = await todoModule.find({});
       return res.status(200).json({
            Message : "data succesfuly get",
            resuls : result,
            count : result.length
        })
    } catch (err) {
       return res.status(500).json({
            Message : "get requrst is rejectd ====>", err
        })
    }
}

// this is my update api requst 

const updateTodo = async (req, res) => { 
    const id = req.params.id;
    const todo = req.body;

        try {
            const find = await todoModule.findOne({ _id : id });
            const results = await todoModule.findByIdAndUpdate(id, todo)

           return res.status(200).json({
                Message : "task is updated",
                result : todo
            })
        } catch (err) {
            return res.status(500).json({
                Message : "task is note updated"
            })
        }
}

// delete api requrst 
const delteTodo = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
        const find = await todoModule.findOne({_id : id})
        const resuls = await todoModule.findByIdAndDelete(id)

        return res.status(200).json({
            Message : "task is deleted",
        })
    } catch(err) {
       return res.status(500).json({
        Message : "task is note deleted"
       }) 
    }
}


module.exports = {
    createdTask,
    gettodo,
    updateTodo,
    delteTodo
}