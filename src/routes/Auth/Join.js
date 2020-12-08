import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { formatYMD } from "../../utils";
import {
  ADD_USER,
  COMPLETE_EMAIL_VERYFY,
  START_EMAIL_VERIFY,
} from "./Auth.queries";

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
  font-size: 23px;
  padding: 20px 0;
  line-height: normal;
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

const GenderInput = styled.input``;

const GenderLabel = styled.label``;

const BirthLabel = styled.label``;

const BirthInput = styled.input``;

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const nickNameRegex = /^[가-힣a-zA-Z0-9]+$/;

const passworRegex = /(?=.*\d{1,50})(?=.*[~`!@#$%\_^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;

const Join = () => {
  const history = useHistory();
  const [email, setEmail] = useState("sumaoo20@naver.com");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");
  const [isVerified, setVerified] = useState(false);
  const [gender, setGender] = useState("male");
  const [birth, setBirth] = useState(formatYMD(new Date().getTime()));

  const [addUserMutation] = useMutation(ADD_USER);

  const [startEmailVerify] = useMutation(START_EMAIL_VERIFY, {
    fetchPolicy: "no-cache",
  });

  const [completeEmailVerify] = useMutation(COMPLETE_EMAIL_VERYFY, {
    fetchPolicy: "no-cache",
  });

  const joinOnClick = async () => {
    if (!isVerified) {
      window.alert("이메일 인증은 필수입니다.");
      return;
    }

    if (!email || !nickName || !password) {
      window.alert("모든 항목은 필수 입력 항목입니다.");
      return;
    }

    if (!nickNameRegex.test(nickName) || nickName.length > 16) {
      window.alert("닉네임은 한글, 영문, 숫자 혼합 16자 이내만 가능합니다.");
      return;
    }

    if (!passworRegex.test(password) || password.length > 50) {
      window.alert(
        "비밀번호는 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 50자리 이하 입니다."
      );
      return;
    }

    try {
      const { data } = await addUserMutation({
        variables: {
          nickName: nickName,
          email: email,
          password: password,
          gender: gender,
          birth: new Date(birth).getTime().toString(),
        },
      });
      if (data && data.addUser && data.addUser.ok) {
        localStorage.setItem("X-JWT", data.addUser.token);
        history.push("/");
        window.location.reload();
      } else {
        window.alert("이미 사용 중인 이메일이거나 잘못된 요청입니다.");
        return;
      }
      console.log(data);
    } catch (error) {}
  };

  const emailSendOnClick = async () => {
    if (!emailRegex.test(email)) {
      window.alert("이메일 형식이 잘못되었습니다.");
      return;
    }

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

  const verifyEmailClick = async () => {
    if (verifyCode.length !== 6) {
      window.alert("인증코드가 올바르지 않습니다.");
      return;
    }
    try {
      const { data } = await completeEmailVerify({
        variables: {
          email: email,
          code: verifyCode,
        },
      });
      if (data && data.completeEmailVerify && data.completeEmailVerify.ok) {
        setVerified(true);
      } else {
        window.alert("인증코드가 올바르지 않습니다.");
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
        <JoinText>간단한 회원가입을 통해 질문을 공유해보자!</JoinText>
      </Wrapper>
      <FormWrapper>
        <InputWrapper>
          <Input
            value={email}
            placeholder="이메일"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <EmailSendButton onClick={emailSendOnClick}>인증하기</EmailSendButton>
        </InputWrapper>
        {isEmail && (
          <InputWrapper>
            {isVerified ? (
              <Input
                placeholder="인증번호를 입력해주세요"
                onChange={(event) => {
                  setVerifyCode(event.target.value);
                }}
                disabled
              />
            ) : (
              <Input
                placeholder="인증번호를 입력해주세요"
                onChange={(event) => {
                  setVerifyCode(event.target.value);
                }}
              />
            )}

            {!isVerified && (
              <Submitbutton onClick={verifyEmailClick}>확인</Submitbutton>
            )}
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
          <GenderLabel>남성</GenderLabel>
          <GenderInput
            type="radio"
            id="radio_male"
            checked={gender === "male"}
            onClick={() => setGender("male")}
          />
          <GenderLabel>여성</GenderLabel>
          <GenderInput
            type="radio"
            id="radio_female"
            checked={gender === "female"}
            onClick={() => setGender("female")}
          />
        </InputWrapper>
        <InputWrapper>
          <BirthLabel>생년월일</BirthLabel>
          <BirthInput
            type="date"
            value={birth}
            max={birth}
            onChange={(event) => setBirth(event.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="password"
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
