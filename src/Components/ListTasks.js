import React, { useContext, useEffect} from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Alertbar from './Alertbar';
import EachTask from './EachTask';
import taskcontext from '../Context/TaskContext';

function ListTasks() {
  const TaskStates = useContext(taskcontext);
  const {tasks} = TaskStates;
  useEffect(()=>{
    TaskStates.fetchTask();
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