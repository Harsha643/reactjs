import React from "react"
import { Naasongs } from "../custom/songs"
import Table from "../custom/Table"

class Mysongs extends React.Component{
    render(){
        let col=Object.keys(Naasongs[0])
        console.log(col);
        
        return(
            <>
            <Table  col={col} data={Naasongs} />
            </>
        )
    }
}

export default Mysongs