const Task = require('../models/Task')
const asyncWrapper = require('../middlewares/async')
const {CreateCustomError} = require('../errors/custom-error')

const getAllTasks = asyncWrapper (async (req,res)=>{
        const tasks = await Task.find({})
        res.status(200).json({msg:"All tasks fetched",tasks})
        // res.status(200).json({success:true, data:tasks})
        // res.status(200).json({status:"success", data:tasks})
})


const createTask = asyncWrapper (async (req,res)=>{
        const task = await Task.create(req.body);
        res.status(201).json({ task });
        
})


const getTask = asyncWrapper (async (req,res,next)=>{
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})

        if(!task){
            return next(CreateCustomError(`No task with id : ${taskID}`,404))
            } 

        res.status(200).json({msg: `Task associated with the id : ${taskID} fetched`,task});
})


const updateTask = asyncWrapper (async (req,res)=>{
        const { id: taskID } = req.params;
        const task = await Task.findOneAndUpdate({ _id: taskID },req.body,{
            new:true,runValidators:true,
        })

        if(!task){
             return next(CreateCustomError(`No task with id : ${taskID}`, 404));
        }
        
        res.status(200).json({msg:'Task updated',task})
        
})


const deleteTask = asyncWrapper (async (req,res)=>{
        const { id: taskID } = req.params;
        // destructuring is a convenient and shorthand way to extract properties from an object(here I used destructuring to extract ID from the array of objects in database and assigned it to taskID)
        // But i can also simply do as 
        // const taskID = req.params.id;
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
             return next(CreateCustomError(`No task with id : ${taskID}`, 404));
            } 
        res.status(200).json({msg:`Task with id ${taskID} deleted`})

})


module.exports = {getAllTasks ,createTask,getTask, updateTask, deleteTask}