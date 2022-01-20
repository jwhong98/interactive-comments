import React from "react";
import Button from "../Button";
import {
  ReplyContainer,
  Textbox,
  UserSection,
  UserImg,
} from "./ReplyCardElements";
import data from "../../data.json";

const ReplyCard = (props) => {
  const profileImg = data.currentUser.image.webp;
  return (
    <ReplyContainer>
      <Textbox placeholder="Add a comment..." rows="4" />
      <UserSection>
        <UserImg src={profileImg} />
        <Button text={props.text} />
      </UserSection>
    </ReplyContainer>
  );
};

export default ReplyCard;
