import React from "react";
import { Router, Redirect} from "@reach/router";
import NotFound from "../containers/notFond";
import List from "../containers/dragon/list";
import Login from "../containers/user/login";
import Create from "../containers/dragon/create"
import Update from "../containers/dragon/update";
import VierMore from "../containers/dragon/viewMore";
import { isAuthenticated } from '../services/AuthenticationService';

const PrivateRoute = ({ component: Component, ...rest }) => (
  isAuthenticated() ? <Component {...rest} /> : <Redirect noThrow to="/login" />
);

const PublicRoute = ({ component: Component, ...rest }) => (
  isAuthenticated() ? <Redirect noThrow to="/" /> : <Component {...rest} />
);

export default function () {
  return <Router>
    <PrivateRoute exact path="/"  component={List} />
    <PublicRoute exact path="/login" component={Login} />
    <PrivateRoute exact path="/create" component={Create} />
    <NotFound default="/erro-404" />
    <PrivateRoute exact path="/update/:id" component={Update} />
    <PrivateRoute exact path="/view-more/:id" component={VierMore} />
  </Router>
}