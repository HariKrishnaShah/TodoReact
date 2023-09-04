import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Alertbar from './Alertbar';
import SubTask from './SubTask';


function ListTasks() {
    let tasks = [{_id: 1, title: "cook", subtasks: ["marinate", "sim"]}, {_id: 1, title: "Play", subtasks: ["Chess", "Basketball"]}];
  return (
      <>
    <Accordion defaultActiveKey="0">
        {tasks && tasks.length>0 ?(
            tasks.map((task, index)=>{
                return(<span key = {index}>
                    <Accordion.Item eventKey={index.toString()}>
            <Accordion.Header>{task.title || "Task Title"}</Accordion.Header>
            <Accordion.Body>
              <SubTask></SubTask>
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