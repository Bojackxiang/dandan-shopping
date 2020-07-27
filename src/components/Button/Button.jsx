import React from "react";
import { CustomButtonContainer } from "./Button.style";

const Button = ({ onClickHandler, text, inverted, ...props }) => {
  return (
    <CustomButtonContainer
      googleSignIn={false}
      onClick={onClickHandler}
      {...props}
    >
      {text}
    </CustomButtonContainer>
  );
};

export default Button;
