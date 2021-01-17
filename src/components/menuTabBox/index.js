import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
  font-size: 15px;
  margin: 0 10px;
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

const MobContainer = styled.div``;

const MobWrapper = styled.div`
  font-size: 15px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  font-weight: 600;
  border: 1px solid #fbbc05;
  border-radius: 15px;
  background-color: #fbbc05;
  color: #fff;
  text-align: center;
`;

const Image = styled.img``;

const MenuTabBox = ({ platform, name, text, thumbnail }) => {
  if (platform === "desktop") {
    return (
      <Container>
        <Wrapper>
          <Image src={thumbnail}></Image>
          {name}
          <Text>{text}</Text>
        </Wrapper>
      </Container>
    );
  } else {
    return (
      <MobContainer>
        <MobWrapper>{name}</MobWrapper>
      </MobContainer>
    );
  }
};

export default MenuTabBox;
