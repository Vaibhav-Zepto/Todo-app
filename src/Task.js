import React from 'react'
import { useState } from 'react';


const Task = (props) => {
  const [visiblity, setVisiblity] = useState(true);
  const [task,setTask] = useState();
  const [isLeft,setIsLeft] = useState(true)
//  console.log(props.item.id) yaha console log krne pe 2 kyu aare hai everytime
  return (
    <div className='taskEntry' key={props.item.id} >
      <div className='taskContainer1' style={{display: visiblity?"flex":"none", alignItems:"center"}}>
        <div style={{width:"20rem", display:"flex", alignItems:"center"}}>
        <input type="checkbox" onClick={()=>setIsLeft(!isLeft)}/>
        <div className='taskData' style={{textDecoration: isLeft?"none":"line-through",display:"flex", alignItems:"center"}}>{props.item.data}</div>
        </div>
        <div style={{display:"flex", alignItems:"center"}}>
        <img src="/editIcon.svg" alt='' style={{display: visiblity&&isLeft?"block":"none", height:"1rem", width:"1rem"}} onClick={()=>setVisiblity(false)}></img>
        <img src='deleteIcon.svg' alt='' style={{height:"1rem", width:"1rem"}}onClick={()=>props.removeTask(props.item.id)}/>
        </div>
      </div>
      <div className='taskContainer2' style={{display: !visiblity?"flex":"none"}}>
        <input value={task} onChange={(e)=>setTask(e.target.value)}></input>
        <button onClick={()=>{
          if(task!==''){
            props.item.data=task
            setVisiblity(true)
          }
          else{
            alert('please enter a non empty task')
          }
        }}>Done</button>
      </div>
    </div>
  )
}

export default Task