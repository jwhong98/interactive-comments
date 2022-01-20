import React from "react";
import RepliesCard from "./RepliesCard";
import { RepliesContainer } from "./RepliesElements";

const Replies = (props) => {
  const createReplies = (info) => {
    return (
      <RepliesCard
        key={info.id}
        content={info.content}
        createdAt={info.createdAt}
        score={info.score}
        img={info.user.image.webp}
        username={info.user.username}
        replyingTo={info.replyingTo}
        onDelete={props.onDelete}
      />
    );
  };
  return (
    <RepliesContainer>{props.replies.map(createReplies)}</RepliesContainer>
  );
};

export default Replies;
