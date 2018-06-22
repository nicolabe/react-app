import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BookList from '../components/bookList';
import MyPage from '../components/myPage';

export default () => (
    <Switch>
      <Route exact path="/" component={BookList} />
      <Route exact path="/my_page" component={MyPage} />
    </Switch>
);