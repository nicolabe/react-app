import { LOGIN, LOGOUT } from "../actions/types";

const initialState = {
  loggedIn: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        loggedIn: false
      };
    case LOGIN:
      return {
        ...state,
        loggedIn: true
      };
    default:
      return state;
  }
}
