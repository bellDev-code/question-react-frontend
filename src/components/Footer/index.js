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
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>푸터</Wrapper>
    </Container>
  );
};

export default Footer;
