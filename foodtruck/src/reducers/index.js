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
import {
  operator
} from "./operator";
import {
  trucks
} from "./trucks";

export const rootReducer = combineReducers({
  registration,
  login,
  diner,
  operator,
  trucks
})