import { styled } from "styled-components";

const Box = styled.button`
  background: none;
  border: none;
  padding: 0;
`;

const Button = ( {children, onClick} ) => {
  return (
    <Box onClick={onClick}>{children}</Box>
  )

}

export default Button;