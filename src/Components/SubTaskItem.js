import React, { useState, useContext } from 'react'
import DeleteIcon from './DeleteIcon'
import taskcontext from '../Context/TaskContext';
function SubTaskItem({status, title, subtaskid, taskid}) {
  const TaskStates = useContext(taskcontext);
  const[done, setDone] = useState(status);
  const handlechange = (e)=>{
    console.log("The task and subtask id are " + taskid, subtaskid);
    setDone(e.checked);
  }
  const handledelete = (subtaskid, taskid)=>{
    console.log("The task and subtask id are " + taskid, subtaskid);
    TaskStates.deletesubtask(subtaskid, taskid);
    
  }
  return (
    <div className='d-flex justify-content-between mx-5 my-2'>
        <div><input  id = "status" type = "checkbox" checked = {done} onChange={(e)=>{handlechange(e)}} style = {{width:"15px", height:"15px"}}/><strong className='mx-2'>{title}</strong></div>
        <div><button onClick = {()=>{handledelete(subtaskid, taskid)}} style ={{border:"none" ,background:"none"}}><DeleteIcon/></button></div>
    </div>
  )
}

export default SubTaskItem