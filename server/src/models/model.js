import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({
    text:{
        type:String,
        required:true
    }

},{timestamps:true})

const Todo = mongoose.model('Todo',todoSchema);

export default Todo;