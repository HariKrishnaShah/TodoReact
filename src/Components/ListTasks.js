import React, { useContext} from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Alertbar from './Alertbar';
import EachTask from './EachTask';
import taskcontext from '../Context/TaskContext';

function ListTasks() {
  const TaskStates = useContext(taskcontext);
  const {tasks} = TaskStates;
  
  return (
      <>
    <Accordion defaultActiveKey="0">
        {tasks && tasks.length>0 ?(
            tasks.map((task, index)=>{
                return(
                  <EachTask key = {index} taskindex= {index} task = {task} taskid = {task._id} index = {index} />);
            })
        ):<Alertbar Variant = "danger" Msg = "No Task Found" />}
      </Accordion>
    </>
  )
}

export default ListTasks