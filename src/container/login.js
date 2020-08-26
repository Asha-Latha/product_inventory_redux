import React from 'react';
import {Link} from 'react-router-dom';
import '../container/login.css'
import Header from '../container/header';
class Login extends React.Component {
    constructor(props){
        super(props);
 this.state={
    email : '',
    password: '',
  }
    }
    getEmail=(e)=>{     
        console.log(e.target.value);
        this.setState({email: e.target.value})
      }
      getPassword=(e)=>{  
         console.log(e.target.value);
         this.setState({password: e.target.value})
      }

      handleSubmit=()=>{
  this.props.history.push('/product')
      }
    render() { 
        return ( 
          <div>
          <Header></Header><br></br><br></br>
          <div id="loginpage">     
                <div id="loginstyles" className="border-box" >
                <h2 >Login Form</h2>  
                     <form id="flogin"  onSubmit={this.handleSubmit}>    
              <label> Username:</label><input type="text" required="required" onChange={this.getEmail}/><br></br>
              <label> Password:</label> <input type="password" required="required" onChange={this.getPassword}/><br></br><br></br>
         <button type="submit" value="Login" id="submit"> Login</button> &nbsp;&nbsp;&nbsp;<Link to="/register">New Member</Link>
               </form>
               </div></div></div>
         );
    }
}
 
export default Login;