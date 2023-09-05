import React, { useState} from 'react'
import TaskContext from "./TaskContext";

export default function TaskStates(props) {
    const[toast, setToast] = useState();
    const[tasks, setTasks] = useState();
    //Toast
    let triggerToast = (msg)=>
    {
        setToast({msg:msg});
        setTimeout(
            ()=>{
                setToast(null)
            }, 1000
        );
    }
    let closeToast = ()=>{
        setToast(null);
    }

    //Delete Subtask
    const deletesubtask = (subtaskid, taskid)=>{
        let newtask = JSON.parse(JSON.stringify(tasks));
        console.log("The old arrays are " + newtask.toString());
        let taskindex =0;
        let subtaskindex = 0;
        newtask.find((task, taskind)=>{
            if(task._id === taskid)
            {
                taskindex = taskind;
                task.subtasks.find((subtask, subind)=>{
                    if(subtask._id === subtaskid)
                    {
                        subtaskindex = subind;
                    }
                    return 0;
                })
            }
            return 0;
        })
            if (newtask.length > 0) {
            newtask[taskindex].subtasks.splice(subtaskindex, 1);
          }
        console.log("The new arrays are " + newtask.toString());
        setTasks(newtask);

    }
  return (
    <TaskContext.Provider value = {{triggerToast, toast, closeToast, tasks, setTasks, deletesubtask}} >
    {props.children}
    </TaskContext.Provider>
  )
}
