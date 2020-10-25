import React from "react";
import styled from "styled-components";
import PlatformController from "../../components/PlatformController";
import DeskHome from "./Desktop";
import MobHome from "./Mobile";

const Container = styled.div``;
const Wrapper = styled.div``;

const Home = (props) => {
  const { platform } = props;
  // console.log(platform);
  return (
    <PlatformController
      platform={platform}
      deskRender={<DeskHome />}
      mobRender={<MobHome />}
    />
  );
};

export default Home;
