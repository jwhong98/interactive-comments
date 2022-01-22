import React, { useState } from "react";
import User from "./User";
import {
  Thread,
  CardContainer,
  Content,
  UserSpecific,
  Delete,
  Edit,
  Icon,
  Reply,
} from "./CommentCardElements";
import del from "../../assets/icon-delete.svg";
import edit from "../../assets/icon-edit.svg";
import reply from "../../assets/icon-reply.svg";
import Badge from "../Badge";
import Replies from "../Replies";
import ReplyCard from "../ReplyCard";

const CommentCard = (props) => {
  const [openReply, setOpenReply] = useState(false);
  const hasReplies = props.replies.length > 0;
  const replies = props.replies;
  const currentUser = props.username === "juliusomo";

  const replyHandler = () => {
    setOpenReply(!openReply);
  };
  return (
    <Thread>
      <CardContainer>
        <User
          img={props.img}
          username={props.username}
          createdAt={props.createdAt}
        />
        <Content>{props.content}</Content>
        <Badge score={props.score} />
        {currentUser ? (
          <UserSpecific>
            <Delete onClick={props.onOpen}>
              <Icon src={del} />
              Delete
            </Delete>
            <Edit>
              <Icon src={edit} />
              Edit
            </Edit>
          </UserSpecific>
        ) : (
          <Reply onClick={replyHandler}>
            <Icon src={reply} />
            Reply
          </Reply>
        )}
      </CardContainer>
      {openReply && <ReplyCard text="reply" />}
      {hasReplies && <Replies replies={replies} onDelete={props.onOpen} />}
    </Thread>
  );
};

export default CommentCard;
