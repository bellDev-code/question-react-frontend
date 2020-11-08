import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AnswerInputRow from "../../../components/AnswerInputRow";
import axios from "axios";

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

  const sendOnClick = async () => {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:4000/api/users",
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    console.log(data);
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
      <PagingbuttonWrapper>
        {currentPage === maxPage ? (
          <SendButton onClick={sendOnClick}>제출</SendButton>
        ) : null}
      </PagingbuttonWrapper>
    </Container>
  );
};

export default DeskQuestion;
