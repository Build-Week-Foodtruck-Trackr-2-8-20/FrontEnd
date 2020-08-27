import {
  combineReducers
} from "redux";
import {
  registration
} from "./register";
import {
  login
} from "./login";
import {
  diner
} from "./diner";

export const rootReducer = combineReducers({
  registration,
  login,
  diner
})