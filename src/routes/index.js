import React from "react";
import { Switch, Route } from "react-router-dom";

import BookList from "../components/bookList";
import MyPage from "../components/myPage";
import MyLoans from "../components/myLoans";

export default () => (
  <Switch>
    <Route exact path="/" component={BookList} />
    <Route exact path="/my_page" component={MyPage} />
    <Route exact path="/my_loans" component={MyLoans} />
  </Switch>
);
