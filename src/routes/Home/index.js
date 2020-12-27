import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import PlatformController from "../../components/PlatformController";
import DeskHome from "./Desktop";
import { GET_STAGE_LIST } from "./Home.queries";
import MobHome from "./Mobile";

const Home = (props) => {
  const { platform } = props;
  // console.log(platform);
  const [stageList, setStageList] = useState([]);
  const [menus, setMenus] = useState([]);

  // useQuery는 선언하자마자 요청한다.
  const { data } = useQuery(GET_STAGE_LIST, {
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (data && data.getStageList && data.getStageList.ok) {
      const stages = data.getStageList.stages;
      if (stages) {
        setStageList(stages);
      }
    }
  }, [data]);

  useEffect(() => {
    console.log(stageList);
    if (stageList && stageList.length > 0) {
      const menus = createQuestionsMenus(stageList);
      setMenus(menus);
    }
  }, [stageList]);
  console.log(menus);

  const createQuestionsMenus = (list) =>
    list.map((stage) => {
      return {
        name: stage.name,
        routeName: `/question/${stage.id}`,
        text: "test text",
      };
    });
  return (
    <PlatformController
      platform={platform}
      deskRender={<DeskHome menus={menus} />}
      mobRender={<MobHome />}
    />
  );
};

export default Home;
