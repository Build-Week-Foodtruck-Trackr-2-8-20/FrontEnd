import {
  ADD_TRUCK_RATING,
  GET_TRUCKS
} from "../actions/userActions"

const initialState = [{
  id: 0,
  imageURL: "",
  cuisineType: "",
  location: "",
  locationGPS: "",
  departureTime: "",
  customerRatingAvg: "",
  username: "",
  dinerRatingsArray: [],
}]

export const trucks = (state = [], action) => {
  switch (action.type) {
    case GET_TRUCKS:
      console.log("action firing")
      return action.payload
    case ADD_TRUCK_RATING:
      return {
        ...state,
        dinerRatingsArray: [
          ...state.dinerRatingsArray,
          action.payload
        ]
      }
      // case ADD_M
      default:
        return state
  }
}