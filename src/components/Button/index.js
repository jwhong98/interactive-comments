import React from "react";
import { ButtonContainer } from "./ButtonElements";

const Button = (props) => {
  return <ButtonContainer>{props.text}</ButtonContainer>;
};

export default Button;
