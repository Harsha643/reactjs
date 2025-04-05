import { Component }  from  "react"

class App extends Component{
  
  constructor(){
    super()
    this.state={
      username:""
    }
    this.arr=[]


  }
  handlesubmit=(e)=>{
    e.preventDefault()


  }

  render(){
    let arr=[]
    return(
      <>
        <form onSubmit={this.handlesubmit} >
          <label htmlFor="username">Name: </label>
          <input type="text"  name="username" id="username"/>
          <input type="submit" />
        </form>

      </>
    )
  }
}

export default App