import { useState } from "react";

const useInput = (initValue) => {
  const [value, setValue] = useState(initValue);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };
  return { value, setValue, onChange };
};

export default useInput;
