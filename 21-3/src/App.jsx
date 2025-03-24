
// import React, { useState, useEffect } from 'react'; 
// let Table=()=>{
//     const [products, setProducts] = useState([]);
//     let fetchdata=async()=>{
//         let res=await fetch("https://fakestoreapi.in/api/products")
//         let data=await res.json()
//         setProducts(data)

//     }
//     useEffect(()=>{
//         fetchdata()
//     },[])



//     // let data=[
//     //     {
//     //         "id":1,
//     //         "name":"harsha",
//     //         "email":"harsha@gamil.com",
//     //         "age":21
//     //     },
//     //     {
//     //         "id":2,
//     //         "name":"sai",
//     //         "email":"sai@gamil.com",
//     //         "age":21
//     //     }
//     // ]
//     return (
//         <>
        
//         <table border={1} cellSpacing={0}>
//             <thead>
//                 {/* <tr>
//                     <th>s.no</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Age</th>
                    
//                 </tr> */}

//                     <tr>
//                         <th>s.no</th>
//                         <th>Title</th>
//                         <th>Price</th>
//                         <th>Category</th>
//                     </tr>
//             </thead>
//             {/* <tbody>
//                 {data.map((value,index)=>{
//                     return <>
//                     <tr>
                        
//                     <td>{value.id}</td>
//                     <td>{value.name}</td>
                    
//                     <td>{value.email}</td>
                    
//                     <td>{value.age}</td>
//                     </tr>
                    
//                     </>
//                 })}
//                 <tr>
                    

//                 </tr>
//             </tbody> */}

//                 <tbody>
//                     {products.map((product, index) => (
//                         <tr key={product.id}>
//                             <td>{index + 1}</td>
//                             <td>{product.title}</td>
//                             <td>{product.price}</td>
//                             <td>{product.category}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//         </table>
        
//         </>
//     )
// }

// export default Table


import React from 'react'
import { useEffect } from 'react'

function App() {
    useEffect(async()=>{
            let res=await fetch("http//:fakestoreapi.com/products")
            let data=await res.json()    
             
    })
  return (
    <div>
      
    </div>
  )
}

export default App
