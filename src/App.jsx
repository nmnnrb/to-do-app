import { useState } from 'react'
import { CirclePlus, Delete } from 'lucide-react';


import './App.css'

function App() {
  const [task, setTask] = useState([])
  const [inputTask , setInputTask] = useState('');

    const AddTask = () => {
      if(inputTask === '') return;
      setTask([inputTask , ...task]);
      setInputTask('');
    }

    const removetask = (index) => {
      setTask(task.filter((item , i) => i !== index))
    }
  return (
    <div className="container bg-pink-300  flex flex-col justify-center items-center min-h-screen min-w-full ">
    <div className="conatiner p-12 flex flex-col   bg-white rounded-lg shadow-lg">
    <h1 className='text-5xl font-bold my-5'>My To-Do List</h1>
      <div className="flex flex-row gap-2">
      <input onChange={(e) => setInputTask(e.target.value)} value={inputTask} type="text" placeholder="Add a task" className='border rounded-lg px-2 py-1' />
      <button className='bg-blue-500 text-4xl  px-4 py-1 text-white rounded-md ' onClick={AddTask}><CirclePlus /></button>
      </div>
    </div>
    <ul className='text-2xl mt-5 list-disc'>
        {task.map((item, index) => (
          <li className='bg-pink-500 flex justify-center items-center gap-4 my-3 px-3 py-2 drop-shadow-lg rounded-xl text-white font-bold' key={index}>{item}
           <button onClick={() => removetask(index)}>     <Delete className='text-white  hover:text-red-900 transition duration-300  ' /></button></li>  
            
        ))}
    
      </ul>
    </div>
  )
}

export default App
