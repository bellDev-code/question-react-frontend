import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AnswerInputRow from "../../../components/AnswerInputRow";
import axios from "axios";
import bgImg from "../../../assets/images/backgroundImage.jpg";

const Container = styled.div`
  width: 100%;
  background-image: url(${bgImg});
`;

const MobWrapper = styled.div`
  width: 75%;
  margin: auto;
  font-size: 13px;
  padding: 10px;
`;
const Wrapper = styled.div`
  width: 75%;
  margin: auto;
`;

const PagingbuttonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

const PagingButton = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fbbc05;
  border-radius: 15px;
  margin: 0px 10px;
  background-color: #fbbc05;
  color: #fff;
  cursor: pointer;
`;

const DisablePagingButton = styled.div`
  cursor: pointer;
  background-color: #f7d780;
  padding: 12px;
  border: 1px solid #f7d780;
  border-radius: 15px;
  color: #fff;
  margin: 0px 10px;
`;

const SendButton = styled.div`
  cursor: pointer;
  padding: 12px;
  background-color: #fbbc05;
  width: 100%;
  max-width: 230px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
`;

const MobQuestion = ({
  steps,
  nextOnClick,
  sendOnClick,
  prevOnClick,
  currentPage,
  maxPage,
  updateAnswer,
}) => {
  return (
    <Container>
      <MobWrapper>백문백답 오신것을 환영합니다.</MobWrapper>
      <Wrapper>
        {steps[currentPage].length &&
          steps[currentPage].map((question) => {
            return (
              <AnswerInputRow
                platfrom="mobile"
                question={question}
                key={question.id}
                answer={question.answer}
                updateAnswer={updateAnswer}
                currentPage={currentPage}
              />
            );
          })}
      </Wrapper>
      <PagingbuttonWrapper>
        {currentPage === 0 ? (
          <DisablePagingButton>이전</DisablePagingButton>
        ) : (
          <PagingButton onClick={prevOnClick}>이전</PagingButton>
        )}
        {currentPage === maxPage ? (
          <DisablePagingButton>다음</DisablePagingButton>
        ) : (
          <PagingButton onClick={nextOnClick}>다음</PagingButton>
        )}
      </PagingbuttonWrapper>
      <PagingbuttonWrapper>
        {currentPage === maxPage ? (
          <SendButton onClick={sendOnClick}>제출</SendButton>
        ) : null}
      </PagingbuttonWrapper>
    </Container>
  );
};

export default MobQuestion;
