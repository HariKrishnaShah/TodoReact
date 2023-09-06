import React, { useState} from 'react'
import TaskContext from "./TaskContext";

export default function TaskStates(props) {
    const host = "http://localhost:4000";
    const at = localStorage.getItem('token');
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

//Fetch all tasks
const fetchTask = async()=>{
    let alltasks = await fetch(`${host}/task/viewtasks`,
    {
        method: "GET",
    headers: {
      "Content-Type": "application/json",
      "authToken":at
    }
    });
    let alltask = await alltasks.json();
    setTasks(alltask);

}

// Add tasks

const taskadd = async(newtask)=>{
    let tobj = await fetch(`${host}/task/addtask`,
    {
        method: "POST",
    headers: {
      "Content-Type": "application/json",
      "authToken":at
    },
    body:JSON.stringify(newtask),
    });
    let newtid = await tobj.json();
    return (newtid);
    
}

// Add Subtask

const subtaskAdd = async(subtask)=>{
    await fetch(`${host}/subtask/addsubtask`,
    {
        method: "POST",
    headers: {
      "Content-Type": "application/json",
      "authToken":at
    },
    body: JSON.stringify(subtask),
    });

}


// Update Subtask
const subtaskUpdate = async(subtaskid)=>
{
    await fetch(`${host}/subtask/updatesubtask`,
    {
        method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "authToken":at
    },
    body: JSON.stringify({subtaskid:subtaskid}),
    });

}

    //Delete Subtask
    const deletesubtask = async (subtaskid, taskid)=>{
        await fetch(`${host}/subtask/deletesubtask`,
    {
        method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "authToken":at
    },
    body: JSON.stringify({subtaskid:subtaskid}),
    });
        let newtask = JSON.parse(JSON.stringify(tasks));
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
        setTasks(newtask);   
    }

    //Update Task

    const taskupdate = async(taskid, task)=>{
        await fetch(`${host}/task/updatetask`,
    {
        method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "authToken":at
    },
    body: JSON.stringify({taskid:taskid}),
    });

    for(let i = 0; i<task.subtasks.length; i++)
    {
        await fetch(`${host}/subtask/updatesubtask`,
    {
        method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "authToken":at
    },
    body: JSON.stringify({subtaskid:task.subtasks[i]._id, markasdone:"yes"}),
    });

    }

    }
  return (
    <TaskContext.Provider value = {{triggerToast, toast, closeToast, tasks, setTasks, deletesubtask, fetchTask, taskadd, subtaskUpdate, subtaskAdd, taskupdate}} >
    {props.children}
    </TaskContext.Provider>
  )
}
