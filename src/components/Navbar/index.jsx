import React from "react";
import { useState } from "react";
import { SliderNav } from "./SliderNav";
import { Nav } from "./Nav";
import urljoin from "url-join";
import { CONTRACT_ADDRESS } from "./../../constant";

const Navbar = ({ render, userLogged, address }) => {
  const [showSliderNav, setShowSliderNav] = useState(false);

  const getContractLink = () => {
    const link = urljoin(
      process.env.REACT_APP_NODE,
      "contract",
      CONTRACT_ADDRESS
    );

    return link;
  };

  const login = () => {
    if (!userLogged) render();
  };

  return (
    <>
      <Nav
        burgerClick={() => setShowSliderNav(true)}
        contractLink={getContractLink}
        address={address}
        login={login}
      />

      <SliderNav
        visible={showSliderNav}
        close={() => setShowSliderNav(false)}
        contractLink={getContractLink}
        address={address}
        login={login}
      />
    </>
  );
};

export default Navbar;
