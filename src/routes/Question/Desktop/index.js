import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AnswerInputRow from "../../../components/AnswerInputRow";
import bgImg from "../../../assets/images/backgroundImage.jpg";

const Container = styled.div`
  width: 100%;
  background-image: url(${bgImg});
`;

const DeskWrapper = styled.div`
  width: 75%;
  margin: auto;
  font-size: 30px;
  font-weight: 600;
  padding: 20px;
`;
const Wrapper = styled.div`
  width: 75%;
  margin: auto;
`;

const Form = styled.form``;

const PagingbuttonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

const PagingButton = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fbbc05;
  border-radius: 15px;
  margin: 0px 15px;
  background-color: #fbbc05;
  color: #fff;
  cursor: pointer;
`;

const DisablePagingButton = styled.div`
  cursor: pointer;
  background-color: #f7d780;
  padding: 16px;
  border: 1px solid #fbbc05;
  border-radius: 15px;
  color: #fff;
  font-weight: 600;
  margin: 0px 15px;
`;

const SendButton = styled.div`
  cursor: pointer;
  padding: 16px;
  background-color: #fbbc05;
  width: 100%;
  max-width: 250px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
`;

const DeskQuestion = ({
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
      <DeskWrapper>백문백답 오신것을 환영합니다.</DeskWrapper>
      <Wrapper>
        <Form>
          {steps[currentPage].length > 0 &&
            steps[currentPage].map((question) => {
              return (
                <AnswerInputRow
                  platfrom="desktop"
                  question={question}
                  key={question.id}
                  answer={question.answer}
                  updateAnswer={updateAnswer}
                  currentPage={currentPage}
                />
              );
            })}
        </Form>
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
        {currentPage === maxPage - 1 ? (
          <SendButton onClick={sendOnClick}>제출</SendButton>
        ) : null}
      </PagingbuttonWrapper>
    </Container>
  );
};

export default DeskQuestion;
