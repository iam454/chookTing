import React from "react";
import { styled } from "styled-components";

const Box = styled.div`
  width: 175px;
  height: ${(props) => {
    switch (props.$level) {
      case 1:
        return "180px";
      case 2:
        return "220px";
      case 3:
        return "300px";
      default:
        return "180px";
    }
  }};
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid green;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Card = ({ id, level, image }) => {
  return (
    <Box id={id} $level={level}>
      <Photo src={image} />
    </Box>
  );
};

export default Card;
