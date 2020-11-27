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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12vh;
`;

const DeskHome = () => {
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
          <BodySubTitle>
            커플이 함께하는 백문백답, 밸런스게임, VS게임
          </BodySubTitle>
        </BodyArea>
        <MenuArea>
          {menus.map((menus, index) => {
            return (
              <Link to={menus.routeName} key={index}>
                <MenuTabBox name={menus.name} text={menus.text} />
              </Link>
            );
          })}
        </MenuArea>
      </Wrapper>
    </Container>
  );
};

export default DeskHome;
