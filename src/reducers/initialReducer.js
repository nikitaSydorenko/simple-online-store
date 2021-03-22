import cartReducer from "./cartReducer";
import {combineReducers} from "redux";

const initialReducer = combineReducers({
    cart: cartReducer
})

export default initialReducer;
