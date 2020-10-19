import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 75%;
  display: flex;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>로그인 페이지</Wrapper>
    </Container>
  );
};

export default Login;
