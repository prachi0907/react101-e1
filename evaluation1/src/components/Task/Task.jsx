import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter"

const Task = ({title,status,id,handleDelete}) => {
  // NOTE: do not delete `data-cy` key value pair
  const handleDeleteFn = ()=>{
    handleDelete(id)
  }
  return (
    <li data-cy="task" className={styles.task}>{title}
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text"></div>
      {/* Counter here */}
      <Counter/>
      <button data-cy="task-remove-button" onClick= {handleDeleteFn}>❌</button>
    </li>
  );
};

export default Task;
