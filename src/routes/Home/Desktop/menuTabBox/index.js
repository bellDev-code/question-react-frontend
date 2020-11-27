import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
`;
const Wrapper = styled.div`
  font-size: 18px;
`;

const MenuTabBox = ({ name }) => {
  return (
    <Container>
      <Wrapper>{name}</Wrapper>
    </Container>
  );
};

export default MenuTabBox;
