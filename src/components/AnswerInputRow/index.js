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
  padding: 16px 0;
`;

const AnswerInput = styled.input``;

const AnswerInputRow = ({ question, answerValue, onChange }) => {
  return (
    <Container>
      <QuestionWrapper>{question}</QuestionWrapper>
      <AnswerWrapper>
        <AnswerInput defaultValue={answerValue} onChange={onChange} />
      </AnswerWrapper>
    </Container>
  );
};

export default AnswerInputRow;
