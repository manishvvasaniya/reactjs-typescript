import * as React from "react";
import { Button } from "antd";
import "./button.scss";
interface Props {
  className?: string;
  onClick?: any;
  children: any;
}
const ButtonComponent: React.FC<Props> = (props: Props) => {
  let click = props.onClick ? props.onClick : () => {};
  return (
    <Button onClick={click} type="primary">
      {props.children}
    </Button>
  );
};

export default ButtonComponent;
