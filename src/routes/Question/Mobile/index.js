import React from "react";
import styled from "styled-components";
import AnswerInputRow from "../../../components/AnswerInputRow";

const Container = styled.div``;
const Wrapper = styled.div``;

const MobQuestion = ({ questionList }) => {
  return (
    <Container>
      <Wrapper>
        {questionList.map((question, index) => {
          return <AnswerInputRow question={question.title} key={index} />;
        })}
      </Wrapper>
    </Container>
  );
};

export default MobQuestion;
