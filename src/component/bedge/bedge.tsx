import * as React from "react";

import { Badge } from "antd";

interface Props {
  children?: any;
  className?: string;
  dot?: boolean;
}
const BadgeComponent: React.FC<Props> = (props: Props) => {
  return (
    <Badge dot={props.dot || false} status={"success"}>
      <div>{props.children}</div>
    </Badge>
  );
};

export default BadgeComponent;
