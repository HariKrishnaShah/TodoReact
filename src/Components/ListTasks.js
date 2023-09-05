import React, { useContext, useEffect} from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Alertbar from './Alertbar';
import EachTask from './EachTask';
import taskcontext from '../Context/TaskContext';

function ListTasks() {
  const TaskStates = useContext(taskcontext);
  const {tasks, setTasks} = TaskStates;
  useEffect(()=>{
    setTasks([{_id: 1, title: "Cook", status:"pending", subtasks: [{_id: 1, title: "marinate", status:"completed"}, {_id: 2, title: "boil", status:"pending"}]}, {_id: 2, title: "Play", status:"pending",  subtasks: [{_id: 1, title: "basketball", status:"completed"}, {_id: 2, title: "tennis", status: "completed"}]}, {_id: 3, title: "Teach friends", status:"completed",  subtasks:[]}])
  }, // eslint-disable-next-line
  [])
  
  return (
      <>
    <Accordion defaultActiveKey="0">
        {tasks && tasks.length>0 ?(
            tasks.map((task, index)=>{
                return(
                  <EachTask key = {index} task = {task} taskid = {task._id} index = {index} />);
            })
        ):<Alertbar Variant = "danger" Msg = "No Task Found" />}
      </Accordion>
    </>
  )
}

export default ListTasks