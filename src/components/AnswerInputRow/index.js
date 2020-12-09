import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;
const QuestionWrapper = styled.div`
  width: 100%;
  padding: 8px 0px;
  font-size: 17px;
  font-weight: 600;
`;
const AnswerWrapper = styled.div`
  width: 100%;
  padding: 5px 0 13px 0;
`;

const AnswerInput = styled.input`
  border: initial;
  border-bottom: 1px solid black;
  padding: 5px 0;
  width: 100%;
`;

const MobContainer = styled.div`
  width: 100%;
`;

const MobQuestionWrapper = styled.div`
  width: 100%;
  padding: 5px 0px;
  font-size: 12px;
  font-weight: 600;
`;

const MobAnswerWrapper = styled.div`
  width: 100%;
  padding: 3px 0 8px 0;
`;

const AnswerInputRow = ({ question, answerValue, onChange, platfrom }) => {
  if (platfrom === "desktop") {
    return (
      <Container>
        <QuestionWrapper>{question}</QuestionWrapper>
        <AnswerWrapper>
          <AnswerInput defaultValue={answerValue} onChange={onChange} />
        </AnswerWrapper>
      </Container>
    );
  } else {
    return (
      <MobContainer>
        <MobQuestionWrapper>{question}</MobQuestionWrapper>
        <MobAnswerWrapper>
          <AnswerInput defaultValue={answerValue} onChange={onChange} />
        </MobAnswerWrapper>
      </MobContainer>
    );
  }
};

export default AnswerInputRow;
