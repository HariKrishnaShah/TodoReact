import React, { useState, useContext } from 'react'
import DeleteIcon from './DeleteIcon'
import taskcontext from '../Context/TaskContext';
function SubTaskItem({status, title, subtaskid, taskid}) {
  const TaskStates = useContext(taskcontext);
  const[done, setDone] = useState(status);
  const handlechange = (e)=>{
    console.log("The task and subtask id are " + taskid, subtaskid);
    if(document.getElementById("substatus").checked === true)
    {
      TaskStates.triggerToast("Task updated as completed ");
    }
    else{
      TaskStates.triggerToast("Task updated as pending ");
    }
    setDone(e.checked);
  }
  const handledelete = (subtaskid, taskid)=>{
    console.log("The task and subtask id are " + taskid, subtaskid);
    TaskStates.deletesubtask(subtaskid, taskid);
    TaskStates.triggerToast("Sub task deleted successfully");
    
  }
  return (
    <div className='d-flex justify-content-between mx-5 my-2'>
        <div><input  id = "substatus" type = "checkbox" checked = {done} onChange={(e)=>{handlechange(e)}} style = {{width:"15px", height:"15px"}}/><strong className='mx-2'>{title}</strong></div>
        <div><button onClick = {()=>{handledelete(subtaskid, taskid)}} style ={{border:"none" ,background:"none"}}><DeleteIcon/></button></div>
    </div>
  )
}

export default SubTaskItem