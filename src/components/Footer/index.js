import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 75%;
  display: flex;
  border-top: solid 1px #d3d3d3;
  flex-direction: column;
  padding: 50px 0;
`;

const FooterText = styled.div`
  margin: 10px 0;
  color: #c0c0c0;
`;

const FooterEmail = styled.div`
  color: #c0c0c0;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FooterText>created by bellDev-code</FooterText>
        <FooterEmail>fujifilm0517@naver.com</FooterEmail>
      </Wrapper>
    </Container>
  );
};

export default Footer;
