import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import AppRouter from "./components/Routes";

const App = () => {
  // let isLoginState = false;
  const [isLogin, setIsLogin] = useState(false);

  // Will mount
  useEffect(() => {
    const isLoginItem = localStorage.getItem("isLogin");
    if (isLoginItem === "true") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <Router basename="/">
      <AppRouter isLogin={isLogin} />
    </Router>
  );
};

export default App;
