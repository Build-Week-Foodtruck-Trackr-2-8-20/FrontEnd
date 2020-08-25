import {
  combineReducers
} from "redux";
import {
  registration
} from "./userRegisterReducer";

const rootReducer = combineReducers({
  registration,
  // login
})