import React from 'react'
import { Naasongs } from '../custom/songs'


// "songName": "Tum Hi Ho",
// "hero": "Aditya Roy Kapur",
// "heroine": "Shraddha Kapoor",
// "singer": "Arijit Singh"
// },



class Songs extends React.Component{
    render(){
        return <>
          <table border={2} cellSpacing={0}>
                        <thead>
                            <th>songName</th>
                            <th>hero </th>
                            <th>heroine</th>
                            <th>singer</th>
                        </thead>
        <tbody>
        {Naasongs.map((val,inx)=>{

                return (
               <>
               <tr>
                <td>{val.songName}</td>
                <td>{val.hero}</td>
                <td>{val.heroine}</td>
                <td>{val.singer}</td>
               </tr>
               
               
               </>



                )

            })}
         

        </tbody>
           
         </table>
         
        
        
        
        </>
    }



}
export default Songs
