import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import useInput from "../../../hooks/useInput";
import { SUBMIT_STAGE } from "./SubmitQuestion.queries";

const Container = styled.div`
  width: 100%;
`;

const DeskTitle = styled.div`
  text-align: center;
  font-size: 30px;
  padding: 50px 0 20px 0;
`;

const Form = styled.form`
  margin: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  padding: 5px;
  margin-right: 20px;
  width: 30%;
`;

const SendButton = styled.div`
  cursor: pointer;
  padding: 10px;
  background-color: #fbbc05;
  width: 100%;
  max-width: 100px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const SubmitQuestion = (props) => {
  const history = useHistory();

  const { answerList } = history.location.state;
  const email = useInput("");

  const [submitStageMutation] = useMutation(SUBMIT_STAGE);

  const submit = async () => {
    try {
      const converted = answerList.map((answer) => {
        const temp = answer;
        delete temp["__typename"];
        return temp;
      });

      const { data } = await submitStageMutation({
        variables: {
          email: email.value,
          inputs: converted,
        },
      });
      if (data && data.submitStage && data.submitStage.ok) {
        window.alert("전송 완료");
        history.push("/");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      window.alert("전송에 실패하였습니다. 이메일을 확인하고 다시 시도하세요.");
    }
  };
  return (
    <Container>
      <DeskTitle>이메일을 통해 서로의 문답을 공유해요!</DeskTitle>
      <Form>
        <Input
          placeholder="이메일"
          value={email.value}
          onChange={email.onChange}
        />
        <SendButton onClick={submit}>보내기</SendButton>
      </Form>
    </Container>
  );
};

export default SubmitQuestion;
