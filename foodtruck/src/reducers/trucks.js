import {
  ADD_TRUCK_RATING,
  GET_TRUCKS,
  ADD_TRUCK,
  EDIT_TRUCK,
  DELETE_TRUCK
} from "../actions/userActions"

const initialState = [{
  isEditing: false
}]

export const trucks = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRUCKS:
      return action.payload
    case ADD_TRUCK_RATING:
      return {
        ...state,
        dinerRatingsArray: [
          ...state.dinerRatingsArray,
          action.payload
        ]
      };
    case ADD_TRUCK:
      console.log("adding truck", action.payload)
      return [
        ...state,
        action.payload
      ]
      // case EDIT_TRUCK:
      //   console.log("editing truck")
      //   return [
      //     ...state,
      //     action.payload
      //   ]
    case DELETE_TRUCK:
      return state.filter(truck => truck.id !== action.payload);
    default:
      return state
  }
}