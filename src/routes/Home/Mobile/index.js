import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuTabBox from "../../../components/menuTabBox";

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
  font-size: 23px;
  margin-top: 10vh;
`;

const MenuArea = styled.div`
  margin: 13vh 5vh 0 5vh;
`;

const MobHome = () => {
  const menus = [
    {
      name: "백문백답",
      routeName: "/question",
      text: "100가지의 질문을 완성하고 사랑하는 사람과 공유하자",
    },
    {
      name: "밸런스게임",
      routeName: "/",
      text: "서로의 취향 궁금하지 않아?",
    },
    {
      name: "심심풀이 VS게임",
      routeName: "/",
      text: "심심할땐 VS게임!",
    },
  ];
  return (
    <Container>
      <Wrapper>
        <BodyArea>
          <BodyTitle>방구석에서 놀아보자!</BodyTitle>
        </BodyArea>
        <MenuArea>
          {menus.map((menus, index) => {
            return (
              <Link to={menus.routeName} key={index}>
                <MenuTabBox
                  platform="mobile"
                  name={menus.name}
                  text={menus.text}
                />
              </Link>
            );
          })}
        </MenuArea>
      </Wrapper>
    </Container>
  );
};

export default MobHome;
