import React, { useState } from 'react'

const EmployeeList = () => {
  const [count, setCount] = useState(0);
  const initialCount = 0;
  const increment = ()=>{
    for(let i=0; i<5; i++){

      setCount(prevCount=>prevCount+1)
    }
    
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={()=>setCount(count-1)}>decrement</button> 
      <button onClick={()=>setCount(initialCount)}>reset</button>       
    </div>
  )
}

export default EmployeeList