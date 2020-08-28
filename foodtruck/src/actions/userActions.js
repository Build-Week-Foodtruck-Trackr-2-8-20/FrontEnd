import axios from "axios";
import {
  axiosWithAuth
} from "../components/axiosWithAuth";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_OPERATOR_SUCCESS = "LOGIN_OPERATOR_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const ADD_GPS_LOCATION = "ADD_GPS_LOCATION";
export const ADD_MANUAL_LOCATION = "ADD_MANUAL_LOCATION";
export const ADD_TRUCK = "ADD_TRUCK";
export const ADD_MENU_ITEM = "ADD_MENU_ITEM";
export const ADD_MENU_ITEM_PHOTO = "ADD_MENU_ITEM_PHOTO";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const ADD_TRUCK_RATING = "ADD_TRUCK_RATING";

// registerObj = {username: "", email: "", password: "", role: 0, location: "//optional", locationGPS: "//optional"}
export const registerUser = (registerObj) => (dispatch) => {
  console.log("userActions.js: registerUser: registerObj: ", registerObj);
  dispatch({
    type: REGISTER_START,
  });
  axios
    .post("https://food-truck-lambda.herokuapp.com/api/auth/register", registerObj)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: REGISTER_SUCCESS
      })
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: REGISTER_FAILURE
      })
    });
};

// loginObj = {username: "", password: ""}
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
      })
      res.data.role === 1 ?
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: res.data
        }) :
        dispatch({
          type: LOGIN_OPERATOR_SUCCESS,
          payload: res.data
        })
      localStorage.setItem("authToken", res.data.token);
    })
    .catch((err) => {
      console.log(err)
      dispatch({
        type: LOGIN_FAILURE
      })
    });
};

// OPERATOR EXCLUSIVE ACTIONS

// truckObj = {imageURL: "", cuisineType: "", location: "", locationGPS: "", departureTime: "", customerRatingAvg: 0, username: " //username of operator "}
export const addTruck = (truckObj) => (dispatch) => {
  axiosWithAuth()
    .post("https://food-truck-lambda.herokuapp.com/api/trucks", truckObj)
    .then((res) => {
      dispatch({
        type: ADD_TRUCK,
        payload: res.data
      })
    })
    .catch((err) => console.log(err))
}

// menuObj = {itemName: "", itemDescription: "", itemPrice: "", customerRatingAvg: 0, truckid: 0}
export const addMenuItem = (menuObj) => (dispatch) => {
  axiosWithAuth()
    .post("https://food-truck-lambda.herokuapp.com/api/trucks/menuItems", menuObj)
    .then((res) => {
      dispatch({
        type: ADD_MENU_ITEM,
        payload: res.data
      })
    })
    .catch((err) => console.log(err))
}

// photoObj = {photoURL: "", menuitemid: 0}
export const addMenuItemPhoto = (photoObj) => (dispatch) => {
  axiosWithAuth()
    .post(`https://food-truck-lambda.herokuapp.com/api/menuitems/${photoObj.menuitemid}/photos`, photoObj)
    .then((res) => {
      dispatch({
        type: ADD_MENU_ITEM_PHOTO,
        payload: res.data
      })
    })
    .catch((err) => console.log(err))
}

// DINER EXCLUSIVE ACTIONS

// dinerTruckIDsObj = {userid: 3, truckid: 2}
export const addFavorite = (dinerTruckIDsObj) => (dispatch) => {
  axiosWithAuth()
    .post("https://food-truck-lambda.herokuapp.com/api/diners/addfavtruck", dinerTruckIDsObj)
    .then((res) => {
      dispatch({
        type: ADD_FAVORITE,
        payload: res.data
      })
    })
    .catch(err => console.log(err))
};

// dinerTruckIDsObj = {userid: 3, truckid: 2}
export const removeFavorite = (dinerTruckIDsObj) => (dispatch) => {
  axiosWithAuth()
    .post("https://food-truck-lambda.herokuapp.com/api/diners/removefavtruck", dinerTruckIDsObj)
    .then((res) => {
      dispatch({
        type: REMOVE_FAVORITE,
        payload: res.data
      })
    })
    .catch((err) => console.log(err))
}

// truckRatingObj = {rating: 0, truckid: 0, username: ""}
export const addTruckRating = (truckRatingObj) => (dispatch) => {
  axiosWithAuth()
    .post(`https://food-truck-lambda.herokuapp.com/api/trucks/${truckRatingObj.truckid}/ratings`, truckRatingObj)
    .then((res) => {
      dispatch({
        type: ADD_TRUCK_RATING,
        payload: res.data
      })
    })
}

// menuRatingObj = {rating: 0, menuitemid: 0, username: ""}
// export const addMenuItemRating = (menuRatingObj) => (dispatch) => {
//   axiosWithAuth()
//     .post()
// }