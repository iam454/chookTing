import { styled } from "styled-components";

const Box = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  border: none;
  padding: 0;
  background: none;
`;

const ImgButton = ({ children, onClick}) => {
  return (
    <Box onClick={onClick}>{children}</Box>
  )
};

export default ImgButton;