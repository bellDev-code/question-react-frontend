import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AnswerInputRow from "../../../components/AnswerInputRow";

const Container = styled.div`
  width: 75%;
`;

const DeskWrapper = styled.div`
  font-size: 16px;
  padding: 16px;
`;
const Wrapper = styled.div``;

const PagingbuttonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PagingButton = styled.div`
  padding: 16px;
`;

const DisablePagingButton = styled.div`
  background-color: #ddd;
`;

const SendButton = styled.div``;

const DeskQuestion = ({ questionList }) => {
  const pageLimit = 10;

  const maxPage = Math.floor(questionList.length / pageLimit);

  const [currentPage, setCurrentPage] = useState(0);
  const [listData, setListData] = useState([]);

  const nextOnClick = () => {
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevOnClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const sendOnClick = () => {
    listData.map((e) => {
      console.log(e);
    });
  };

  useEffect(() => {
    setListData([...listData, ...questionList.slice(currentPage, pageLimit)]);
  }, []);

  useEffect(() => {
    const dataLength = currentPage * pageLimit;
    setListData([...questionList.slice(dataLength, dataLength + pageLimit)]);
  }, [currentPage]);

  return (
    <Container>
      <DeskWrapper>백문백답 오신것을 환영합니다.</DeskWrapper>
      <Wrapper>
        {listData.map((question, index) => {
          return (
            <AnswerInputRow
              question={question.title}
              key={index}
              answervalue={question.input.value}
              onChange={question.input.onChange}
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
      {currentPage === maxPage ? (
        <SendButton onClick={sendOnClick}>제출</SendButton>
      ) : null}
    </Container>
  );
};

export default DeskQuestion;
