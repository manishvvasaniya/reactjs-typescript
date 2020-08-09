import * as React from "react";
import Img from "../image/image";
import Logo from "../../static/assets/header/logo.png";
import Avatar from "../avatar/avatar";
import Badge from "../bedge/bedge";
import { Icon } from "antd";
import "./header.scss";
import Bell from "../../static/assets/header/bell.png";
import DropDown from "../dropDown/dropDown";
const Header: React.FC = () => {
  let dropDownData: any[] = [
    {
      text: "profile"
    },
    {
      text: "logout"
    }
  ];
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-seaction1 ">
          <Img type="img" src={Logo} className="logo"></Img>
        </div>
        <div className="header-section2">
          <div className="bell-icon">
            <Badge dot={true}>
              <Img type="img" src={Bell} className="bell"></Img>
            </Badge>
          </div>
          <div>
            <Avatar className="logo"></Avatar>
            <DropDown Items={dropDownData}></DropDown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
