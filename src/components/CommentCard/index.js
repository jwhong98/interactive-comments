import React from "react";
import User from "./User";
import {
  CardContainer,
  Content,
  Badge,
  Icon,
  Score,
  Reply,
} from "./CommentCardElements";
import plus from "../../assets/icon-plus.svg";
import minus from "../../assets/icon-minus.svg";
import reply from "../../assets/icon-reply.svg";

const CommentCard = (props) => {
  return (
    <>
      <CardContainer>
        <User
          img={props.img}
          username={props.username}
          createdAt={props.createdAt}
        />
        <Content>{props.content}</Content>
        <Badge>
          <Icon src={plus} />
          <Score>{props.score}</Score>
          <Icon src={minus} />
        </Badge>
        <Reply>
          <Icon src={reply} />
          Reply
        </Reply>
      </CardContainer>
    </>
  );
};

export default CommentCard;
