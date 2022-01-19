import React from "react";
import User from "./User";
import { CardContainer, Content, Icon, Reply } from "./CommentCardElements";

import reply from "../../assets/icon-reply.svg";
import Badge from "../Badge";
import Replies from "../Replies";

const CommentCard = (props) => {
  const hasReplies = props.replies.length > 0;
  const replies = props.replies;
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
      {hasReplies && <Replies replies={replies} />}
    </>
  );
};

export default CommentCard;
