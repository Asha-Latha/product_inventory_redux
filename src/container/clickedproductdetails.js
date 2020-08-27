import React from 'react';
import { connect } from 'react-redux';

class ProductClicked extends React.Component {
    render() {
        if (!this.props.products) {
            return (
                <div>
                    <h3>Click on any product above to see detail....</h3>
                </div>
            )
        } else {
            return (
                <div>
                    <ol>
                        <li> Name: {this.props.products.name}</li>
                        <li>category: {this.props.products.category} </li>
                        <li>price: {this.props.products.price} </li>
                        <li>quantity: {this.props.products.quantity} </li>
                        <li>in stock: {this.props.products.instock}</li>
                    </ol>
                </div>
            );
        }


    }
}
function convertStoreToPropsForFriendDetail(store) {
    console.log("FriendDetail has received store....")
    console.log(store);
    return {
        products: store.productClicked,
    }
}
export default connect(convertStoreToPropsForFriendDetail)(ProductClicked)
