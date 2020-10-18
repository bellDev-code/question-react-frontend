import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 15px;
`;
const Wrapper = styled.div`
  font-size: 23px;
  font-weight: 700;
`;

const HeaderTabBox = ({ name }) => {
  return (
    <Container>
      <Wrapper>{name}</Wrapper>
    </Container>
  );
};

export default HeaderTabBox;
