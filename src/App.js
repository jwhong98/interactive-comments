import "./App.css";
import React, { useState } from "react";
import Body from "./components/Body";
import CommentCard from "./components/CommentCard";
import Modal from "./components/Modal";
import ReplyCard from "./components/ReplyCard";
import data from "./data.json";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openHandler = () => {
    setIsOpen(true);
  };
  const closeHandler = () => {
    setIsOpen(false);
  };
  const createComment = (info) => {
    return (
      <CommentCard
        key={info.id}
        content={info.content}
        createdAt={info.createdAt}
        score={info.score}
        img={info.user.image.webp}
        username={info.user.username}
        replies={info.replies}
        onOpen={openHandler}
      />
    );
  };
  return (
    <>
      {isOpen && <Modal onClose={closeHandler} />}
      <Body>
        {data.comments.map(createComment)}
        <ReplyCard text="send" />
      </Body>
    </>
  );
}

export default App;
