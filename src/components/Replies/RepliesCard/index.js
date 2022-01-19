import React from "react";
import { CardContainer, Content, Icon, Reply } from "./RepliesCardElements";
import reply from "../../../assets/icon-reply.svg";
import User from "../../CommentCard/User";
import Badge from "../../Badge";

const RepliesCard = (props) => {
  return (
    <>
      <CardContainer>
        <User
          img={props.img}
          username={props.username}
          createdAt={props.createdAt}
        />
        <Content>{props.content}</Content>
        <Badge score={props.score} />
        <Reply>
          <Icon src={reply} />
          Reply
        </Reply>
      </CardContainer>
    </>
  );
};

export default RepliesCard;
