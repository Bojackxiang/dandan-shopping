import styled, { css } from "styled-components";

const sharedCss = css`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const googleStyle = css`
  background-color: skyblue;
`;

// 下面这个有点像switch，进来的props来分别返回不同的代码
const getBtnStyles = (props) => {
  if (props.googleSignIn) return googleStyle;

  if (props.inverted) return;

  return "";
};

export const CustomizedButton = styled.button`
  ${sharedCss};
  /* 这边甚至连props都不同穿进去 */
  ${getBtnStyles}
`;
