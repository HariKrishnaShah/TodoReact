import React, { useState } from 'react'


function Goal() {
  const [name, setName] = useState("");
  const msg = (name)=>{
    alert(`Goal by ${name}`)
}
const get = ()=>
{
  setName(document.getElementById("name").value);
  document.getElementById("ans").innerHTML = "Goal by " + name;
}
const nil = ()=>{
  setName(document.getElementById("name").value);
}
  return (
    <>
    <input type = "text" id = "name" value = {name} onChange = {nil} onKeyUp={get}></input>
    <button onClick = {()=>msg(name)}>Goal</button>
    <p id = "ans"></p>
    </>
  )
}

export default Goal;