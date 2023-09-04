import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Alertbar from './Alertbar';
import SubTask from './SubTask';
import TaskCounter from './TaskCounter';


function ListTasks() {
    let tasks = [{_id: 1, title: "cook", subtasks: [{_id: 1, title: "marinate", status:"completed"}, {_id: 2, title: "boil", status:"pending"}]}, {_id: 1, title: "Play", subtasks: [{_id: 1, title: "basketball", status:"completed"}, {_id: 1, title: "tennis", status: "completed"}]}, {_id: 1, title: "Love", subtasks:[]}];
  return (
      <>
    <Accordion defaultActiveKey="0">
        {tasks && tasks.length>0 ?(
            tasks.map((task, index)=>{
                return(<span key = {index}>
                    <Accordion.Item eventKey={index.toString()}>
            <Accordion.Header>
              <div className='d-flex justify-content-between'>
              <div>{task.title || "Task Title"}</div>
              <div style = {{position:"relative", right:"-300px"}}><TaskCounter subtasks={task.subtasks} /></div>
              </div>
              </Accordion.Header>
            <Accordion.Body>
              <SubTask subtasks = {task.subtasks}></SubTask>
            </Accordion.Body>
          </Accordion.Item>
          </span>);
                
            })
        ):<Alertbar Variant = "danger" Msg = "No Task Found" />}
      </Accordion>
    </>
  )
}

export default ListTasks