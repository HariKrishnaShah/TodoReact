import React from 'react'
import SubTask from './SubTask';
import TaskCounter from './TaskCounter';
import { Accordion } from 'react-bootstrap';
import { useState } from 'react';

function EachTask({task, index, taskid}) {
    const[done, setDone] = useState(task.status === "completed"?true:false);
  const handlechange = (e)=>{
    setDone(e.checked);
  }
  return (
    <Accordion.Item eventKey={index.toString()}>
            <Accordion.Header>
              <div className=''>
              <div><input  id = "status" type = "checkbox" checked = {done} onChange={(e)=>{handlechange(e)}} style = {{width:"16px", height:"16px", marginRight:"10px"}}/><strong style={{fontSize:"16px"}}>{task.title || "Task Title"}</strong></div>
              <div style = {{position:"absolute", left:"40%", top:"40%"}}><TaskCounter subtasks={task.subtasks} /></div>
              </div>
              </Accordion.Header>
            <Accordion.Body>
              <SubTask subtasks = {task.subtasks} taskid = {taskid}></SubTask>
            </Accordion.Body>
          </Accordion.Item>
  )
}

export default EachTask
//<TaskCounter subtasks={task.subtasks} />