import * as React from "react";

interface Props {
  className?: string;
  style?: any;
  src: any;
  type?: string;
}
const Image: React.FC<Props> = (props: Props) => {
  return !props.type ? (
    <svg className={props.className || ""}>
      <image href={props.src} style={{ height: "inherit", width: "inherit" }} />
    </svg>
  ) : (
    <img src={props.src} className={props.className || ""}></img>
  );
};

export default Image;
