import { Component } from "react";

class Form extends Component{
    constructor(){
        super()
        this.state={
            username:"",
            email:"",
            password:"",
            submitdata:null

        }

    }

    handleChange=(erripukra)=>{
        erripukra.preventDefault()
    
        this.setState({[erripukra.target.name] :erripukra.target.value})

        
    }
        handleSubmit=(e)=>{
            e.preventDefault()
            console.log(this.state)
            const{username,email,password}=this.state 
            this.setState({submitdata:{username,email,password}})
        }
    render(){
        // console.log(this.state)
        return(
           
            <>
            <form onSubmit={this.handleSubmit} >
                <label htmlFor="username" >Name:</label>
                <input type="text"
                 id="username"
                  placeholder="enter name"
                   name="username" 
                   onChange={(e)=>this.setState({username:e.target.value})}/>
                   <br />
                   <label htmlFor="email" >Email:</label>
                <input type="email"
                 id="email"
                  placeholder="enter email"
                   name="email" 
                   onChange={this.handleChange}
                //    onChange={(e)=>this.setState({email:e.target.value})}
                   />
                   <br />
                   <label htmlFor="password" >Password:</label>
                <input type="password"
                 id="password"
                  placeholder="enter password"
                   name="password" 
                   onChange={this.handleChange}/>
                    {/* onChange={(e)=>this.setState({email:e.target.value})} */}
                   <br />
                   
                <input type="submit" value="submit"  />
            </form>
           
                {/* <h1>{this.state.submitdata && this.state.submitdata.username}</h1>
                <h1>{this.state.submitdata && this.state.submitdata.email}</h1>
                <h1>{this.state.submitdata && this.state.submitdata.password}</h1> */}

                <table cellSpacing={0} border={2}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {this.state.submitdata && this.state.submitdata.username}
                            </td>
                            <td>
                            {this.state.submitdata && this.state.submitdata.email}

                            </td>
                            {this.state.submitdata && this.state.submitdata.password}
                            <td></td>
                        </tr>
                    </tbody>
                </table>

        

            </>

        ) 
    }
}
export default Form