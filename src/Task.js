import React from 'react'
import { useState } from 'react';
import DeleteIc from './deleteIcon.svg'
import editIc from './editIcon.svg'

const Task = (props) => {
  const [visiblity, setVisiblity] = useState(true);
  const [task,setTask] = useState('');
//  const [isLeft,setIsLeft] = useState(true)
  console.log(props.item.id) 
  //yaha console log krne pe 2 kyu aare hai everytime
  return (
    <div className='taskEntry'>
      <div className='taskContainer1' style={{display: visiblity?"flex":"none", alignItems:"center"}}>
        <div style={{width:"20rem", display:"flex", alignItems:"center"}}>
          <input className="checkbox" type="checkbox" onClick={()=>props.changeStatus(props.item.id)}/>
          <div className='taskData' style={{textDecoration: props.item.isLeft?"none":"line-through",display:"flex", alignItems:"center", color:"#FFFFFF"}}>{props.item.data}</div>
        </div>
        <div style={{display:"flex", alignItems:"center"}}>
          <img src={editIc} alt='' style={{display: visiblity&&props.item.isLeft?"flex":"none", height:"1.5rem", width:"1.5rem"}} onClick={()=>setVisiblity(false)}></img>
          <img src={DeleteIc} alt='' style={{height:"1.5rem", width:"1.5rem", marginLeft:".5rem",marginRight:".5rem"}}onClick={()=>props.removeTask(props.item.id)}/>
        </div>
      </div>
      <div className='taskContainer2' style={{display: !visiblity?"flex":"none"}}>
        <input className='entry' style={{marginLeft:".5rem", height:"1.5rem", width:"20rem"}}value={task} onChange={(e)=>setTask(e.target.value)}></input>
        <button style={{marginRight:".5rem"}}onClick={()=>{
          if(task!==''){
            props.item.data=task
            setVisiblity(true)
            setTask('')
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