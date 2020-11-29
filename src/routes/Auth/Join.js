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
  text-align: center;
  padding: 50px 0 20px 0;
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
`;

const Input = styled.input``;

const JoinButton = styled.button`
  margin: 20px 0;
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
  return (
    <Container>
      <Wrapper>
        <JoinTitle>회원가입</JoinTitle>
        <JoinText>회원가입을 통해 서로의 문답을 공유해봐요!</JoinText>
      </Wrapper>
      <Wrapper>
        <InputWrapper>
          이메일
          <Input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <button onClick={emailSendOnClick}>인증하기</button>
          {isEmail && (
            <InputWrapper>
              인증번호
              <Input
                onChange={(event) => {
                  setVerifyCode(event.target.value);
                }}
              />
            </InputWrapper>
          )}
        </InputWrapper>
        <InputWrapper>
          닉네임
          <Input
            onChange={(event) => {
              setNickName(event.target.value);
            }}
          />
        </InputWrapper>
        <InputWrapper>
          비밀번호
          <Input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </InputWrapper>
        <JoinButton onClick={joinOnClick}>회원가입</JoinButton>
      </Wrapper>
    </Container>
  );
};

export default Join;
