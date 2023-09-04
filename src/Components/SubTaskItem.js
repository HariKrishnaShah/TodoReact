import React from 'react'
import DeleteIcon from './DeleteIcon'
function SubTaskItem({status, title}) {
  return (
    <div className='d-flex justify-content-between mx-5 my-2'>
        <div><input type = "checkbox" checked = {status} style = {{width:"18px", height:"18px"}}/><strong className='mx-2'>{title}</strong></div>
        <div><button style ={{border:"none" ,background:"none"}}><DeleteIcon /></button></div>
    </div>
  )
}

export default SubTaskItem