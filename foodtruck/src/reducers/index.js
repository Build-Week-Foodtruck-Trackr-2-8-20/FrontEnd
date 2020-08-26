import {
  combineReducers
} from "redux";
import {
  registration
} from "./userRegisterReducer";
import {
  login
} from "./userLoginReducer";

export const rootReducer = combineReducers({
  registration,
  login
})