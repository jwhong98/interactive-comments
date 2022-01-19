import React from "react";
import { UserInfo, ProfileImg, Username, PostDuration } from "./UserElements";

const User = (props) => {
  return (
    <UserInfo>
      <ProfileImg src={props.img} />
      <Username>{props.username}</Username>
      <PostDuration>{props.createdAt}</PostDuration>
    </UserInfo>
  );
};

export default User;
