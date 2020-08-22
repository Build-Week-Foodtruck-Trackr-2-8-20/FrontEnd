export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

// seller ID?
export const addFavorite = seller => {
  return {
    type: ADD_FAVORITE,
    payload: seller
  };
};

// seller ID since we will be passing that to the delete call?
export const removeFavorite = sellerId => {
  return {
    type: REMOVE_FAVORITE,
    payload: sellerId
  };
};

// user must be able to do the following:
// ADD FAVORITE, DELETE FAVORITE, ADD REVIEW, DELETE REVIEW

// seller must be able to do the following:
// CREATE TRUCK, VIEW TRUCK, UPDATE TRUCK, DELETE TRUCK