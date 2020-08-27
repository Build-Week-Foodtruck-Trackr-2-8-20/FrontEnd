import axios from "axios";
import axiosWithAuth from "../components/axiosWithAuth";
import {
  createBrowserHistory
} from "history";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";


const history = createBrowserHistory();


// registerObj = { username: "username", email: "email", password: "password", role: "diner/operator", location: "location", locationGPS: "locationGPS" }
export const registerUser = (registerObj) => (dispatch) => {
  // const history = useHistory();
  console.log("userActions.js: registerUser: registerObj: ", registerObj);
  dispatch({
    type: REGISTER_START,
  });
  axios
    .post("https://food-truck-lambda.herokuapp.com/api/auth/register", registerObj)
    .then((res) => {
      console.log(res.data);
      // history.push("/login")
      dispatch({
        type: REGISTER_SUCCESS
      })
      // history.push("/login"); // -> need to figure out why this won't work
    })
    .catch((err) => {
      console.log(err);
      // history.push("/login")
      dispatch({
        type: REGISTER_FAILURE
      })
    });
};

// loginObj = { username: "username", password: "password" }
export const loginUser = (loginObj) => (dispatch) => {
  dispatch({
    type: LOGIN_START,
    payload: loginObj
  });
  axiosWithAuth()
    .post("https://food-truck-lambda.herokuapp.com/api/auth/login", loginObj)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: loginObj
      })
      localStorage.setItem("authToken", res.data.token);
      history.push("/");
    })
    .catch((err) => {
      console.log(err)
      dispatch({
        type: LOGIN_FAILURE
      })
    });
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