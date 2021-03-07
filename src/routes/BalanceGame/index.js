import React from "react";
import styled from "styled-components";
import PlatformController from "../../components/PlatformController";
import DeskBalanceGame from "./Desktop";
import MobBalanceGame from "./Mobile";

const Container = styled.div``;

const BalanceGame = (props) => {
  const { platform } = props;

  return <PlatformController platform={platform} deskRender={<DeskBalanceGame />} mobRender={<MobBalanceGame />} />;
};

export default BalanceGame;
