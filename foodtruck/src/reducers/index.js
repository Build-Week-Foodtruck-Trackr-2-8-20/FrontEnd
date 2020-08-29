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
  user
} from "./user";
import {
  operator
} from "./operator";
import {
  trucks
} from "./trucks";

export const rootReducer = combineReducers({
  registration,
  login,
  user,
  operator,
  trucks
})