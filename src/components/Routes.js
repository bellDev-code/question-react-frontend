import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../routes/Home";
import Join from "../routes/Auth/Join";
import Login from "../routes/Auth/Login";
import Question from "../routes/Question";
import SubmitQuestion from "../routes/Question/SubmitQuestion";
import UpdateProfile from "../routes/Profile/UpdateProfile";
import BalanceGame from "../routes/BalanceGame";

const IsloginRouter = (routeProps) => {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Home {...props} {...routeProps} />} />

      <Route path="/question/:id" render={(props) => <Question {...props} {...routeProps} />} />
      <Route path="/submit/question" render={(props) => <SubmitQuestion {...props} {...routeProps} />} />

      <Route path="/user/profile/update" render={(props) => <UpdateProfile {...props} {...routeProps} />} />

      <Route path="/balancegame" render={(props) => <BalanceGame {...props} {...routeProps} />} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

const IslogoutRouter = (props) => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home {...props} />} />
      <Route path="/login" render={() => <Login {...props} />} />
      <Route path="/join" render={() => <Join {...props} />} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

const AppRouter = (props) => {
  // props의 내용에 따라 펼칠지 {...props} 각각으로 줄지 정한다.
  const { isLogin, platform } = props;
  return (
    <Switch>
      {isLogin ? (
        <IsloginRouter isLogin={isLogin} platform={platform} />
      ) : (
        <IslogoutRouter isLogin={isLogin} platform={platform} />
      )}
    </Switch>
  );
};

export default AppRouter;
