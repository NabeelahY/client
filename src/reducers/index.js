import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { questionsReducer } from "./questionsReducer";

export default combineReducers({
  authReducer,
  userReducer,
  questionsReducer
});
