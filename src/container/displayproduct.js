import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import productNameClicked from '../actions/productclicked';
import deleteClicked from '../actions/deleteclicked'
import searchClicked from '../actions/searchclicked'
import { withRouter } from "react-router-dom";
import '../../src/index.css'
import '../container/product.css'
import editClicked from '../actions/editproduct';
import {compose} from 'redux'
import Header from '../container/header';



 class DisplayProducts extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            finalSearchValue:[]=this.props.products,
            searchV:'',
            myid:0,
        }
    }

    
    editProductWithId=(id)=>{
        console.log('edit product for received id: ' + id);
        this.setState({myid: id})
            console.log('Edit product with id: ' + id);
            this.props.history.push({ 
                                        pathname: '/editproducts', 
                                        state: {myid: id}
                                    })
        
                                    console.log('Edit product with id+++++++++++++: ' + id);
      }


    //   getProducts(){
    //     axios.get('http://localhost:3000/addproduct')
    //     .then((response)=>{   
    //         this.props.
    //          this.setState({allproducts: response.data})
    //         //  this.setState({finalSearchValue: response.data})
    //         console.log(response)},(error)=>{
    //             console.log(error)     
    //     })
    // }

    displayPropsReceivedFromStore=()=>{


        console.log("Received props from store -> friends");
        return this.props.products.map(f=>{
            return (
               

<div className="row">
<div className="column">
            <div className="card">
            <img src={f.image}  width="200px"
            height="205px"  alt="product image"/>
            {/* <p id="showprdt">Product Id: {f.id}</p> */}
            {/* <img src={"images/" + this.props.productimage} style={imgStyle}></img> */}
            <h3>{f.name}</h3>
            <p id="showprdt">Category: {f.category}</p>
            <p id="showprdt">Quantity : {f.quantity}</p>
            <p id="showprdt">Price: {f.price} </p>
            <p id="showprdt">In-Stock:{f.instock}</p>
            <p id="showprdt"><button id="editbtn" onClick={()=>this.editProductWithId(f.id)}>Edit</button>
               <button id="delbtn" onClick={()=>this.props.deleteProduct(f)}>Delete</button> </p>
                </div>
                </div>
</div>
            )
    
        });
    }
    
    getSearch=(e)=>{
       
        let searchvalue = e.target.value.toLowerCase();
        if(searchvalue === ''){
         this.displayPropsReceivedFromStore();
         }
      
        this.setState({searchV : searchvalue})
        console.log(searchvalue);
         let searchProducts = this.state.finalSearchValue.filter(f=>
          {
            return  f.name.toLowerCase().match(searchvalue.toLowerCase())||
                    f.category.toLowerCase().match(searchvalue.toLowerCase())
          })
         console.log(searchProducts)
         return this.props.getSearch(searchProducts);
      }

      addProduct=()=>{
          this.props.history.push('productadd')
      }

    state = {  }
    render() { 
        return ( 
          <div><Header></Header>
            <div>
            <div><h3 id="add">Add Product:<button id="addbutton" onClick={this.addProduct}>Add</button></h3> </div>
       
            <div>
             <label><h3>Search:</h3></label>  <input type="text" onChange={this.getSearch}></input> 
               <br></br>
            <div>
                  <br></br>
                   {this.displayPropsReceivedFromStore()}
                     
            </div>
            </div></div></div>
         );
    }
}

function mapStateToProps(state){
    return {
        products:state.productreducer
    }
}

function convertEventToPropsAndDispatch(dispatch){
    //console.log("Received the nameclicked event as props in FriendList.... ")
    return bindActionCreators({
        clickProductName: productNameClicked,
        deleteProduct: deleteClicked,
        getSearch: searchClicked,
        // editProduct:editClicked
    }, dispatch)

}


export default compose(
    withRouter,
    connect(mapStateToProps, convertEventToPropsAndDispatch)
  )(DisplayProducts);
// export default connect(mapStateToProps,convertEventToPropsAndDispatch)(DisplayProducts);
