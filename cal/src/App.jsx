import { Component } from  "react"

import "./App.css"

class App extends Component{

  constructor(){
    super()
    this.state={


    }
  }

  render(){
    return(
      <div className="container">
        <input type="text"  />
      <div className="mainbtns">
        <button className="btn1">AC</button>
        <button className="btn2">/</button>
        <button className="btn3">*</button>
        <button className="btn4">-</button>
        <button className="btn5">7</button>
        <button className="btn6">8</button>
        <button className="btn7">9</button>
        <button className="btn8">+</button>
        <button className="btn9">4</button>
        <button className="btn10">5</button>
        <button className="btn11">6</button>
        <button className="btn12">=</button>
        <button className="btn13">1</button>
        <button className="btn14">2</button>
        <button className="btn15">3</button>
        <button className="btn16">0</button>
      </div>

      </div>
    )
  }
}
export default App