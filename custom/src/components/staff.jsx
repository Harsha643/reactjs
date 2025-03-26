import React from 'react'
import Table from '../common/Table'
import { StaffData } from '../custom/staffData'

const Staff = () => {
    let columns=Object.keys(StaffData[0])
    
  return (
   <>
   <Table columns={columns} dataSourse= {StaffData}/>
   </>
  )
}

export default Staff
