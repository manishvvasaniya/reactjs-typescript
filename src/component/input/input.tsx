import React, { ReactType } from "react";
import { Input } from "antd";
import "./input.scss";
interface InputSchema {
  before?: any;
  after?: any;
  className?: string;
  value?: string | number;
}
const InputComponent: React.FC<InputSchema> = (props: InputSchema) => {
  return (
    <Input addonBefore={props.before || ""} addonAfter={props.after || ""} />
  );
};

export default InputComponent;
