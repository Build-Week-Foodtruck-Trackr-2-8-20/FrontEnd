import axios from "axios";
import {
  useHistory
} from "react-router-dom";

export const LOGIN = "LOGIN";
export const LOGIN_START = "LOGIN_START";
export const REGISTER = "REGISTER";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

// const history = useHistory();



export const loginUser = (userObj) => (dispatch) => {
  dispatch({
    type: LOGIN_START,
  });
  axios
    .post( /* login endpoint, userObj */ )
    .then((res) => {
      console.log(res);
      localStorage.setItem("authToken", res.data.payload);
      // history.push("/");
    })
    .catch((err) => console.log(err));
};

export const registerUser = (userObj) => (dispatch) => {
  dispatch({
    type: REGISTER_START,
  });
  axios
    .post( /* register endpoint, userObj */ )
    .then()
  return {
    type: REGISTER,
    payload: {
      username: username,
      password: password,
    },
  };
};

// seller ID?
export const addFavorite = (seller) => {
  return {
    type: ADD_FAVORITE,
    payload: seller,
  };
};

// seller ID since we will be passing that to the delete call?
export const removeFavorite = (sellerId) => {
  return {
    type: REMOVE_FAVORITE,
    payload: sellerId,
  };
};

// user must be able to do the following:
// ADD FAVORITE, DELETE FAVORITE, ADD REVIEW, DELETE REVIEW

// seller must be able to do the following:
// CREATE TRUCK, VIEW TRUCK, UPDATE TRUCK, DELETE TRUCK




//
// export const loginUser = (username, password) => {
//   return {
//     type: LOGIN,
//     payload: {
//       username: username,
//       password: password
//     }
//   };
// };