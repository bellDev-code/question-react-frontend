import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuTabBox from "./menuTabBox";

const Container = styled.div`
  width: 75%;
`;
const Wrapper = styled.div`
  height: 50vh;
`;

const BodyArea = styled.div`
  text-align: center;
`;

const BodyTitle = styled.div`
  font-size: 50px;
  margin-top: 20vh;
`;

const BodySubTitle = styled.div`
  font-size: 30px;
  margin-top: 5vh;
`;

const MenuArea = styled.div`
  margin: 5vh;
  display: flex;
`;

const DeskHome = () => {
  const menus = [
    {
      name: "백문백답",
      routeName: "/question",
    },
    {
      name: "밸런스게임",
      routeName: "/",
    },
    {
      name: "VS게임",
      routeName: "/",
    },
  ];
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
          {menus.map((menus, index) => {
            return (
              <Link to={menus.routeName} key={index}>
                <MenuTabBox name={menus.name} />
              </Link>
            );
          })}
        </MenuArea>
      </Wrapper>
    </Container>
  );
};

export default DeskHome;
