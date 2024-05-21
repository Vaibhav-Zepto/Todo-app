import React, { useState } from 'react'
import plusIcon from './plusIcon.svg'
let nextId=0;
export default function Entry(props) {
  const [task,setTask]= useState('')
  // const addTask = (task)=>{
  //   if(task!==''){
  //     nextId++;
  //     props.setList((prev=>[...prev,{id:nextId,data:task,isLeft:true}]));
  //     setTask('')
  //   }
  //   else{
  //     alert("please add a non empty task")
  //   }
  // }
  const clickHandler= ()=>{
    nextId++
    props.addTask({id:nextId,data:task,isLeft:true})
    setTask('')
  }
  return (
    <div className="add">
        <input className="entry" value={task} onChange={(e)=>setTask(e.target.value)} placeholder='Enter your tasks here'></input>
        <img src={plusIcon} alt='' className="addButton"onClick={()=>{clickHandler()}}/>
    </div>
  )
}
