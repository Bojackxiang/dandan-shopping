import React from "react";
import "./forminput.style.scss";

const FormInput = ({ onChangeHandler, label, ...restProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={onChangeHandler} {...restProps} />

      {label ? (
        <label
          className={`${
            restProps.value.length > 0 && restProps
          } ? "shrink" : '' form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
