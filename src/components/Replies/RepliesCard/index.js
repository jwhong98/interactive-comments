import React from "react";
import {
  CardContainer,
  Content,
  Span,
  Icon,
  Reply,
} from "./RepliesCardElements";
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
        <Content>
          <Span>@{props.replyingTo} </Span>
          {props.content}
        </Content>
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
