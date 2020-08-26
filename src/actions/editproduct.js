const editClicked = function(product){
    console.log(product);
    console.log("Broadcast the custom event with payload....");
    console.log("Reducer will capture the custom-event + payload....")
    return (
        {
            type:"EDIT_CLICKED",
            payload: product
        }
    )
}

export default editClicked