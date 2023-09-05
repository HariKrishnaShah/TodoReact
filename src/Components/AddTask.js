import React, {useContext, useState}from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import taskcontext from '../Context/TaskContext';


function AddTask({ButtonName, Heading, Placeholder, taskid, type}) {
  const TaskStates = useContext(taskcontext);
  const {tasks, setTasks} = TaskStates;
  const [item, setItem] = useState();
  const handleChange = ()=>{
    setItem(document.getElementById("taskadder").value);
  }
  const taskadd = ()=>{
    if(type === "task")
    {
      setTasks(tasks.concat({title:item, status:"pending" , subtasks:[]}));
    }
    else if(type === "subtask")
    {
      const indexoftask = tasks.find((task, index)=>{
        if(task._id === taskid)
        {
          return index;
        }
        return 0;
      })
      const lengthofsubtask = tasks[indexoftask].subtasks.length + 1;
      const newsubtask = {_id:lengthofsubtask, title:item, status:"pending"};
      tasks[indexoftask].subtasks.push(newsubtask);
    }
  }
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text>{Heading}</InputGroup.Text>
        <Form.Control value = {item} onChange={handleChange}  id = "taskadder" placeholder= {Placeholder}/>
        <Button variant="success" onClick={taskadd}>{ButtonName || "ButtonName"}</Button>
      </InputGroup>

    </>
  )
}


export default AddTask