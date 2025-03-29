import { Component } from "react"

class TrackText extends  Component{
        constructor(){
            super()
            this.state={
                inputText:""
            }
        }
handleinput=(e)=>{
    this.setState({inputText:e.target.value})
}
    render(){
        console.log(this.props)
        const {colors}=this.props

        console.log(colors)
        return(
            <>
                    {/* <div style={{backgroundColor:`${

                            

                    }`}}></div> */}


            <div>
                <h3>{this.state.inputText}</h3>

                <div style={{
                    width:"200px",
                    height:"200px",
                    backgroundColor:`${this.state.inputText}=="male" ? "red":${this.state.inputText}=="female" ? "red" :"green"`
                }}>
                    
                </div>
                <input type="text" placeholder="typing "  onChange={this.handleinput}/>

                <select >
                    <option value={"select"}>select</option>
                    <option value={"male"}>male</option>
                    <option value={"female"}>female</option>

                </select>
            </div>
            </>
        )
    }
}

export default TrackText