import React from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import { LOGIN_USER } from "./Auth.queries";
import { AUTH_TOKEN } from "../../constant";

// 맨위에 라이브러리 아래 커스텀 컴포넌트로 정리해주게 좋다.

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
  width: 65%;
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
  const email = useInput("");
  const password = useInput("");

  // cache => 임시 저장소
  // useMutation은 배열 return
  // ex ) const array = [0, 1, 2]
  // const [zero, one, two] = array;
  // zero의 이름은 아무렇게나 써놓아도 된다.
  // console.log(zero);
  const [loginUserMutation] = useMutation(LOGIN_USER, {
    fetchPolicy: "no-cache",
  });

  const onLoginClick = async (event) => {
    event.preventDefault();
    // 기존의 html에서 default event를 없애주는 기능 외워두자
    try {
      if (!email.value || !password.value) {
        throw Error();
      }
      const { data } = await loginUserMutation({
        variables: {
          email: email.value,
          password: password.value,
        },
      });
      if (data && data.loginUser && data.loginUser.ok) {
        localStorage.setItem(AUTH_TOKEN, data.loginUser.token);
        history.push("/");
        window.location.reload();
        return;
      }
      throw Error();
    } catch (error) {
      console.log(error);
      window.alert("존재하지 않는 이메일이거나 비밀번호가 일치하지 않습니다.");
    }
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
