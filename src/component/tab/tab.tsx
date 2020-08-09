import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import Img from "../image/image";
import Text from "../text/text";

import "./tab.scss";
const { TabPane } = Tabs;

interface Props {
  tab: any[];
  active?: number;
}
const Tab: React.FC<Props> = (props: Props) => {
  let [tabs, changeActive] = useState({ tabs: props.tab, activeTab: 0 });

  let toggle: Function = (index: number, flag: boolean) => {
    let stateObject = { ...tabs };
    stateObject["tabs"][index]["active"] = flag;
    changeActive(stateObject);
  };
  return (
    <div>
      <Tabs defaultActiveKey="2">
        {tabs.tabs.map((tab, index) => {
          return (
            <TabPane
              tab={
                <div
                  className="tab tab-title"
                  onMouseOver={toggle.bind(null, index, true)}
                  onMouseOut={toggle.bind(null, index, false)}
                  onClick={() => {
                    changeActive({ ...tabs, activeTab: index });
                  }}
                >
                  {tab["active"] || tabs.activeTab == index ? (
                    <React.Fragment>
                      <Img src={tab.activeIcon} className="tab-icon"></Img>
                      <Text className="tab-text-active">{tab.name}</Text>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <Img src={tab.icon} className="tab-icon"></Img>
                      <Text>{tab.name}</Text>
                    </React.Fragment>
                  )}
                </div>
              }
              key={"tabs" + index}
            >
              <tab.component></tab.component>
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};

export default Tab;
