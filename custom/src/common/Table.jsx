import React from 'react'

const Table = (props) => {
    // console.log(props.dataSourse)
  return (
    <table border={2} cellSpacing={0}>
        <thead>
            <tr>
                {props.columns.map((col,inx)=>{
                    // console.log(col)
                    return (
                        <>
                        <th>{col}</th>
                        </>
                    )
                    

                })}
            </tr>
        </thead>
        <tbody>
                {
                    props.dataSourse.map((Val,ind)=>{
                        
                        return (
                           <tr>
                                {props.columns.map((col)=>{
                                    return(
                                        <>
                                        <th>{Val[col]}</th>
                                        </>
                                    )


                                })}
                           </tr>
                        )
                    })
                }
        </tbody>
    </table>
  )
}

export default Table
