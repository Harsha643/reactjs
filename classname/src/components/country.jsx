import React from 'react'
import { country } from '../custom/country'

class Country extends React.Component{
    render(){
        return <>
          <table border={2} cellSpacing={0}>
                        <thead>
                            <th>state</th>
                            <th>famousRecipe</th>
                            <th>temple</th>
                            <th>foodLike</th>
                        </thead>
        <tbody>
        {country.map((val,inx)=>{

                return (
               <>
               <tr>
                <td>{val.state}</td>
                <td>{val.famousRecipe}</td>
                <td>{val.temple}</td>
                <td>{val.foodLike}</td>
               </tr>
               
               
               </>



                )

            })}
         

        </tbody>
           
         </table>
         
        
        
        
        </>
    }



}
export default Country
