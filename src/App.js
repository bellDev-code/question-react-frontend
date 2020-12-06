import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HashRouter as Router, useHistory } from "react-router-dom";
import AppRouter from "./components/Routes";
import useWindowSize from "./hooks/useWindowSize";
import usePlatform from "./hooks/usePlatform";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyles from "./components/GlobalStyles";

const BodyContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  // let isLoginState = false;
  const [isLogin, setIsLogin] = useState(false);

  const screenSize = useWindowSize();
  const platform = usePlatform(screenSize);

  // console.log(platform); => 데스크탑, 모바일 체크하는 함수

  // Will mount
  useEffect(() => {
    const token = localStorage.getItem("X-JWT");
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <Router basename="/">
      <Header isLogin={isLogin} setIsLogin={setIsLogin} platform={platform} />
      <BodyContainer>
        <AppRouter isLogin={isLogin} platform={platform} />
      </BodyContainer>
      <Footer platform={platform} />
      <GlobalStyles />
    </Router>
  );
};

export default App;
