import React from "react";
import styled from "styled-components";
import Logo from "./../../assets/logo.png";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const NavContainer = styled.nav`
  min-height: 15vh;
  display: flex;
  justify-content: space-between;
  padding: 0 3vw;
  /* border: 1px solid green; */
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;

  &.active {
    color: #8385a9;
  }
`;

export const NavImg = styled(Link)`
text-decoration: none;
padding: 0 1rem;
cursor: pointer;
display:flex;
align-items:center;

`;

export const Burger = styled(FaBars)`
  display: none;
  color: white;

  @media screen and (max-width: 600px) {
    display: block;
    position: absolute;
    top: 6vh;
    right: 6vw;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background-color: black;
  padding: 10px 22px;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fb5e84;
  }
`;

export const Nav = ({ burgerClick, contractLink, address, login }) => {
  return (
    <NavContainer>
      <NavImg to="/">
        <img src={Logo} width="80" alt="logo" />
      </NavImg>


      <NavMenu>
        <NavLink to="/play">App</NavLink>
        <NavLink as="a" target="_blank" href={contractLink()}>
          Contract
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavBtnLink as="button" onClick={login}>
          {" "}
          {address.substring(0, 5)}
        </NavBtnLink>
      </NavMenu>

      <Burger onClick={burgerClick} />
    </NavContainer>
  );
};
