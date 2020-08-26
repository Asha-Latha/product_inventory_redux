const myallproductsreducer = function productreducer(state = null, action) {
    var allproducts = [
        {
            id:1,
            image:"https://png.pngtree.com/png-clipart/20190625/ourmid/pngtree-planner-application-template-for-mobile-phone-png-image_1510910.jpg",
            name:"realme",
            category:"mobiles",
            price:23000,
            quantity:5,
            instock:"yes"
        },
        {
            id:2,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQX0IycgK-P0ZoAZlg_zIZJP8RzTpwntTuG-A&usqp=CAU",
            name:"Shirts",
            category:"clothing",
            price:2400,
            quantity:15,
            instock:"yes"
        },
        {
            id:3,
            image:"https://www.gizbot.com/images/2019-07/vivo-s1_156352984560.jpg",
            name:"samsung",
            category:"mobiles",
            price:2500,
            quantity:25,
            instock:"yes"
        },
        {
            id:4,
            image:"https://p.kindpng.com/picc/s/584-5843384_t-shirt-hd-png-download.png",
            name:"Tee",
            category:"clothing",
            price:26,
            quantity:2,
            instock:"yes"
        }
    ]
    switch (action.type) {
        case "NEW_PRODUCT":
            console.log('add name, location for new friend....')                       
            console.log(state);
            console.log(action.payload);
            let length = state.length
            let newallfriends = [{                     
                                        id:length+1, 
                                        image:action.payload.image,
                                        name: action.payload.name,
                                        category: action.payload.category,
                                        price: action.payload.price,
                                        quantity:action.payload.quantity,
                                        instock:action.payload.instock
                                    }, ...state]
            return newallfriends
        case "PRODUCT_NAME_CLICKED":
            console.log("Value of state when friendname is clicked... in all friends.....!")
            console.log(state);
            return state

        case "DELETE_CLICKED":
            console.log(state)
            return state.filter(p=>p.id != action.payload.id)

        case "SEARCH_CLICKED":
            console.log(state)
            console.log(action.payload)
            return action.payload

         case "EDIT_CLICKED":   
         console.log(state)  
              console.log(action.payload)  
              return state.filter(p=>{
                  if(p.id === action.payload.id){
                 return(p.name=action.payload.name, 
                  p.name=action.payload.name, 
                  p.category=action.payload.category,
                  p.quantity=action.payload.quantity, 
                  p.price=action.payload.price,
                  p.instock=action.payload.instock        
                )}
            else{
                return state
            } }
        )
        }
      

return allproducts
}
export default myallproductsreducer

