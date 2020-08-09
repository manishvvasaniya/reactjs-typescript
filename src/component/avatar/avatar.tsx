import * as React from "react";

import { Avatar } from "antd";

interface Props {
  src?: any;
  className?: string;
}
const AvatarComponent: React.FC<Props> = (props: Props) => {
  return <Avatar src={props.src} className={props.className || ""} />;
};

export default AvatarComponent;
