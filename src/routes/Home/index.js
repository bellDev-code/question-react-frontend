import React from "react";
import PlatformController from "../../components/PlatformController";
import DeskHome from "./Desktop";
import MobHome from "./Mobile";

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
