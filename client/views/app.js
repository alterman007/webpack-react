import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import {
  Link,
} from 'react-router-dom';
import Routes from '../config/router';

@hot(module)
class App extends Component {
  render() {
    return (
      <Fragment>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/detail">详情页</Link></li>
        </ul>
        <Routes />
      </Fragment>
    );
  }
}

export default App;
