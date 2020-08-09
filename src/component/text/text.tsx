import * as React from "react";
interface Props {
  children: any;
  className?: string;
  style?: any;
}
const Text: React.FC<Props> = (props: Props) => {
  return <span className={props.className || ""}>{props.children}</span>;
};

export default Text;
