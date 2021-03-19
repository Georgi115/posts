import { combineReducers } from "redux";
import authorizationReducer from "./redusers/authorizationReducer";
import appStartPageReducer from "./redusers/appStartPageReducer";

export default combineReducers({
  authorizationReducer,
  appStartPageReducer,
});
