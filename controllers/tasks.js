const Task = require('../models/Task')

const getAllTasks =async (req,res)=>{
    try {
        const tasks = await Task.find({})
        res.status(200).json({msg:"All tasks fetched",tasks})
        // res.status(200).json({success:true, data:tasks})
        // res.status(200).json({status:"success", data:tasks})
    } catch (error) {
        res.status(500).json({ msg: "Error fetching tasks"});
        // res.status(500).json({ status: "Error!!"});
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


const updateTask = async (req,res)=>{
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndUpdate({ _id: taskID },req.body,{
            new:true,runValidators:true,
        })

        if(!task){
             return res.status(404).json({ msg: `No task with id : ${taskID}`});
        }
        
        res.status(200).json({msg:'Task updated',task})
        
    } catch (error) {
        res.status(500).json({ msg: "Could not update the task" });
        
    }
}


const deleteTask = async (req,res)=>{
    try{
        const { id: taskID } = req.params;
        // destructuring is a convenient and shorthand way to extract properties from an object(here I used destructuring to extract ID from the array of objects in database and assigned it to taskID)
        // But i can also simply do as 
        // const taskID = req.params.id;
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}`})
            } 
        res.status(200).json({msg:`Task with id ${taskID} deleted`})
        }
        
    catch (error) {
        res.status(500).json({msg:'Could not delete the task'})
    }
}



module.exports = {getAllTasks ,createTask,getTask, updateTask, deleteTask}