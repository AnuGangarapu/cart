import { combineReducers } from "redux";
import {ADD_To_Cart} from "../actionTypes";


const initialState = {
    totalItems:0,
    price:0
  };
  
function cartReducer(state = initialState, action) {
    switch (action.type) {
    
      case ADD_To_Cart: {
       
        let totalItems = 0;
        let price = 0;
        const products=action.payload
        products.forEach(product => {
          totalItems+= product.quantity;
          price += product.quantity * product.cost;
        });
       
        return {
          ...state,
          totalItems:totalItems,
          price:price
        }; }
  
          
          
        
    
      default:
        return state;
    }
  }
export default combineReducers({cartReducer})