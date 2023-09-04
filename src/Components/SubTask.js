import React from 'react'
import Alertbar from './Alertbar'
import SubTaskItem from './SubTaskItem';
import AddTask from './AddTask';

function SubTask({subtasks}) {
  return (
    <>
    {subtasks && subtasks.length>0?
    (
      subtasks.map((subtask, index)=>{
        return(
          <SubTaskItem key ={index} status ={subtask.status === "completed"? true:false} title = {subtask.title} />
        );
      })
    ):<Alertbar Msg = "No subtasks found" Variant="danger" />}
    <div className='my-2 mx-5'>
      <AddTask ButtonName="Add the Task" Placeholder="" Heading = "Add new subtask" />
    </div>
    </>
  )
}

export default SubTask