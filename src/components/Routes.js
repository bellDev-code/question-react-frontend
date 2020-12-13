import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../routes/Home";
import Join from "../routes/Auth/Join";
import Login from "../routes/Auth/Login";
import Question from "../routes/Question";
import SubmitQuestion from "../routes/Question/SubmitQuestion";

const IsloginRouter = (props) => {
  return (
    <Switch>
      <Route exact path="/" render={(routeProps) => <Home {...props} />} />

      <Route
        path="/Question"
        render={(routeProps) => <Question {...props} />}
      />
      <Route
        path="/submit/question"
        render={(routeProps) => <SubmitQuestion {...props} />}
      />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

const IslogoutRouter = (props) => {
  return (
    <Switch>
      <Route exact path="/" render={(routeProps) => <Home {...props} />} />
      <Route path="/login" render={(routeProps) => <Login {...props} />} />
      <Route path="/join" render={(routeProps) => <Join {...props} />} />
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
