import {
  ADD_TRUCK
} from "../actions/userActions";

const initialState = {
  id: 0,
  username: "",
  email: "",
  location: null,
  locationGPS: null,
  role: 2,
  trucksOwned: [] // array of IDs?
}

export const operator = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRUCK:
      return {
        ...state,
        trucksOwned: [
          ...state.trucksOwned,
          action.payload
        ]
      }
      default:
        return state
  }
}