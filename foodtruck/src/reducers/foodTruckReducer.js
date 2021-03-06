import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  LOGIN,
  LOGIN_START,
  REGISTER_START,
  REGISTER_SUCCESS,
} from "../actions/userActions";

const initialState = [{
  isRegistering: false,
  isLoggingIn: false,
  user: {
    loggedIn: false,
    // id: 0,
    username: "",
    password: "",
    // currentLocation: "",
    // favoriteTrucks: [],
    // reviews: [],
  },
  operators: [{
    id: 0,
    username: "",
    password: "",
    trucksOwned: [{
      imageOfTruck: "",
      cuisineType: "",
      customerRatings: [],
      customerRatingAvg: 0,
      //will backend calculate avg customer rating?
      // customerRatingAvg: initialState.operators.trucksOwned.customerRatings.length < 1 ? "No reviews" : initialState.operators.trucksOwned.customerRatings.reduce((a, b) => a + b) / initialState.operators.trucksOwned.customerRatings.length
    }, ],
  }, ],
}, ];

export const foodTruckReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START: {
      return {
        isRegistering: true,
        ...state
      }
    }
    case REGISTER_SUCCESS: {
      return {
        isRegistering: false,
      }
    }
    case LOGIN_START: {
      return {
        isLoggingIn: true,
        ...state,
      };
    }
    case LOGIN: {
      return {
        ...state,
        user: action.payload,
      };
    }
    // case
    case ADD_FAVORITE: {
      return {
        ...state,
        user: {
          ...state.user,
          favorites: [
            ...state.user.favorites,
            {
              ...action.payload,
            },
          ],
        },
      };
    }

    case REMOVE_FAVORITE: {
      return {
        ...state,
        user: {
          ...state.user,
          favorites: state.user.favorites.filter(
            (favorite) => favorite !== action.payload
          ),
        },
      };
    }

    default:
      return state;
  }
};

// sellers: [{
//   id: 0,
//   featured: false,
//   username: "",
//   password: "",
//   details: [{
//     description: "",
//     category: "",
//     tags: [],
//     address: ""
//   }],
//   images: [{
//     menu: [], // pictures of the menu ( stretch to add actual menu cards? )
//     restaurantPics: [], // images of food and menu items
//     profilePics: {
//       header: "",
//       profile: "",
//     } // images for profile and header?
//   }],
//   reviews: [{
//     username: "",
//     review: ""
//   }]
// }]