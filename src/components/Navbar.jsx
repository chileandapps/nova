import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/logo.png";
import styled from "styled-components";
import {CONTRACT_ADDRESS} from "./../constant"
import urljoin from 'url-join';

const LogoContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
`;

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border: 1px solid red; */
  height: 15vh;

  & .nav {
    display: flex;
    margin-right: 2vh;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
   

    & .nav-item {
      margin-left: 15px;
      margin-right: 15px;
    }
  }

  & .budget {
    height: 38px;
    background: black;
    display: flex;
    align-items: center;
    padding: 0 1vh;
    border: 1px solid black;
    border-radius: 2px 2px;
  }
`;
const getContractLink = () => {
  const link = urljoin(process.env.REACT_APP_NODE,'contract',CONTRACT_ADDRESS)
  // console.log(link);
  return link;
}
const Navbar = ({ render, userLogged, walletInfo }) => {
  const maskAddress = () => {
    return;
  };

  const login = () => {
    if (!userLogged) render();
  };
  return (
    <nav>
      <NavbarContainer>
        <LogoContainer>
          <img src={Logo} width="100" alt="logo" />
        </LogoContainer>
        <div className="nav">
          <div className="nav-item">
            <Link to="/">Home</Link>
          </div>
          <div className="nav-item">
            <Link to="/dapp">Dapp</Link>
          </div>
          <div className="nav-item">
            <Link to="/about">About</Link>
          </div>
          <div className="nav-item">
            <a target="_blank" href={getContractLink()}>Contract</a>
          </div>

          <div onClick={login} className="nav-item budget">
            <p>{walletInfo.address}</p>
          </div>

          {/* <li>
  <p>Your Wallet Balance: {walletInfo.balance}</p>
</li> */}
        </div>
      </NavbarContainer>
    </nav>
  );
};

export default Navbar;
