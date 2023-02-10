import {ADD_To_Cart} from "../actionTypes";


//Action Creators
export const updateQuantity = (items) => ({
    type: ADD_To_Cart,
    payload: items,
});
    