import React, { useState } from 'react'

const Employee = () => {
    const [employee, setEmployee] = useState({name: "", country: ""});
  return (
    <div>
        <input type="text"
         value={employee.name}
          onChange={(e)=>setEmployee({...employee, name: e.target.value})}></input>
        <input type="text"
         value={employee.country}
          onChange={(e)=>setEmployee({...employee, country: e.target.value})}></input>    
    <div>
        <p>Name is: {employee.name}</p>
        <p>Country is: {employee.country}</p>
    </div>
    </div>
  )
}

export default Employee