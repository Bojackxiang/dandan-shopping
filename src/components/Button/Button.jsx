import React from "react";
import "./button.style.scss";

const Button = ({ onClickHandler, text, inverted }) => {
  return (
    <button
      className={`custom-button 
      ${inverted} ? 'inverted' : ''`}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
