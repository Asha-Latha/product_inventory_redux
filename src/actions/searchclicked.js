const searchClicked = function(product){
    console.log(product);
    console.log("Broadcast the custom event with payload....");
    console.log("Reducer will capture the custom-event + payload....")
    return (
        {
            type:"SEARCH_CLICKED",
            payload: product
        }
    )
}

export default searchClicked