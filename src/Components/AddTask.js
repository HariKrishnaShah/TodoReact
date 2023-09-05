import React, {useContext, useState}from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import taskcontext from '../Context/TaskContext';


function AddTask({ButtonName, Heading, Placeholder, taskid, type}) {
  const TaskStates = useContext(taskcontext);
  const {tasks, setTasks} = TaskStates;
  const [item, setItem] = useState();
  const handleChange = (e)=>{
    setItem(e.target.value);
  }
  const taskadd = ()=>{
    if(type === "task")
    {
      setTasks(tasks.concat({title:item, status:"pending" , subtasks:[]}));
      TaskStates.triggerToast("New Task Added: " + item);
    }
    else if(type === "subtask")
    {
      let indexoftask = 0;;
      let newtask = JSON.parse(JSON.stringify(tasks));
      tasks.find((task, index)=>{
        if(task._id === taskid)
        {
          indexoftask = index;
        }
        return 0;
      })
      const lengthofsubtask = tasks[indexoftask].subtasks.length + 1;
      const newsubtask = {_id:lengthofsubtask, title:item, status:"pending"};
      newtask[indexoftask].subtasks.push(newsubtask);
      setTasks(newtask);
      TaskStates.triggerToast("New sub task Added: " + item);
    }
  }
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text>{Heading}</InputGroup.Text>
        <Form.Control value = {item} onChange={(e)=>{handleChange(e)}}  id = "taskadder" placeholder= {Placeholder}/>
        <Button variant="success" onClick={taskadd}>{ButtonName || "ButtonName"}</Button>
      </InputGroup>

    </>
  )
}


export default AddTask