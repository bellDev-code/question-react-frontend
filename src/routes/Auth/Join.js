import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import styled from "styled-components";
import { ADD_USER, START_EMAIL_VERIFY } from "./Auth.queries";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 75%;
  padding: 50px 0 20px 0;
  text-align: center;
`;

const FormWrapper = styled.div`
  width: 50%;
  text-align: center;
`;

const JoinTitle = styled.div`
  font-size: 30px;
`;

const JoinText = styled.div`
  font-size: 30px;
  padding: 20px 0;
`;

const InputWrapper = styled.div`
  padding: 15px 0;
  display: flex;
`;

const Input = styled.input`
  padding: 5px;
  width: 100%;
`;

const JoinButton = styled.div`
  cursor: pointer;
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: #f7d780;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const EmailSendButton = styled.div`
  cursor: pointer;
  padding: 0 5px;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: #f7d780;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-left: 8px;
  width: 25%;
`;

const Submitbutton = styled.div`
  cursor: pointer;
  padding: 0 5px;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: #f7d780;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-left: 8px;
  width: 25%;
`;
const Join = () => {
  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");

  const [addUserMutation] = useMutation(ADD_USER);
  const [startEmailVerify] = useMutation(START_EMAIL_VERIFY, {
    fetchPolicy: "no-cache",
  });

  const joinOnClick = async () => {
    try {
      const { data } = await addUserMutation({
        variables: {
          nickName: nickName,
          email: email,
          password: password,
          gender: "male",
          birth: "",
        },
      });
      console.log(data);
    } catch (error) {}
  };

  const emailSendOnClick = async () => {
    try {
      const { data } = await startEmailVerify({
        variables: {
          email: email,
        },
      });
      if (data && data.startEmailVerify && data.startEmailVerify.ok) {
        setIsEmail(true);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyEmailClick = async () => {};
  return (
    <Container>
      <Wrapper>
        <JoinTitle>회원가입</JoinTitle>
        <JoinText>회원가입을 통해 서로의 문답을 공유해봐요!</JoinText>
      </Wrapper>
      <FormWrapper>
        <InputWrapper>
          <Input
            placeholder="이메일"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <EmailSendButton onClick={emailSendOnClick}>인증하기</EmailSendButton>
        </InputWrapper>
        {isEmail && (
          <InputWrapper>
            <Input
              placeholder="인증번호를 입력해주세요"
              onChange={(event) => {
                setVerifyCode(event.target.value);
              }}
            />
            <Submitbutton>확인</Submitbutton>
          </InputWrapper>
        )}
        <InputWrapper>
          <Input
            placeholder="닉네임"
            onChange={(event) => {
              setNickName(event.target.value);
            }}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            placeholder="비밀번호"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </InputWrapper>
        <JoinButton onClick={joinOnClick}>회원가입</JoinButton>
      </FormWrapper>
    </Container>
  );
};

export default Join;
