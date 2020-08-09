import React, { useState } from "react";
import { render } from "react-dom";
import { Row, Col } from "antd";
import Text from "../../component/text/text";
import "./selectBlock.scss";
interface Props {
  onchange?: Function;
  DataList: any[];
}
const SelectBlock: React.FC<Props> = (props: Props) => {
  let [state, setState] = useState(-1);

  return (
    <div className="select-box">
      <Row>
        {props.DataList.map((Items, index) => {
          return (
            <Col
              span={8}
              key={index}
              className={index == state ? "select-box-active" : ""}
              onClick={() => {
                setState(index);
              }}
            >
              <Text>{Items.text}</Text>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default SelectBlock;
