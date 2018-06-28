import { LOGOUT, LOGIN } from "./types";

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT,
    loggedIn: false
  });
};

export const login = () => dispatch => {
  dispatch({
    type: LOGIN,
    loggedIn: true
  });
};
