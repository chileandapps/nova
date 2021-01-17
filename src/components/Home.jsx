import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { ButtonLarge } from "./../components/DashboardStyled";

const HomeContainer = styled.div`
  width: 50vw;
  height: 70vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid green; */

  & h1 {
    font-size: 90px;
    font-family: 'Russo One', sans-serif;
  }
  & p {
    margin: 10px 0;
    font-size: 24px;
    color: #8385a9;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  & button {
    margin-right: 1vh;
    width: 140px;
  }

  & a {
    margin-right: 1vh;
  }
`;

const Footer = styled.div`
  position: fixed;
  left: 50%;
    transform: translate(-50%, 0);
  bottom: 0;
  width: 85vh;
  margin-bottom: 20px;
`;

export const Home = () => {
  const history = useHistory();

  const investNow = () => {
    history.push("/dapp");
  };

  return (
    <HomeContainer>
      <h1>NOVA TRON</h1>
      <p>
        Decentralized Smart-Contract Provides Fairness and Transparency. Earn
        25% daily profit up to 200% of your investment. Join Today!
      </p>

      <ButtonLarge type="button" onClick={investNow}>
        Invest Now
      </ButtonLarge>

      <Footer>
        <small>
          *Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
          est doloremque accusamus nisi autem corrupti, amet optio obcaecati
          nemo nostrum voluptatibus soluta esse unde ratione iste. Esse
          perferendis voluptatibus.
        </small>
      </Footer>
    </HomeContainer>
  );
};
