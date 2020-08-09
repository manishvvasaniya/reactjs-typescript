import React, { ReactType } from "react";
import Tab from "../../component/tab/tab";
import Edit from "../../static/assets/review/edit.svg";
import List from "../../static/assets/review/noun-list.svg";
import EditActive from "../../static/assets/review/edit_active.svg";
import ListActive from "../../static/assets/review/nout_list_active.svg";
import ReviewComponet from "../../component/review/review/review";
import Activity from "../../component/review/activity/activity";
import Header from "../../component/header/header";
import "./review.scss";
const Review: React.FC = () => {
  const Tabs: any = [
    {
      name: "Submit new Review",
      icon: Edit,
      activeIcon: EditActive,
      component: ReviewComponet
    },
    {
      name: "Your Activities",
      icon: List,
      activeIcon: ListActive,
      component: Activity
    }
  ];
  return (
    <div>
      <Header></Header>

      <div className="review">
        <div className="review-inner">
          <Tab tab={Tabs}></Tab>
        </div>
      </div>
    </div>
  );
};

export default Review;
