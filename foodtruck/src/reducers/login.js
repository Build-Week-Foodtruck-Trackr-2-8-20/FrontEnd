import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actions/userActions";

const initialState = {
  loggingIn: false,
  loggedIn: false,
}

export const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      console.log("logging in...");
      return {
        ...state,
        loggingIn: true,
      };
    case LOGIN_SUCCESS:
      console.log("login success...");
      return {
        loggingIn: false,
          loggedIn: true,
      };
    case LOGIN_FAILURE:
      console.log("login failure...");
      return {
        loggingIn: false,
          loggedIn: false
      };
    default:
      return state;
  }
};