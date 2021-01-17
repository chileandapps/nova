import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  align-items: flex-start;
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

export const Home = () => {
  const history = useHistory();

  const investNow = () => {
    history.push("/dapp");
  };

  return (
    <HomeContainer>
      <h1>TronSteel</h1>
      <h2>
        Decentralized Smart-Contract Provides Fairness and Transparency Earn 25%
        daily profit up to 200% of your investment. Join Today!
      </h2>

      <p>
        1) Deposit TRX
        2) Get your referal link and spread the word
        3) Withdraw or Reinvest each 24 hours
      </p>

      <ButtonContainer>
        <button onClick={investNow}>Invest Now</button>
        <Link to="/#">Contract</Link>
      </ButtonContainer>
    </HomeContainer>
  );
};
