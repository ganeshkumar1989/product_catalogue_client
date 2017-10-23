// ./react-redux-client/src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Login from './containers/Login';
import Products from './containers/Products';

function loggedIn() {
    let user = JSON.parse(sessionStorage.getItem('user'));
    return user && user.token;
}

function requireAuth(nextState, replace) {
  if (!loggedIn()) {
    replace({
      pathname: '/login'
    })
  }
}

export default (
  <Route path="/" component={App}>
     <IndexRoute component={Products} onEnter={requireAuth}/>
     <Route path="login" component={Login} />
  </Route>  
)