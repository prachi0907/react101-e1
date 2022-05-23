import React from "react";
import styles from "./addTask.module.css";
import {useState} from "react";

const AddTask = ({getData}) => {
  // NOTE: do not delete `data-cy` key value pair

 const [text, setText] = useState("");
 const handleChange = (event) => {
   setText(event.target.value)
 }
 const handleClick = () => {
  getData(text)
 }


  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" onChange={handleChange} type="text" placeholder="Add task"/>
      <button onClick={handleClick} data-cy="add-task-button">+</button>
    </div>
  );
};

export default AddTask;
