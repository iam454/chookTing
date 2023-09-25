import { styled } from "styled-components";
import NavigationBar from "./NavigationBar";

const Container = styled.div`
  width: 390px;
  height: 844px;
  background-color: ${(props) => props.theme.black};
  position: relative;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      {children}
      <NavigationBar />
    </Container>
  );
};

export default Layout;
