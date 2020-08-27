import React from 'react';
import { connect } from 'react-redux';

class DeleteProducts extends React.Component {
    state = {}
    render() {
        if (!this.props.products) {
            return (
                <div>
                    <h3></h3>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>Product Deleted!! </h2>
                </div>
            );
        }
    }
}

function convertStoreToPropsForFriendDetail(store) {
    console.log("FriendDetail has received store....")
    console.log(store);
    return {
        products: store.deleteClicked,
    }
}

export default connect(convertStoreToPropsForFriendDetail)(DeleteProducts)
