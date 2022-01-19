import React from "react";
import Button from "../Button";
import {
  ReplyContainer,
  Textbox,
  UserSection,
  UserImg,
} from "./ReplyCardElements";
import data from "../../data.json";

const ReplyCard = () => {
  const profileImg = data.currentUser.image.webp;
  return (
    <ReplyContainer>
      <Textbox placeholder="Add a comment..." rows="4" />
      <UserSection>
        <UserImg src={profileImg} />
        <Button text="send" />
      </UserSection>
    </ReplyContainer>
  );
};

export default ReplyCard;
