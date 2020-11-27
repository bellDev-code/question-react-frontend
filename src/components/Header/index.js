import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContainerWrapper = styled.div`
  width: 75%;
  display: flex;
  margin-top: 2vh;
`;
const Wrapper = styled.div`
  width: 50%;
  display: flex;
  &:last-child {
    justify-content: flex-end;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginText = styled.div`
  padding: 10px;
  font-size: 14px;
  opacity: 0.5;
`;

const SignText = styled.div`
  padding: 10px;
  font-size: 14px;
  opacity: 0.5;
`;

const Header = () => {
  return (
    <Container>
      <ContainerWrapper>
        <Wrapper>
          <TitleWrapper>
            <Link to={"/"}>
              <TitleText>방구석 커플 문답</TitleText>
            </Link>
          </TitleWrapper>
        </Wrapper>
        <Wrapper>
          <LoginWrapper>
            <LoginText>로그인</LoginText>
            <Link to={"/join"}>
              <SignText>회원가입</SignText>
            </Link>
          </LoginWrapper>
        </Wrapper>
      </ContainerWrapper>
    </Container>
  );
};

export default Header;
