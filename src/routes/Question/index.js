import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import PlatformController from "../../components/PlatformController";
import DeskQuestion from "./Desktop";
import MobQuestion from "./Mobile";
import { GET_STAGE } from "./Question.queries";

const Container = styled.div`
  font-family: HiMelody;
  width: 100%;
`;

const Question = (props) => {
  const { platform } = props;
  const stageId = props.match.params.id;

  const history = useHistory();

  const [steps, setSteps] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const { data } = useQuery(GET_STAGE, {
    variables: {
      id: +stageId,
    },
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (data && data.getStage) {
      if (data.getStage.ok) {
        const stage = data.getStage.stage;
        setSteps(stage.steps);

        const createWithAnswer = (aQuestions) =>
          aQuestions.map((question) => {
            return Object.assign(
              {},
              {
                ...question,
                answer: "",
              }
            );
          });

        const steps = stage.steps.map((step) =>
          createWithAnswer(step.questions)
        );

        setSteps(steps);
        // console.log(stage);
      }
    }
  }, [data]);
  // console.log(answerListData);

  useEffect(() => {}, []);

  const nextOnClick = () => {
    if (currentPage >= steps.length - 1) {
      return;
    }

    // empty answer check

    // for (const quetions of steps[currentPage]) {
    //   console.log(quetions);
    //   if (!quetions.answer) {
    //     alert("모든 질문에 답해주세요.");
    //     return;
    //   }
    // }

    const isEmptyAnswer = steps[currentPage].some((step) => {
      if (!step.answer) {
        return true;
      }
    });

    if (isEmptyAnswer) {
      alert("모든 질문에 답해주세요.");
      return;
    }

    // some과 every 함수로 코드량 줄이기
    // const isEmptyAnswer = steps[currentPage].some(
    //   (question) => !question.answer
    // );
    // const isEmptyAnswer = steps[currentPage].every((question) =>
    //   (question) => question.answer
    // )

    setCurrentPage(currentPage + 1);
  };

  const prevOnClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const sendOnClick = async () => {
    const answerList = [];

    steps.forEach((answer) => {
      answer.forEach((e) => {
        answerList.push(e);
      });
    });
    history.push({
      pathname: "/submit/question",
      state: {
        answerList: answerList,
      },
    });
    console.log(answerList);
  };

  const updateAnswer = (aCurrentPage, questionId, answer) => {
    setSteps((prev) => {
      const temp = [...prev];

      const foundIndex = temp[aCurrentPage].findIndex(
        (question) => question.id === questionId
      );

      if (foundIndex > -1) {
        temp[aCurrentPage][foundIndex].answer = answer;
      }
      return temp;
    });
  };

  return (
    steps &&
    steps.length > 0 && (
      <Container>
        <PlatformController
          platform={platform}
          deskRender={
            <DeskQuestion
              steps={steps}
              currentPage={currentPage}
              maxPage={steps.length}
              nextOnClick={nextOnClick}
              prevOnClick={prevOnClick}
              sendOnClick={sendOnClick}
              updateAnswer={updateAnswer}
            />
          }
          mobRender={
            <MobQuestion
              steps={steps}
              currentPage={currentPage}
              maxPage={steps.length}
              nextOnClick={nextOnClick}
              prevOnClick={prevOnClick}
              sendOnClick={sendOnClick}
              updateAnswer={updateAnswer}
            />
          }
        />
      </Container>
    )
  );
};

export default Question;
