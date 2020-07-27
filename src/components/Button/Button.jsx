import React from "react";
import { CustomizedButton } from "./Button.style";

const Button = ({ onClickHandler, text, inverted }) => {
  return (
    <CustomizedButton googleSignIn={false} onClick={onClickHandler}>
      {text}
    </CustomizedButton>
  );
};

export default Button;
