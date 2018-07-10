import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";

import Home from "../components/home";
import MyPage from "../components/myPage";
import MyLoans from "../components/myLoans";
import Login from "../components/login";
import BookDetails from "../components/bookDetails";

export default props => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <PrivateRoute exact authed={props.loggedIn} path="/" component={Home} />
    <PrivateRoute
      exact
      authed={props.loggedIn}
      path="/my_page"
      component={MyPage}
    />
    <PrivateRoute
      exact
      authed={props.loggedIn}
      path="/my_loans"
      component={MyLoans}
    />
    <PrivateRoute
      exact
      authed={props.loggedIn}
      path="/books/:id"
      component={BookDetails}
    />
  </Switch>
);
