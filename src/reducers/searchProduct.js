const searchClickedReducer = function searchClicked(state = null, action){
    console.log("Broadcast action received from productNameclicked....")
    console.log(action);
    switch (action.type) {
        case "SEARCH_CLICKED":
            console.log("Action with payload received in reducer!")
            console.log(action.payload);
            return action.payload
       
            case "EDIT_CLICKED":   
             return state
            }
      

   return state

}

export default searchClickedReducer