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
  width: 50%;
  display: flex;
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
      name: "커플일기장",
    },
    {
      id: "d",
      name: "일정",
    },
  ];

  return (
    <Container>
      <ContainerWrapper>
        <Wrapper>
          <TitleWrapper>
            <TitleText>방구석 문답</TitleText>
          </TitleWrapper>
        </Wrapper>
        <Wrapper>
          {tabs.map((tab) => {
            return <HeaderTabBox name={tab.name} />;
          })}
        </Wrapper>
      </ContainerWrapper>
    </Container>
  );
};

export default Header;
