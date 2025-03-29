import { Component } from "react"

class App extends Component{
  constructor(){
    super()
   this.state={
    
    count:10
   }
  }
  handleincrement=()=>{
    this.setState({count:this.state.count+1})
  }
  handledecrement=()=>{
    this.setState({count:this.state.count-1})
  }

  handlereset=()=>{
    this.setState({count:0})
  }
  render(){
    return(
      <>
      <h1>{this.state.count}</h1>
      <button  onClick={this.handleincrement} disabled={this.state.count >=100}>+</button>
      <button onClick={this.handlereset} disabled={this.state.count<=0}>reset</button>
      <button  onClick={this.handledecrement}  disabled={this.state.count<=0}>-</button>

      
      </>
    )
  }



}
export default App

