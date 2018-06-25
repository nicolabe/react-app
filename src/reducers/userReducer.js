import { GET_USER, UPDATE_USER } from '../actions/types';

const initialState = {
  userData: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_USER:
      return {
        ...state,
        userData: action.user
      }
    case UPDATE_USER:
      return {
        ...state,
        userData: Object.assign({}, action.user)
      }
    default:
      return state;
  }
}