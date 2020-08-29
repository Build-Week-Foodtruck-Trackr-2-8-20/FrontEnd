const initialState = [{
  menuItemId: 0,
  truckid: 0,
  itemImage: "",
  itemName: "",
  itemDescription: "",
  itemPrice: 0, // should be a float
  customerRatings: [],
  customerRatingAvg: 0
}]

export const menu = (state = initialState, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
}