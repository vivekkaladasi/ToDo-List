import React, { useState } from 'react'
import axios from 'axios';
export const Create = () => {
   const [task , setTask] = useState();
  const handleCreate = ()=>{
    axios.post('http://localhost:3000/add' , {task: task})
    .then(result =>{
      location.reload()
    } )
    .catch(error => console.log(error))
  }
  return (
    <div>
        <input type='text' placeholder='enter task' onChange={(e)=>setTask(e.target.value)}/> 
        <button type="button" onClick={handleCreate} > Submit</button>
    </div>
  )
}
