import React, { ReactType } from "react";
import Input from "../../input/input";
import Img from "../../image/image";
import Search from "../../../static/assets/review/search.svg";
import Text from "../../text/text";
import SelectBlock from "../../selectBlock/selectBlock";
import Rate from "../../rate/rate";
import Button from "../../button/button";
import TextArea from "../../textArea/textArea";
import Oracle from "../../../static/assets/review/oracle.png";
import "./review.scss";
const Review: React.FC = () => {
  let DataList: any = [
    {
      text: "I am a New or Infrequent User"
    },
    {
      text: "I am a Super User"
    },
    {
      text: "I have Designed, Implemented and/or Managed this product/service"
    }
  ];
  let InputBefor = (
    <span className="input-befor">
      <Img src={Search} className="input-icon"></Img>
      <Text className="input-before-text">Company : </Text>
    </span>
  );
  return (
    <div className="newreview">
      <div className="company-name" tabIndex={5}>
        <Input before={InputBefor}></Input>
      </div>
      <div className="experiance-title">
        <Text>What experience do you have with this product or service?</Text>
      </div>
      <SelectBlock DataList={DataList}></SelectBlock>
      <div className="experiance-sub-title">
        <Text>Write about your experience</Text>
      </div>
      <div className="review-section">
        <div>
          <div className="image-of-product">
            <Img src={Oracle} type="image" className={"image-of-product"}></Img>
          </div>
          <div>
            <div className="name-of-the-product">
              <Text>Name of the Product or Service</Text>
            </div>
            <div className="name-of-the-product-input">
              <Input></Input>
            </div>
          </div>
        </div>
        <div>
          <div className="question-of">
            <Text>Question 1 of 2</Text>
          </div>
        </div>

        <div className="please-write-your-re">
          <Rate
            title={"On the scale of 1 to 5, rate your experience"}
            rateView={true}
          ></Rate>
        </div>
        <div className="question-of">
          <Text>Question 2 of 2</Text>
        </div>
        <div className="please-write-your-re">
          <Text>Please write your review</Text>
        </div>
        <div className="review-text-area">
          <TextArea rows={4}></TextArea>
        </div>
        <div className="review-button">
          <Button>Save & Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default Review;
