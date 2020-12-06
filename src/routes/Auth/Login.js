import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import { LOGIN_USER } from "./Auth.queries";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 75%;
  display: flex;
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
      <Wrapper>로그인 페이지</Wrapper>
      <form onSubmit={() => onLoginClick()}>
        <input value={email.value} onChange={email.onChange} />
        <input
          value={password.value}
          onChange={password.onChange}
          type="password"
        />
        <button type="submit" onClick={onLoginClick}>
          로그인
        </button>
      </form>
    </Container>
  );
};

export default Login;
