import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink as Link } from "react-router-dom";

const SliderMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  background: rgb(15, 15, 15);
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 15vh;
  z-index: 9;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background-color: hsl(234, 17%, 12%);
  padding: 10px 22px;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin: 0 20%;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fb5e84;
  }

  &:focus {
    outline: none;
  }

  &:active{
    transform: scale(.9);
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  margin: 1vh 0;

  /* &.active {
    color: #8385a9;
  } */
`;

export const CloseIcon = styled(AiOutlineClose)`
  display: block;
  position: absolute;
  top: 6vh;
  right: 6vw;
  font-size: 1.8rem;
  cursor: pointer;
`;

export const SliderNav = ({ visible, close, address, login, contractLink }) => {
  return (
    <>
      {visible && (
        <>
          <SliderMenu>
            <CloseIcon onClick={close} />
            <NavBtnLink as="button" onClick={login}>
              {address.substring(0, 5)}
            </NavBtnLink>
            <NavLink to="/play">App</NavLink>
            <NavLink as="a" target="_blank" href={contractLink()}>
              Contract
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink as="a" target="_blank" href="#">
              Telegram
            </NavLink>
          </SliderMenu>
        </>
      )}
    </>
  );
};
