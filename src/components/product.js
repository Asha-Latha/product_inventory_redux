import React from 'react';
import ProductAdd from '../container/productadd'
import DisplayProducts from '../container/displayproduct'
import ProductClicked from '../container/clickedproductdetails'
import DeleteProducts from '../container/deletedproducts'
import EditProduct from '../container/editproducts';
import { Route, Switch } from "react-router-dom";
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Login from '../container/login';

class Product extends React.Component {
    state = {}
    render() {
        return (
            <div>
                {/* <ProductAdd></ProductAdd> */}
                {/* <Login></Login> */}
                <DisplayProducts></DisplayProducts>
                <DeleteProducts></DeleteProducts>
                {/* <EditProduct></EditProduct> */}
                {/* <ProductClicked></ProductClicked> */}
                {/* <ProductAdd></ProductAdd> */}
                <Switch>
                    <Route path="/editproducts" component={EditProduct} />
                    <Route path="/productadd" component={ProductAdd} />
                </Switch>
            </div>
        );
    }
}

export default Product;