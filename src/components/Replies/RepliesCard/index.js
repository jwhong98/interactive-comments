import React, { useState } from "react";
import {
  CardContainer,
  Content,
  Span,
  UserSpecific,
  Delete,
  Edit,
  Icon,
  Reply,
} from "./RepliesCardElements";
import del from "../../../assets/icon-delete.svg";
import edit from "../../../assets/icon-edit.svg";
import reply from "../../../assets/icon-reply.svg";
import User from "../../CommentCard/User";
import Badge from "../../Badge";
import ReplyCard from "../../ReplyCard";

const RepliesCard = (props) => {
  const [openReply, setOpenReply] = useState(false);
  const currentUser = props.username === "juliusomo";

  const openReplyHandler = () => {
    setOpenReply(!openReply);
  };
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
        {currentUser ? (
          <UserSpecific>
            <Delete onClick={props.onDelete}>
              <Icon src={del} />
              Delete
            </Delete>
            <Edit>
              <Icon src={edit} />
              Edit
            </Edit>
          </UserSpecific>
        ) : (
          <Reply onClick={openReplyHandler}>
            <Icon src={reply} />
            Reply
          </Reply>
        )}
      </CardContainer>
      {openReply && <ReplyCard text="reply" />}
    </>
  );
};

export default RepliesCard;
