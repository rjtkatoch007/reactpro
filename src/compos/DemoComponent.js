import React, { useState } from 'react'

const DemoComponent = ({name, age, children}) => {
  const[title, setTitle] = useState('react js advanced');    
  function clickHandler(){
    console.log("My Name is Rajat");
  }  
  return (
    <div>
      <h1>{title}</h1>
        <p>My Name is {name} and i am {age} old.</p>
        <p>{children}</p>       
        <button onClick={()=>setTitle("React JS Beginner to Advanced")} >Change Title</button>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default DemoComponent