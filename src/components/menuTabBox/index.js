import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div``;

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

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

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
