import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import AppRouter from "./components/Routes";
import useWindowSize from "./hooks/useWindowSize";
import usePlatform from "./hooks/usePlatform";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  // let isLoginState = false;
  const [isLogin, setIsLogin] = useState(false);

  const screenSize = useWindowSize();
  const platform = usePlatform(screenSize);
  // console.log(platform); => 데스크탑, 모바일 체크하는 함수

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
      <Header />
      <AppRouter isLogin={isLogin} platform={platform} />
      <Footer />
    </Router>
  );
};

export default App;
