import Third from "./Third"

let Second=(props)=>{
    return (
        <>
        
        <h1>yes i know {props.greet} {props.name}</h1>
        <Third props={props}/>
        </>
    )

}
export default Second