const deleteClickedReducer = function deleteClicked(state = null, action){
    console.log("Broadcast action received from productNameclicked....")
    console.log(action);
    switch (action.type) {
        case "DELETE_CLICKED":
            console.log("Action with payload received in reducer!")
            console.log(action.payload);
            return action.payload
       
            case "SEARCH_CLICKED":
            console.log(state)
            console.log(action.payload)
            return action.payload

            case "EDIT_CLICKED":   
            console.log(state)  
             return state
            }
       

   return state

}

export default deleteClickedReducer