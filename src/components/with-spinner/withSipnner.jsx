import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./withspinner.styles";

const WithSpinner = (WrapComponent) => {
  console.log("WrapComponent: ", WrapComponent);

  // 这个参数是从 withSpinner 里面传进来的
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrapComponent {...otherProps} />
    );
  };

  return Spinner;
};

export default WithSpinner;

/**
 * higher order component, 将component传给一个function
 * isLoading 和 otherProps 都是 WithSpinner 的东西
 */
