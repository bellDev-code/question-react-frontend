import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { AUTH_TOKEN } from "../../constant";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContainerWrapper = styled.div`
  width: 75%;
  display: flex;
  margin: 1vh 0;
  padding: 10px 0;
`;
const Wrapper = styled.div`
  width: 50%;
  display: flex;
  &:last-child {
    justify-content: flex-end;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginText = styled.div`
  padding: 10px;
  font-size: 14px;
  opacity: 0.5;
`;

const SignText = styled.div`
  padding: 10px;
  font-size: 14px;
  opacity: 0.5;
`;

const MobTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobTitleText = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const MobLoginWrapper = styled.div`
  display: flex;
  font-size: 13px;
`;

const MobLoginText = styled.div`
  padding: 5px;
  opacity: 0.5;
`;

const MobSignText = styled.div`
  padding: 5px;
  opacity: 0.5;
`;

const Header = ({ isLogin, setIsLogin, platform }) => {
  const history = useHistory();

  const onLogoutClick = () => {
    localStorage.removeItem(AUTH_TOKEN);
    setIsLogin(false);
    history.push("/");
    window.location.reload();
  };

  const onProfileClick = () => {
    history.push("/user/profile/update");
  };

  if (platform === "desktop") {
    return (
      <Container>
        <ContainerWrapper>
          <Wrapper>
            <TitleWrapper>
              <Link to={"/"}>
                <TitleText>방구석 커플 문답</TitleText>
              </Link>
            </TitleWrapper>
          </Wrapper>
          <Wrapper>
            <LoginWrapper>
              {isLogin ? (
                <>
                  <LoginText onClick={onLogoutClick}>로그아웃</LoginText>
                  <LoginText onClick={onProfileClick}>내프로필</LoginText>
                </>
              ) : (
                <Link to={"/login"}>
                  <LoginText>로그인</LoginText>
                </Link>
              )}
              {!isLogin && (
                <Link to={"/join"}>
                  <SignText>회원가입</SignText>
                </Link>
              )}
            </LoginWrapper>
          </Wrapper>
        </ContainerWrapper>
      </Container>
    );
  } else {
    return (
      <Container>
        <ContainerWrapper>
          <Wrapper>
            <MobTitleWrapper>
              <Link to={"/"}>
                <MobTitleText>방구석 커플 문답</MobTitleText>
              </Link>
            </MobTitleWrapper>
          </Wrapper>
          <Wrapper>
            <MobLoginWrapper>
              <Link to={"/login"}>
                <MobLoginText>로그인</MobLoginText>
              </Link>
              <Link to={"/join"}>
                <MobSignText>회원가입</MobSignText>
              </Link>
            </MobLoginWrapper>
          </Wrapper>
        </ContainerWrapper>
      </Container>
    );
  }
};

export default Header;
