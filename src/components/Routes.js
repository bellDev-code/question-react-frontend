import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../routes/Home";
import Login from "../routes/Login";

const IsloginRouter = () => (
  <Switch>
    <Route exact path="/" render={(props) => <Home />} />
  </Switch>
);

const IslogoutRouter = () => (
  <Switch>
    <Route exact path="/" render={(props) => <Home />} />
    <Route path="/login" render={(props) => <Login />} />
  </Switch>
);

const AppRouter = ({ isLogin }) => {
  console.log(isLogin);
  return <Switch>{isLogin ? <IsloginRouter /> : <IslogoutRouter />}</Switch>;
};

export default AppRouter;
