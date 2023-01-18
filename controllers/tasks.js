const Task = require('../models/Task')

const getAllTasks =async (req,res)=>{
    try {
        const tasks = await Task.find({})
        res.status(200).json({msg:"All tasks fetched",tasks})
    } catch (error) {
        res.status(500).json({ msg: "Error fetching tasks"});
    }
}


const createTask = async (req,res)=>{
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
        
    } catch (error) {
        res.status(500).json({msg:"Error creating task",error})
    }
} 


const getTask = async (req,res)=>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})

        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}`})
            } 

        res.status(200).json({msg: `Task associated with the id : ${taskID} fetched`,task});
    }
    catch (error) {
        res.status(500).json({msg:'Could not fetch the task'})
    }
}


const updateTask = (req,res)=>{
    res.send('update task')
}


const deleteTask = (req,res)=>{
    res.send('delete task')
}



module.exports = {
     getAllTasks ,
     createTask,
     getTask, 
     updateTask, 
     deleteTask
    }