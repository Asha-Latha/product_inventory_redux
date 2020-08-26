import React from 'react';
import ProductAdd from '../container/productadd'
import DisplayProducts from '../container/displayproduct'
import ProductClicked from '../container/clickedproductdetails'
import DeleteProducts from '../container/deletedproducts'
import EditProduct from '../container/editproducts';
import {Route, Switch} from "react-router-dom";
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Product from './product';
import Login from '../container/login';



class Routing extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Switch>
          <Route exact path="/editproducts" component={EditProduct} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/" component={Login} />
          <Route exact path="/productadd" component={ProductAdd} />
        


          </Switch>
            </div>
         );
    }
}
 
export default Routing;