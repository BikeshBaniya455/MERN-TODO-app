import React, { use, useEffect, useState } from 'react'
import axios from 'axios';
import { RiDeleteBin6Fill } from "react-icons/ri";
const Todo = () => {
 
const [userInput,setUserInput] = useState("");
const [list,setList] = useState([]);
const [edit,setEdit] = useState("");
const fetchTasks = async () => {
  try {
    const response = await axios.get('http://localhost:4000/api/list');
    setList(response.data);
  } catch (error) {
    console.error('Failed to fetch tasks:', error.message);
  }
};
useEffect(()=>{
  fetchTasks();
},[]);
const addTaskHandler= async()=>{
  try {
    const response = await axios.post('http://localhost:4000/api/create/',{text:userInput})
    setUserInput('');
    fetchTasks();
  } catch (error) {
    console.error('Error adding task:', error.message);
  }
}
const deleteTaskHandler= async(id)=>{
  try {
   
    // const confirm = window.confirm("Are you sure you want to delete this task?");
    // if (!confirm) return;
    const response = await axios.delete(`http://localhost:4000/api/delete/${id}`)
   
    fetchTasks();
  } catch (error) {
    console.error('Error adding task:', error.message);
  }
}
  return (
    <div className='m-0 p-0 min-w-full min-h-screen bg-gradient-to-r from-slate-900 to-indigo-900 text-white flex flex-col items-center pt-10' >
     
        <h1 className='text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500'>Todo Task Application</h1>
        
        <div className="w-full max-w-2xl px-4 mb-10">
          <input type='text'
            value={userInput}
            onChange={(e)=>setUserInput(e.target.value)}
            placeholder='Enter Task Here'
            className='rounded-lg w-3/4 px-4 py-3 bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-200'>
          </input>
          
          <button className='ml-4 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-200'
            onClick={addTaskHandler}
          > Add Task</button>
        </div>
       
      {/* rendering the list */}
      <ul className='w-full max-w-2xl px-4'>
       
        {list.map(lists => (
          <div key={lists._id} className='mb-4 p-5 rounded-xl bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-purple-500 flex justify-between items-center shadow-lg transition-all duration-200'>
            <li className='list-none text-lg text-gray-200 hover:cursor-text'>{lists.text}</li>
            <div className='flex space-x-2'>
           
            <button onClick={()=>deleteTaskHandler(lists._id)} className='text-red-400 hover:text-red-300 transition-colors p-2 rounded-full hover:bg-gray-700/50'><RiDeleteBin6Fill className="text-xl" /></button>
            </div>
           
         
            </div>
        ))}
       
   
      </ul>
     
       
    </div>
  )
}
export default Todo