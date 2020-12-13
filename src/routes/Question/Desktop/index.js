import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AnswerInputRow from "../../../components/AnswerInputRow";
import axios from "axios";
import bgImg from "../../../assets/images/backgroundImage.jpg";

const Container = styled.div`
  width: 100%;
  background-image: url(${bgImg});
`;

const DeskWrapper = styled.div`
  width: 75%;
  margin: auto;
  font-size: 16px;
  padding: 16px;
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
  margin: 20px 0;
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
  answerListData,
  setAnswerListData,
  history,
}) => {
  const maxPage = steps.length;
  console.log("steps length", steps.length);
  console.log("steps", steps);

  const [currentPage, setCurrentPage] = useState(0);
  const [listData, setListData] = useState([]);

  const nextOnClick = () => {
    if (currentPage < maxPage) {
      const answerInputs = document.getElementsByName("answer-input");
      const answerValues = [];
      let index = 0;
      for (const input of answerInputs) {
        answerValues.push({
          index: index,
          value: input.value,
        });
        index += 1;
      }
      setAnswerListData((prev) => {
        const temp = [...prev];
        answerValues.forEach((answer) => {
          temp[currentPage][answer.index].answer = answer.value;
        });
        return temp;
      });
      console.log("answerListData", answerListData);
    }
    if (currentPage < maxPage - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevOnClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const sendOnClick = async () => {
    console.log("chek");
    const answerList = [];

    answerListData.forEach((answer) => {
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

  useEffect(() => {
    // const dataLength = currentPage * pageLimit;
    setListData(steps[currentPage].questions);
  }, [currentPage]);

  return (
    <Container>
      <DeskWrapper>백문백답 오신것을 환영합니다.</DeskWrapper>
      <Wrapper>
        <Form>
          {listData.length > 0 &&
            listData.map((question) => {
              return (
                <AnswerInputRow
                  platfrom="desktop"
                  question={question.title}
                  key={question.id}
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
