import React, { Fragment } from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

import TopicList from '../views/topicList';
import TopicDetail from '../views/topicDetail';

export default () => (
  <Fragment>
    <Route path="/" render={() => <Redirect to="/list" />} exact />
    <Route path="/list" component={TopicList} />
    <Route path="/detail" component={TopicDetail} />
  </Fragment>
);
