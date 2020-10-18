import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../routes/Home";
import Login from "../routes/Login";

const IsloginRouter = (props) => {
  return (
    <Switch>
      <Route exact path="/" render={(routeProps) => <Home {...props} />} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

const IslogoutRouter = (props) => {
  return (
    <Switch>
      <Route exact path="/" render={(routeProps) => <Home {...props} />} />
      <Route path="/login" render={(routeProps) => <Login {...props} />} />
    </Switch>
  );
};

const AppRouter = (props) => {
  const { isLogin } = props;
  return (
    <Switch>
      {isLogin ? <IsloginRouter {...props} /> : <IslogoutRouter {...props} />}
    </Switch>
  );
};

export default AppRouter;
