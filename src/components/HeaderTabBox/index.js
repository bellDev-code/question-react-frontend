import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 15px;
`;
const Wrapper = styled.div`
  font-size: 18px;
  font-weight: 500;
  opacity: 0.8;
`;

const HeaderTabBox = ({ name }) => {
  return (
    <Container>
      <Wrapper>{name}</Wrapper>
    </Container>
  );
};

export default HeaderTabBox;
