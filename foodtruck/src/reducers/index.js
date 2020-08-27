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

export const rootReducer = combineReducers({
  registration,
  login,
  user
})