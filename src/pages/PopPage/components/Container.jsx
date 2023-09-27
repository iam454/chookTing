import React from "react";
import { styled } from "styled-components";

const Box = styled.main`
  width: 358px;
  height: 2000px;
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 300px 300px 300px;
  gap: 8px;
`;

const Container = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Container;
