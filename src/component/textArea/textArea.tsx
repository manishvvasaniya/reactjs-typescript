import React, { useState } from "react";
import { Input } from "antd";
import Text from "../../component/text/text";
import "./textArea.scss";
import Img from "../../component/image/image";
import Info from "../../../src/static/assets/review/info.svg";
import Tooltip from "../../component/tooltip/tooltip";
const { TextArea } = Input;
interface Props {
  rows?: number;
  max?: number;
}
const TextAreaComponet: React.FC<Props> = (props: Props) => {
  let [length, setLength] = useState(0);
  let max = props.max ? props.max : 250;
  return (
    <div>
      <TextArea
        rows={props.rows || 4}
        maxLength={max}
        onChange={event => {
          setLength(event.target.value.length);
        }}
      ></TextArea>
      <div className="text-area-info">
        <div className="-characters-remain">
          <Text>
            {`${(max as number) - (length as number)} characters remaining`}{" "}
          </Text>
        </div>
        <Tooltip title="Being more specific about the product or service you have used, provides more value to a company.">
          <Img src={Info}></Img>
        </Tooltip>
      </div>
    </div>
  );
};

export default TextAreaComponet;
