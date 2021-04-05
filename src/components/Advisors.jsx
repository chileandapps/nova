import React from "react";
import styled from "styled-components";
import DappStatsIcon from "./../assets/dappStats.svg";
import DappReviewIcon from "./../assets/dappReview.svg";

const AdvisorsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  margin: 0 auto;
  margin-top: 3vh;
  /* border: 1px solid green; */
  flex-grow: 5;

  & a {
    text-decoration: none;
  }

  & .items {
    display: flex;
    justify-content: center;
    margin: 1vh 3vw;
  }

  & .dappStats {
    width: 200px;

  }

  & .dappReview {
    background-color: white;
    border-radius: 2px;
    padding: 5px 0;
    width: 120px;
    display: flex;
    justify-content: center;

    & a {
      width: 100%;
    }
  }

  & img {
    /* width: 100px; */
  }
`;

const Advisors = () => {
  return (
    <AdvisorsContainer>
      <div className="items dappStats">
        <a target="_blank" href="https://www.dappstats.com/dapp/tron-nova">
          <img src={DappStatsIcon} alt="DappStats" />
        </a>
      </div>
      <div className="items dappReview">
        <a target="_blank" href="https://dapp.review/dapp/Tron-Nova">
          <img height="30px" src={DappReviewIcon} alt="DappReview" />
        </a>
      </div>
    </AdvisorsContainer>
  );
};

export default Advisors;
