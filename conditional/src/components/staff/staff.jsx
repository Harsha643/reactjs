import React from 'react'
// import { StudentData } from '../../custom/studentdata'
import { StaffData } from '../../custom/staffData'

const Staff = () => {
  return (
  <>
    <h1>Student-management</h1>
    <input type="text" placeholder='Enter student name ' />
    
  <table border={1} cellSpacing={0}>
    <thead>
        <th>id</th>
        <th>name</th>
        <th>role</th>
        <th>age</th>
    </thead>
    <tbody>
        
           { StaffData.map((sta,ind)=>{
            console.log(sta)
                return (
                    <tr>
                    <td>{sta.id}</td>
                    <td>{sta.name}</td>
                    <td>{sta.role}</td>
                    <td>{sta.age}</td>

                    </tr>
                )
            })}
        
    </tbody>
  </table>
  </>
  )
}

export default Staff
