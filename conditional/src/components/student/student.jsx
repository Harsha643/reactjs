import React from 'react'
import { StudentData } from '../../custom/studentdata'

const Student = () => {
  return (
  <>
    <h1>Student-management</h1>
    <input type="text" placeholder='Enter student name ' />
    
  <table border={1} cellSpacing={0}>
    <thead>
        <tr>
        <th>id</th>
        <th>name</th>
        <th>class</th>
        <th>age</th>
        </tr>
    </thead>
    <tbody>
        
           { StudentData.map((stu,ind)=>{
            console.log(stu)
                return (
                    <tr>
                    <td>{stu.id}</td>
                    <td>{stu.name}</td>
                    <td>{stu.class}</td>
                    <td>{stu.age}</td>

                    </tr>
                )
            })}
        
    </tbody>
  </table>
  </>
  )
}

export default Student
