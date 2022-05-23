import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task"
import AddTask from "../AddTask/AddTask";

import {nanoid} from "nanoid";


const Tasks = () => {
  // NOTE: do not delete `data-cy` key value pair

  const [list,setList] = React.useState([]);
 
  const handleAdd = (data) =>{
    console.log("data",data)
    const payload = {
      title: data,
      status: false,
      id: nanoid(7)
    };
    setList([...list,payload])
  };
  const handleDelete = (id)=>{
    let updatedList = list.filter(item=>item.id !== id)
    setList(updatedList)
  }
  return (
    <><AddTask getData={handleAdd}/>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {list.map((e)=>(<Task handleDelete={handleDelete} key={e.id} {...e}/>))}
        {/* <Task/> */}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
