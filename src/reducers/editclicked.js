const editClickedReducer = function editClicked(state = null, action){
    console.log("Broadcast action received from productNameclicked....")
    console.log(action);
    switch (action.type) {
            case "EDIT_CLICKED":   
           return state
       
            case "SEARCH_CLICKED":
            console.log(state)
            console.log(action.payload)
            return action.payload
    }
    

   return state

}

export default editClickedReducer