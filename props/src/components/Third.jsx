let Third=(props)=>{
    console.log(props.props.props.greet)
    return (
        <>
        <h1>i don't know about you {props.props.props.greet} {props.props.props.name}</h1>
        </>
    )

}
export default Third