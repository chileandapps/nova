import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { ButtonLarge } from "./../components/DashboardStyled";

const HomeContainer = styled.div`
  width: 100%;
  min-height: 85vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid orange; */
  padding-top: 10vh;


  & h1 {
    font-size: 90px;
    font-family: 'Russo One', sans-serif;
    flex-grow: 1;

    & span{
      font-size: 1rem;
      padding-left: 1vw;
    }
  }
  & p {
    margin: 3vh 0;
    font-size: 24px;
    color: #8385a9;
    flex-grow: 1;
  }
`;

const Footer = styled.div`
  padding: 4vh 0;
  /* border: 1px solid green; */
  flex-grow:10;
  display: flex;
  align-items: flex-end;
`;

export const Home = () => {
  const history = useHistory();

  const investNow = () => {
    history.push("/play");
  };

  return (
    <HomeContainer>
      <h1>TRON NOVA<span><i> Beta v2.0 (Shasta)</i></span></h1>
      <p>
        Decentralized Smart-Contract Provides Fairness and Transparency.<br/>Earn
        2% daily profit up to 200% of your investment. Join Today!
      </p>

      <ButtonLarge type="button" onClick={investNow}>
        Invest Now
      </ButtonLarge>

      <Footer>
        <small>
        This descentralized application has been made for entertainment purposes and should be considered as such. No guarantees or warranties are given.
        </small>
      </Footer>
    </HomeContainer>
  );
};
