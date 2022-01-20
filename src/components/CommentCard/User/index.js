import React from "react";
import {
  UserInfo,
  ProfileImg,
  Username,
  Tag,
  PostDuration,
} from "./UserElements";

const User = (props) => {
  const currentUser = props.username === "juliusomo";
  return (
    <UserInfo>
      <ProfileImg src={props.img} />
      <Username>{props.username}</Username>
      {currentUser && <Tag>you</Tag>}
      <PostDuration>{props.createdAt}</PostDuration>
    </UserInfo>
  );
};

export default User;
