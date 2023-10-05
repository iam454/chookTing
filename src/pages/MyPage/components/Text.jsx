import { styled } from "styled-components";

const Box = styled.p`
    font-size: ${props => props.fontSize};
    margin: ${props => props.$margin};
`;

const Text = ({ children, fontSize, $margin }) => {
  return <Box fontSize={fontSize} $margin={$margin}>{children}</Box>;
}

export default Text;