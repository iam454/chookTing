import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { ReactComponent as Home } from "../assets/Home.svg";
import { ReactComponent as Search } from "../assets/Search.svg";
import { ReactComponent as Profile } from "../assets/User_alt.svg";

const Nav = styled.nav`
  z-index: 10;
  border-top: 1px solid ${(props) => props.theme.modal.black};
  background-color: ${(props) => props.theme.black};
`;

const Tabs = styled.ul`
  display: flex;
`;

const Tab = styled.li`
  width: 130px;
  height: 56px;
  font-size: 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #9897a1;

  & .active {
    color: ${(props) => props.theme.white};
  }
`;

const Text = styled.div`
  height: 12px;
  text-align: center;
`;

const NavigationBar = () => {
  return (
    <Nav>
      <Tabs>
        <Tab>
          <NavLink to="/">
            <Home width={24} height={24} />
            <Text>홈</Text>
          </NavLink>
        </Tab>
        <Tab>
          <NavLink to="/pop">
            <Search width={24} height={24} />
            <Text>인기</Text>
          </NavLink>
        </Tab>
        <Tab>
          <NavLink to="/profile">
            <Profile width={24} height={24} />
            <Text>MY</Text>
          </NavLink>
        </Tab>
      </Tabs>
    </Nav>
  );
};

export default NavigationBar;
