import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import editClicked from '../actions/editproduct';
import '../../src/index.css'
import editClickedReducer from '../reducers/editclicked';
import {Link} from 'react-router-dom'
import Logout from '../container/logout'

class EditProduct extends React.Component {
    state = {  }
constructor(props){
    super(props)

    this.prod = this.props.products.filter(f=>
        {
          return  f.id === parseInt(this.props.location.state.myid)
        })
        console.log(this.prod)

console.log(this.prod)    
    this.state={
        prod:[],
        id:this.prod[0].id,
        name:this.prod[0].name,
     category:this.prod[0].category,
     quantity:this.prod[0].quantity,
     price:this.prod[0].price,
     instock:this.prod[0].instock
  
}
}

setName=(e)=>{
    this.setState({name:e.target.value})
}
setCategory=(e)=>{
    this.setState({category:e.target.value})
}
setQuantity=(e)=>{
    this.setState({quantity:e.target.value})
}
setPrice=(e)=>{
    this.setState({price:e.target.value})
}
setStock=(e)=>{
    this.setState({instock:e.target.value})
}


captureEditProduct=()=>{

    let editedproduct = {
        id:this.state.id,
        name: this.state.name,
        category: this.state.category,
        price:this.state.price,
        quantity:this.state.quantity,
        instock:this.state.instock
    }
    console.log(editedproduct)
    this.props.sendEditProduct(editedproduct)


}
    render() { 
        if(this.props.location.state.myid===undefined){
        return <h2>Click on edit product</h2>
        }
        else{
            return ( 
                <div><Logout></Logout>
                    <div>
                    <form>
           <fieldset id="fieldset">
  <legend id="legend">Edit Product:</legend>
               <label>Product Id</label> <input type="text" value={this.state.id} readOnly/><br></br>
               <label>Product Name</label> <input type="text"  value={this.state.name} onChange={this.setName}/><br></br>
               <label>Category</label> <input type="text" value={this.state.category} onChange={this.setCategory}/><br></br>
               <label>Quantity</label> <input type="number" value={this.state.quantity} onChange={this.setQuantity}/><br></br>
               <label>Price</label><input type="number" value={this.state.price} onChange={this.setPrice}/><br></br>
               <label>Instock</label> <input type="text" value={this.state.instock} onChange={this.setStock}/> <br></br>
                <Link to="/product"> <button id="savebtn" onClick={this.captureEditProduct}>Save</button></Link></fieldset></form>
                </div></div>
             );
        }}
        
    }

function convertStoreToPropsForFriendDetail(store){
    console.log("FriendDetail has received store....")
    console.log(store);
    return {
        products: store.productreducer
    }
}
function convertPropToEventAndBroadcast(dispatch){
    return bindActionCreators({
        sendEditProduct: editClicked 
    }, dispatch)
}


 
export default connect(convertStoreToPropsForFriendDetail,convertPropToEventAndBroadcast)(EditProduct);
 