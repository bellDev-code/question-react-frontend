import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuTabBox from "../../../components/menuTabBox";

const Container = styled.div`
  width: 75%;
`;
const Wrapper = styled.div`
  height: 55vh;
`;

const ImageWrapper = styled.div`
  width: 33%;
`;

const BodyArea = styled.div`
  text-align: center;
`;

const BodyTitle = styled.div`
  font-size: 50px;
`;

const BodySubTitle = styled.div`
  font-size: 30px;
  margin-top: 5vh;
`;

const MenuArea = styled.div`
  display: flex;
  align-items: center;
`;

const DeskHome = ({ menus }) => {
  return (
    <Container>
      <Wrapper>
        <BodyArea>
          <BodyTitle>방구석에서 놀아보자!</BodyTitle>
          <BodySubTitle>
            커플이 함께하는 백문백답, 밸런스게임, VS게임
          </BodySubTitle>
        </BodyArea>
        <MenuArea>
          {menus &&
            menus.length > 0 &&
            menus.map((menus, index) => {
              return (
                <ImageWrapper>
                  <Link to={menus.routeName} key={index}>
                    <MenuTabBox
                      platform="desktop"
                      thumbnail={menus.thumbnail}
                      name={menus.name}
                      text={menus.text}
                    />
                  </Link>
                </ImageWrapper>
              );
            })}
        </MenuArea>
      </Wrapper>
    </Container>
  );
};

export default DeskHome;
