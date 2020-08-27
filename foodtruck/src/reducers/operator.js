const initialState = {
  id: 0,
  username: "",
  email: "",
  location: null,
  locationGPS: null,
  role: 2,
  trucksOwned: [] // array of IDs?
}

export const operators = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}