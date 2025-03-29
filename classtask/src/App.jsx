import {Component} from  "react"
import TrackText from "./track"

class App extends Component{
  constructor(){
    super()
    this.state={
      colors:["red","blue","green"],
      name:["ha","sha","vardha"]
      
    }

    }
    render(){
      const {colors,name} =this.state
      return (
      <>
      {name.map((val,ind)=>{
        return (
          <>
          
              <h3 style={{color:`${colors[ind]}`}}>{val}</h3>
              <TrackText colors={colors} />
          </>
        )
      })}
      <TrackText />
      </>
      )
    }

  }

  export default App