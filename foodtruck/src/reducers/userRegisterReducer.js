import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "../actions/userActions";

export const registration = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_START:
      console.log("registering...")
      return {
        registering: true
      };
    case REGISTER_SUCCESS:
      console.log("success...")
      return {};
    case REGISTER_FAILURE:
      console.log("fail...")
      return {};
    default:
      return state;
  }
}