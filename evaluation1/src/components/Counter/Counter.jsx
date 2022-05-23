import React from "react";
import styles from "./counter.module.css";

const Counter = () => {
 
  const [count,setCount] = React.useState(1);
  const handleCounter = (value) =>{
  setCount(count + value);
  }

  // if(count === 0){
  //   return 0;
  // }

  // sample value to be replaced
  // let count = 0;
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={() => handleCounter(1)}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      {count > 0 && (<button data-cy="task-counter-decrement-button" onClick={() => handleCounter(-1)}>-</button>)}
      
    </div>
  );
};

export default Counter;
