import React from 'react';
import addProductBroadcast from '../actions/addproduct'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import '../../src/index.css'
import axios from 'axios'
import Header from '../container/header'
import Logout from '../container/logout';

class ProductAdd extends React.Component {
    
    constructor(props){
        super(props)
        this.state={
            id:'',
            name:'',
            category:'',
            price:'',
            quantity:'',
            instock:'',
            image:'',
            success:false  
        }
    }
    
    getProductName=(e)=>{
        this.setState({name:e.target.value}) 
    }
    getProductId=(e)=>{
        this.setState({id:e.target.value}) 
    }
    getCategory=(e)=>{
        this.setState({category:e.target.value}) 
    }
    getPrice=(e)=>{
        this.setState({price:e.target.value}) 
    }

    getQuantity=(e)=>{
        this.setState({quantity:e.target.value}) 
    }
    getStock=(e)=>{
        this.setState({instock:e.target.value}) 
    }
    getImage=(e)=>{
        this.setState({image:e.target.value}) 
    }
    captureProduct=()=>{
        let product = { 
            image:this.state.image,    
            name: this.state.name,
            category: this.state.category,
            price:this.state.price,
            quantity:this.state.quantity,
            instock:this.state.instock,   
        }
           this.props.sendNewProduct(product)
           this.props.history.push('/product')       
    }

    render() {    
        return ( 
            <div><Logout></Logout>
           <div>  
               <form>
           <fieldset id="fieldset">
           <legend id="legend">Add Product:</legend>
            <label>  Product Image:</label><input type="text" onChange={this.getImage}/><br></br>
         <label> Name:</label><input type="text" onChange={this.getProductName}/><br></br>
         <label> Category:</label> <input type="text" onChange={this.getCategory}/><br></br>
         <label> Price:</label><input type="number" min="0" onChange={this.getPrice}/><br></br>
         <label> Quantity:</label><input type="number"min="0" onChange={this.getQuantity}/><br></br>
         <label> Instock:</label><input type="text" onChange={this.getStock}/><br></br><br></br>
        <button id="subbutton" onClick={this.captureProduct}>Add+</button></fieldset></form>
           </div>    </div>
         );
    }
}

function mapStatesToProps(state){
    return{
        products:state.productreducer
    } 

}

function convertPropToEventAndBroadcast(dispatch){
    return bindActionCreators({
        sendNewProduct: addProductBroadcast 
    }, dispatch)
}
 
export default connect(mapStatesToProps, convertPropToEventAndBroadcast)(ProductAdd)
