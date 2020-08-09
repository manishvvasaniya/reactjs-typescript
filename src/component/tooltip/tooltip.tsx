import React, { ReactType, Children } from "react";
import { Tooltip } from "antd";
interface Props {
  children?: any;
  title: string;
  style?: any;
}
const TooltipComponent: React.FC<Props> = (props: Props) => {
  return (
    <Tooltip title={props.title}>
      <span>{props.children}</span>
    </Tooltip>
  );
};

export default TooltipComponent;
