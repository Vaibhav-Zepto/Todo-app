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
    for(var i=0;i<list.length;i++){
      if(list[i].id===id){
        list[i].status=!list[i.status]
      }
    }
  }
  return (
    <div className="App">
      <Entry list={list} setList={setList}/>
      <div className="tasks">
        {
          list.map((item)=>{
            return(
              <Task item={item} changeStatus={changeStatus} removeTask={removeTask}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
