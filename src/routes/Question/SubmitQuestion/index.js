import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useInput from "../../../hooks/useInput";
import { SUBMIT_STAGE } from "./SubmitQuestion.queries";

const SubmitQuestion = (props) => {
  const history = useHistory();

  const { answerList } = history.location.state;
  const email = useInput("");

  const [submitStageMutation] = useMutation(SUBMIT_STAGE);

  const submit = async () => {
    try {
      const converted = answerList.map((answer) => {
        const temp = answer;
        delete temp["__typename"];
        return temp;
      });

      const { data } = await submitStageMutation({
        variables: {
          email: email.value,
          inputs: converted,
        },
      });
      if (data && data.submitStage && data.submitStage.ok) {
        window.alert("전송 완료");
        history.push("/");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      window.alert("전송에 실패하였습니다. 이메일을 확인하고 다시 시도하세요.");
    }
  };
  return (
    <div>
      <input value={email.value} onChange={email.onChange} />
      <button onClick={submit}>보내기</button>
    </div>
  );
};

export default SubmitQuestion;
