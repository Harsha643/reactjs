import { Component } from "react"


class Nava extends Component{
    constructor(){
        super()
        this.state={
            login:"Login"
        }
    }
    changename = () => {
        this.setState({
            login: this.state.login === "Logout" ? "Login" : "Logout"
        });
    }
  render(){
        return (
            <div>
            <button onClick={this.changename}>{this.state.login}</button>
        
            </div>

        )
    }
}
export default Nava