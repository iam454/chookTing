import React from "react";
import { styled } from "styled-components";

const Box = styled.main`
  width: 100%;
  position: absolute;
  top: 16px;
`;

const Container = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Container;
