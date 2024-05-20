import React, { useState } from 'react'

let nextId=0;
export default function Entry(props) {
  const [task,setTask]= useState()
  const addTask = (task)=>{
    if(task!==''){
      nextId++;
      props.setList([...props.list, {id:nextId,data:task, isLeft:true}]);
    }
    else{
      alert("please add a non empty task")
    }
  }
  return (
    <div className="add">
        <input className="entry" value={task} onChange={(e)=>setTask(e.target.value)}></input>
        <button className="addButton"onClick={()=>addTask(task)}>add tasks</button>
    </div>
  )
}
