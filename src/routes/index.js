import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";

import BookList from "../components/bookList";
import MyPage from "../components/myPage";
import MyLoans from "../components/myLoans";
import Login from "../components/login";
import Book from "../components/book";

export default props => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <PrivateRoute exact authed={props} path="/" component={BookList} />
    <PrivateRoute exact authed={props} path="/my_page" component={MyPage} />
    <PrivateRoute exact authed={props} path="/my_loans" component={MyLoans} />
    <PrivateRoute exact authed={props} path="/books/:id" component={Book} />
  </Switch>
);
