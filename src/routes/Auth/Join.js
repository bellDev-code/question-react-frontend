import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { AUTH_TOKEN } from "../../constant";
import { formatYMD } from "../../utils/dateUtils";
import { emailRegex, nickNameRegex, passworRegex } from "../../utils/regex";
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
  width: 65%;
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

const GenderLabel = styled.label`
  padding: 0 5px;
`;

const BirthLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px 0 5px;
`;

const BirthInput = styled.input``;

// 프로그래밍 기본 => 고정값은 한 번 선언해서 관리해주는게 편하다
const MALE = "male";
const FEMALE = "female";

const Join = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");
  const [isVerified, setVerified] = useState(false);
  const [gender, setGender] = useState(MALE);
  const [birth, setBirth] = useState(formatYMD(new Date().getTime()));

  const [addUserMutation] = useMutation(ADD_USER, {
    fetchPolicy: "no-cache",
  });

  const [startEmailVerify] = useMutation(START_EMAIL_VERIFY, {
    fetchPolicy: "no-cache",
  });

  const [completeEmailVerify] = useMutation(COMPLETE_EMAIL_VERYFY, {
    fetchPolicy: "no-cache",
  });

  const joinOnClick = async () => {
    try {
      if (!isVerified) {
        throw new Error("이메일 인증은 필수입니다.");
      }

      if (!email || !nickName || !password) {
        throw new Error("모든 항목은 필수 입력 항목입니다.");
      }

      if (!nickNameRegex.test(nickName) || nickName.length > 16) {
        throw new Error(
          "닉네임은 한글, 영문, 숫자 혼합 16자 이내만 가능합니다."
        );
      }

      if (!passworRegex.test(password) || password.length > 50) {
        throw new Error(
          "비밀번호는 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 50자리 이하 입니다."
        );
      }
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
        localStorage.setItem(AUTH_TOKEN, data.addUser.token);
        history.push("/");
        window.location.reload();
      } else {
        window.alert("이미 사용 중인 이메일이거나 잘못된 요청입니다.");
        return;
      }
    } catch (error) {
      console.log(error);
      window.alert(error.message);
    }
  };

  const emailSendOnClick = async () => {
    try {
      if (!emailRegex.test(email)) {
        throw new Error();
      }
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
      window.alert("이메일 형식이 잘못되었습니다.");
    }
  };

  const verifyEmailClick = async () => {
    try {
      if (verifyCode.length !== 6) {
        throw new Error();
      }
      const { data } = await completeEmailVerify({
        variables: {
          email: email,
          code: verifyCode,
        },
      });
      if (data && data.completeEmailVerify && data.completeEmailVerify.ok) {
        setVerified(true);
      }
      throw new Error();
    } catch (error) {
      console.log(error);
      window.alert("인증코드가 올바르지 않습니다.");
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
            checked={gender === MALE}
            onClick={() => setGender(MALE)}
            readOnly
          />
          <GenderLabel>여성</GenderLabel>
          <GenderInput
            type="radio"
            id="radio_female"
            checked={gender === FEMALE}
            onClick={() => setGender(FEMALE)}
            readOnly
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
