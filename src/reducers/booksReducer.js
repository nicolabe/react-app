import { GET_RECOMMENDED_BOOKS, GET_LOANED_BOOKS } from "../actions/types";

const initialState = {
  recommended: [],
  loaned: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RECOMMENDED_BOOKS:
      return {
        ...state,
        recommended: action.books
      };
    case GET_LOANED_BOOKS:
      return {
        ...state,
        loaned: action.books
      };
    default:
      return state;
  }
}
