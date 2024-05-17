import {useState} from 'react'; 
function App() {
  const [task,setTask]= useState();
  const [list,setList]= useState([]);
  let nextId=0;
  const addTask = (task)=>{
    if(task!==''){
      nextId++;
      setList([...list, {id:nextId,data:task}]);
    }
  }
  const removeTask = (id)=>{
    setList(
      list.filter(task=> task.id!==id)
    )
  }
  return (
    <div className="App">
      <div className="add">
        <input className="entry" value={task} onChange={(e)=>setTask(e.target.value)}></input>
        <button className="addButton"onClick={()=>addTask(task)}>add tasks</button>
      </div>
      <div className="tasks">
        {
          list.map((item)=>{
            return(
              <div className='taskEntry' key={item.id}>
                <div className='taskData'>{item.data}</div>
                <button onClick={()=>removeTask(item.id)}>remove task</button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
