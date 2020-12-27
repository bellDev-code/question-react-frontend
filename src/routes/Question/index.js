import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import PlatformController from "../../components/PlatformController";
import DeskQuestion from "./Desktop";
import { GET_STAGE } from "./Question.queries";

const Container = styled.div`
  font-family: HiMelody;
  width: 100%;
`;

const Question = (props) => {
  const { platform } = props;
  const [steps, setSteps] = useState([]);
  // console.log(platform);
  const [answerListData, setAnswerListData] = useState([]);
  const history = useHistory();
  const stageId = props.match.params.id;

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
        setAnswerListData(
          stage.steps.map((step) =>
            step.questions.map((question) => {
              return Object.assign(
                {},
                {
                  ...question,
                  answer: "",
                }
              );
            })
          )
        );
        // console.log(stage);
      }
    }
  }, [data]);
  // console.log(answerListData);
  return (
    steps &&
    steps.length > 0 && (
      <Container>
        <PlatformController
          platform={platform}
          deskRender={
            <DeskQuestion
              history={history}
              answerListData={answerListData}
              setAnswerListData={setAnswerListData}
              steps={steps}
            />
          }
          mobRender={null}
        />
      </Container>
    )
  );
};

export default Question;
