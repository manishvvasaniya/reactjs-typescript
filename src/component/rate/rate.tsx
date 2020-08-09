import React, { useState } from "react";
import { Rate } from "antd";
import Text from "../text/text";
import "./rate.scss";
interface Props {
  title?: string;
  rateView?: boolean;
}
const RateComponent: React.FC<Props> = (props: Props) => {
  let [rate, setRate] = useState(0);
  return (
    <div className="rate">
      {props.title && (
        <div className="rate-title">
          <Text>{props.title}</Text>
        </div>
      )}
      <div className="rate-value-block">
        <Rate
          onChange={rate => {
            setRate(rate);
          }}
        ></Rate>
        <div className="rate-value">
          <span style={{ color: "#212126", fontWeight: 600 }}>{rate}</span>/{5}
        </div>
      </div>
    </div>
  );
};

export default RateComponent;
