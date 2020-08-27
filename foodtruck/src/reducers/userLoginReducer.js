import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actions/userActions";

const initialState = {
  loggedIn: false,
  id: "",
  username: "",
  email: "",
  role: ""
}

export const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      console.log("logging in...");
      return {
        loggingIn: true,
          user: action.payload,
      };
    case LOGIN_SUCCESS:
      console.log("login success...");
      console.log("login success", action.payload)
      return {
        loggedIn: true,
          id: action.payload.id,
          username: action.payload.username,
          email: action.payload.email,
          role: action.payload.role,
      };
    case LOGIN_FAILURE:
      console.log("login failure...");
      return {};
    default:
      return state;
  }
};