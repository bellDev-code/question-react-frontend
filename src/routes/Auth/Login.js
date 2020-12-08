import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import { LOGIN_USER } from "./Auth.queries";

const Container = styled.div`
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 75%;
  padding: 50px 0 20px 0;
  text-align: center;
`;

const LoginTitle = styled.div`
  font-size: 30px;
`;

const LoginText = styled.div`
  font-size: 23px;
  padding: 20px 0;
  line-height: normal;
`;

const LoginWrapper = styled.div`
  width: 50%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  padding: 15px 0;
`;

const Input = styled.input`
  padding: 5px;
  width: 100%;
`;

const LoginButton = styled.button`
  cursor: pointer;
  margin: 15px 0;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: #f7d780;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Login = () => {
  const history = useHistory();
  const email = useInput();
  const password = useInput();

  const [loginUserMutation] = useMutation(LOGIN_USER);

  const onLoginClick = async () => {
    if (!email.value || !password.value) {
      window.alert("존재하지 않는 이메일이거나 비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      const { data } = await loginUserMutation({
        variables: {
          email: email.value,
          password: password.value,
        },
      });
      if (data && data.loginUser && data.loginUser.ok) {
        localStorage.setItem("X-JWT", data.loginUser.token);
        history.push("/");
        window.location.reload();
      } else {
        window.alert(
          "존재하지 않는 이메일이거나 비밀번호가 일치하지 않습니다."
        );
        return;
      }
    } catch (error) {}
  };
  return (
    <Container>
      <Wrapper>
        <LoginTitle>로그인</LoginTitle>
        <LoginText>
          방구석 커플 문답을 100% 즐기기 위해서는 로그인을 해주세요!
        </LoginText>
      </Wrapper>
      <LoginWrapper>
        <Form onSubmit={() => onLoginClick()}>
          <InputWrapper>
            <Input
              placeholder="이메일"
              value={email.value}
              onChange={email.onChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder="비밀번호"
              value={password.value}
              onChange={password.onChange}
              type="password"
            />
          </InputWrapper>
          <LoginButton type="submit" onClick={onLoginClick}>
            로그인
          </LoginButton>
        </Form>
      </LoginWrapper>
    </Container>
  );
};

export default Login;
