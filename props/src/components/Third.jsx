let Third=(props)=>{
    
    let {props:{props:{greet="harsha",name="vardhan"}}} =props

    greet="harsha"
    name="vardhan"

    return (
        <>
        <h1>i don't know about you {greet} {name}</h1>
        </>
    )

}
export default Third