import React from "react";
import styled from "styled-components";
import PlatformController from "../../components/PlatformController";
import useInput from "../../hooks/useInput";
import DeskQuestion from "./Desktop";
import MobQuestion from "./Mobile";

const Container = styled.div``;
const Wrapper = styled.div``;

const Question = (props) => {
  const questionList = [
    {
      title: "1. 이름은??",
      input: useInput(""),
    },
    {
      title: "2. 지금까지 살면서 별명은?",
      input: useInput(""),
    },
    {
      title: "3. 우리의 애칭은? (없으면 정해보기)",
      input: useInput(""),
    },
    {
      title: "4. 생년월일은?",
      input: useInput(""),
    },
    {
      title: "5. 혈액형은?",
      input: useInput(""),
    },
    {
      title: "6. 너의 가족에 대해서 설명해줘",
      input: useInput(""),
    },
    {
      title: "7. 직업은?",
      input: useInput(""),
    },
    {
      title: "8. 상대방의 매력은?",
      input: useInput(""),
    },
    {
      title: "9. 내가 생각하는 상대방의 성격은?",
      input: useInput(""),
    },
    {
      title: "10. 신체부위 중 매력적인 곳은?",
      input: useInput(""),
    },
    {
      title: "11. 상대방이 성형을 한다면?",
      input: useInput(""),
    },
    {
      title: "12. 키는?",
      input: useInput(""),
    },
    {
      title: "13. 가장 친한 친구는?",
      input: useInput(""),
    },
    {
      title: "14. 가장 아끼는 물건은?",
      input: useInput(""),
    },
    {
      title: "15. 잠버릇 있어?",
      input: useInput(""),
    },
    {
      title: "16. 핸드폰 기종은?",
      input: useInput(""),
    },
    {
      title: "17. 스마트폰으로 가장 많이 하는게 뭐야?",
      input: useInput(""),
    },
    {
      title: "18. 닮았다고 생각하는 동물은?",
      input: useInput(""),
    },
    {
      title: "19. 닮았다고 생각하는 연예인?",
      input: useInput(""),
    },
    {
      title: "20. 닮았다고 생각하는 만화 캐릭터는?",
      input: useInput(""),
    },
    {
      title: "21. 너가 느끼는 나의 정신연령은?",
      input: useInput(""),
    },
    {
      title: "22. 잠이 안올때 하는 행동은?",
      input: useInput(""),
    },
    {
      title: "23. 내 사랑을 표현하는 방법은?",
      input: useInput(""),
    },
    {
      title: "24. 내가 잘못을 해서 사과 하고 싶은 표현을 전달할때 하는 말은?",
      input: useInput(""),
    },
  ];
  const { platform } = props;
  // console.log(platform);
  return (
    <PlatformController
      platform={platform}
      deskRender={<DeskQuestion questionList={questionList} />}
      mobRender={<MobQuestion questionList={questionList} />}
    />
  );
};

export default Question;
