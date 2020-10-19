import React from "react";
import styled from "styled-components";
import HeaderTabBox from "../HeaderTabBox";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContainerWrapper = styled.div`
  width: 75%;
  display: flex;
`;
const Wrapper = styled.div`
  width: 33%;
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
  const tabs = [
    {
      id: "a",
      name: "백문백답",
    },
    {
      id: "b",
      name: "밸런스게임",
    },
    {
      id: "c",
      name: "심심풀이 VS게임",
    },
  ];

  return (
    <Container>
      <ContainerWrapper>
        <Wrapper>
          <TitleWrapper>
            <TitleText>방구석 커플 문답</TitleText>
          </TitleWrapper>
        </Wrapper>
        <Wrapper>
          {tabs.map((tab) => {
            return <HeaderTabBox name={tab.name} />;
          })}
        </Wrapper>
        <Wrapper>
          <LoginWrapper>
            <LoginText>로그인</LoginText>
            <SignText>회원가입</SignText>
          </LoginWrapper>
        </Wrapper>
      </ContainerWrapper>
    </Container>
  );
};

export default Header;
