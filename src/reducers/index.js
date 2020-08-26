import {combineReducers} from 'redux'
import myallproductsreducer from './productreducer'
import productNameClickedReducer from './productNameClicked'
import deleteClickedReducer from './deleteclicked'
import searchClickedReducer from './searchProduct'
import editClickedReducer from './editclicked'

const allReducers = combineReducers({
    productreducer: myallproductsreducer,
    productClicked: productNameClickedReducer,
    deleteClicked: deleteClickedReducer,
    searchClicked: searchClickedReducer,
    editClicked: editClickedReducer
})

export default allReducers;