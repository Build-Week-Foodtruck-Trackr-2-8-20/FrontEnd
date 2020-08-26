import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions/userActions";

export const login = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_START:
      console.log("loggin in...");
      return {
        loggingIn: true,
          user: action.payload
      };
    case LOGIN_SUCCESS:
      console.log("login success...");
      return {
        loggedIn: true,
          user: action.payload
      };
    case LOGIN_FAILURE:
      console.log("login failure...")
      return {};
    default:
      return state;
  }
}