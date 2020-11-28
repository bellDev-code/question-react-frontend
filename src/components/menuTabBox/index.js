import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
`;
const Wrapper = styled.div`
  font-size: 15px;
  padding: 20px;
  border-radius: 10px;
  width: 17vh;
  height: 15vh;
  border: solid 1px #d3d3d3;
  font-weight: 600;
`;

const Text = styled.div`
  padding-top: 15px;
  font-size: 13px;
  font-weight: 300;
  line-height: 15px;
`;

const MenuTabBox = ({ name, text }) => {
  return (
    <Container>
      <Wrapper>
        {name}
        <Text>{text}</Text>
      </Wrapper>
    </Container>
  );
};

export default MenuTabBox;
