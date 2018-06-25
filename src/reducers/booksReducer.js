import { GET_RECOMMENDED_BOOKS } from '../actions/types';

const initialState = {
  recommended: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_RECOMMENDED_BOOKS:
      return {
        ...state,
        recommended: action.books
      }
    default:
      return state;
  }
}