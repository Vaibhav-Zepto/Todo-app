import {useState} from 'react'; 
import Task from "./Task"
import Entry from './entry';
function App() {
  const [list,setList]= useState([]);
  const removeTask = (id)=>{
    setList(
      list.filter(task=> task.id!==id)
    )
  }
  const changeStatus = (id)=>{
    setList((list)=>
      list.map((item)=>
          item.id===id?{...item,isLeft:!item.isLeft}:item
      ) 
    )
  }
  const done= list.filter(
    (item)=>item.isLeft===false
  ).length
  const total=list.length
  return (
    <div className="App">
      <div className='header'>
        <h1 style={{marginBottom:"3rem", color:"#FFFFFF"}}>Welcome! here are your tasks for the day</h1>
      </div>
      <div className='tracker' style={{color:"#FFFFFF"}}>
        <div className='trackerText'>
          Tasks done
        </div>
        <div className='trackerCount'>
          {done}/{total}
        </div>
      </div>
      <Entry list={list} setList={setList}/>
      <div className="tasks">
        {
          list.map((item)=>{
            return(
              <Task item={item} key={item.id} changeStatus={changeStatus} removeTask={removeTask}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
