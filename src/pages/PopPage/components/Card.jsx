import React from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
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
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Card = ({ layoutId, level, image, onClick }) => {
  return (
    <Box layoutId={layoutId} $level={level} onClick={onClick}>
      <Photo src={image} alt="네컷사진" />
    </Box>
  );
};

export default Card;
