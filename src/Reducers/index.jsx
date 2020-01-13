import { combineReducers } from "redux";
import errorReducers from "./errorReducers";
import aadharCardReducers from "./aadharCardReducers";

export default combineReducers({
  error: errorReducers,
  aadhar_details: aadharCardReducers
});
