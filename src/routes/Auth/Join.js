import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import styled from "styled-components";
import { ADD_USER } from "./Auth.queries";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 75%;
`;

const InputWrapper = styled.div``;

const Input = styled.input``;
const Join = () => {
  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");

  const [addUserMutation] = useMutation(ADD_USER);

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
  return (
    <Container>
      <Wrapper>Join</Wrapper>
      <Wrapper>
        <InputWrapper>
          이메일
          <Input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
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
        <button onClick={joinOnClick}>회원가입</button>
      </Wrapper>
    </Container>
  );
};

export default Join;
