import {
  ADD_TRUCK_RATING
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
  menuItems: [{
    menuItemId: 0,
    truckid: 0,
    itemImage: "",
    itemName: "",
    itemDescription: "",
    itemPrice: 0, // should be a float
    customerRatings: [],
    // customerRatingAvg: initialState.customerRatings.reduce((a, b) => a + b) / (initialState.customerRatings.length), // something like that
  }]
}]

export const trucks = (state = initialState, action) => {
  switch (action.type) {
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