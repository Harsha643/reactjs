import React from 'react'
import { StudentData } from '../custom/studentData'
import Table from '../common/Table'

const StudentDetails = () => {

    let columns=Object.keys(StudentData[0])
  
  return (
    <>
   <Table columns={columns} dataSourse = {StudentData}/>

    </>
  )
}

export default StudentDetails
