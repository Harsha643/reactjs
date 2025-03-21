let Table=()=>{
    let fetchdata=async()=>{
        let res=await fetch("http://localhost:3000/users")
        let data=await res.json()
        return data

    }
    return (
        <>
        
        <table border={1} cellSpacing={0}>
            <thead>
                <tr>
                    <th>s.no</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr>

                </tr>
            </tbody>
        </table>
        
        </>
    )
}