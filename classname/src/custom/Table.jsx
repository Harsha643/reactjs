import React from "react"


class Table extends React.Component{
    render(){
        // console.log(this.props)

        const { col, data }=this.props

        return(
            <table>
                <thead>
                    <tr>
                        {col.map((val,ind)=>{
                            return <>
                            
                            <th key={ind}>{val}</th>
                            
                            </>

                        })}
                    </tr>
                </thead>
                <tbody>
                     {data.map((song, ind) => (
                        <tr key={ind}>
                            {col.map((cols, idx) => (
                                <td key={idx}>{song[cols]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            
            </table>
        )
    }

}

export default Table


// import React from "react";

// class Table extends React.Component {
//     render() {
//         console.log(this.props); // ✅ This will now correctly log props

//         const { col, data } = this.props; // ✅ Correct way to extract props
//         console.log(col, data);
        
//         return (
//             <table border="1">
//                 <thead>
//                     <tr>
//                         {col.map((heading, index) => (
//                             <th key={index}>{heading}</th>
//                         ))}
//                     </tr>
//                 </thead>
//               
//             </table>
//         );
//     }
    
// }

// export default Table;
