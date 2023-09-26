import React from "react";
import { styled } from "styled-components";

const Box = styled.main`
  width: 358px;
  height: 2000px;
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid red;
`;

const Container = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Container;
