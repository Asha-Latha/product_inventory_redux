import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.jpg';
import '../container/header.css'
import leftarrow from '../images/leftarrow.png'


class Logout extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>  
            <img src={logo} alt="logo" id="logo"  width="131" id="logo"></img>
              <h4>Product Inventory Management</h4>
                <Link to='/product' id="login"> <img src={leftarrow} alt="go back"   width="70" id="back"></img></Link> &nbsp;     
            </div>
         );
    }
}
 
export default Logout;

