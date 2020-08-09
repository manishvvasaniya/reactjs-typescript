import * as React from "react";
import { Menu, Dropdown, Icon } from "antd";

interface Props {
  Items: any[];
}
const DropDownComponent: React.FC<Props> = (props: Props) => {
  let MenuItem: any = (
    <Menu>
      {props.Items.map((Item, index) => {
        return <Menu.Item key={index}>{Item.text}</Menu.Item>;
      })}
    </Menu>
  );
  return (
    <Dropdown overlay={MenuItem}>
      <a className="ant-dropdown-link" href="#" style={{ marginLeft: "10px" }}>
        <Icon type="down" />
      </a>
    </Dropdown>
  );
};

export default DropDownComponent;
