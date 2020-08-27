import {
  LOGIN_USER_SUCCESS,
  ADD_GPS_LOCATION,
  ADD_MANUAL_LOCATION,
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from "../actions/userActions";

const initialState = {
  id: 0,
  username: "",
  email: "",
  role: 0,
  favorites: [],
  location: null,
  locationGPS: null
}

export const diner = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        id: action.payload.id,
          username: action.payload.username,
          email: action.payload.email,
          role: action.payload.role,
      };
    case ADD_GPS_LOCATION:
      return {
        ...state,
        locationGPS: action.payload
      };
    case ADD_MANUAL_LOCATION:
      return {
        ...state,
        location: action.payload
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [
          ...state.favorites,
          action.payload
        ]
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: [
          state.favorites.filter(favorite => favorite.id !== action.payload)
        ]
      };
    default:
      return state
  }
}