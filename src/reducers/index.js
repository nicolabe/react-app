import { combineReducers } from "redux";
import userReducer from "./userReducer";
import booksReducer from "./booksReducer";
import loginReducer from "./loginReducer";

export default combineReducers({
  user: userReducer,
  books: booksReducer,
  login: loginReducer
});
