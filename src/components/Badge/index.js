import React from "react";
import plus from "../../assets/icon-plus.svg";
import minus from "../../assets/icon-minus.svg";
import { BadgeContainer, Icon, Score } from "./BadgeElements";

const Badge = (props) => {
  return (
    <BadgeContainer>
      <Icon src={plus} />
      <Score>{props.score}</Score>
      <Icon src={minus} />
    </BadgeContainer>
  );
};

export default Badge;
