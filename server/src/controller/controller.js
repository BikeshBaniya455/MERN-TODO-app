import Todo from '../models/model.js'
import express from 'express'


export const lists = async(req,res)=>{
try {
    const todolist = await Todo.find({});
    res.status(200).json(todolist);
} catch (error) {
    res.status(500).json({ message: "Failed to fetch todos", error: error.message });
}
}

export const createTask = async(req,res)=>{
    try {
        const {text} = req.body;
        const todo = {text};
        const todotask = new Todo(todo);
         await todotask.save();
        res.status(201).json(todotask);

    } catch (error) {
        res.status(500).json({message:"failed to create a task",error:error.message})
    }
    }

    

    export const updateTask = async(req,res)=>{
        try {
           const id = req.params.id;
           if(!id) return res.status(400).json({ message: "ID not found" });
           const {text} =req.body;
            const updateinfo = {text}
            const update =await Todo.findByIdAndUpdate(id,updateinfo,{new:true});
            if (!update) {
                return res.status(404).json({ message: "Todo not found" });
              }
              
        res.status(200).json(update) 
        } catch (error) {
            res.status(500).json({message:"failed to update a task",error:error.message})
        }
        }

        

 export const deleteTask = async(req,res)=>{
            try {
                const id = req.params.id;  
                if(!id) return res.status(400).json({ message: "ID not found" });
                const deleteT =await Todo.findByIdAndDelete(id);
                if (!deleteT) {
                    return res.status(404).json({ message: "Task not found" });
                }
                res.status(200).json({ message: "Task deleted successfully", task: deleteT });

            } catch (error) {
                res.status(500).json({message:"failed to delete a task",error:error.message})
            }
            }
            



