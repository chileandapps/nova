import React from "react";
import { useState, useContext } from "react";
import { ContractContext } from "./../store/context";
import Table from "./Table";
import urljoin from "url-join";
import { useHistory  } from "react-router-dom";

import {
  Box,
  InvestContainer,
  Button,
  ReferalItem,
  DashboardContainer,
  HeaderBox,
  BoxContainer,
  HashLink,
  InfoIcon,
} from "./DashboardStyled";

import { REFERRAL_CODE } from "./../constant";

export const Dashboard = ({
  setModal,
  contractGlobal,
  contractUser,
  trxBalance,
}) => {
  const [investment, setInvestment] = useState(0);
  const contract = useContext(ContractContext);
  let history = useHistory();
  const copyReferalLink = () => {
    window.navigator.clipboard.writeText(getReferalLink());
  };

  const handleInvestment = async (event) => {
    event.preventDefault();

    if (investment < 100) return;

    try {
      const referralCode = localStorage.getItem(REFERRAL_CODE);
      const hash = await contract.invest(investment, referralCode);

      const hashLink = urljoin(process.env.REACT_APP_NODE, "transaction", hash);

      setModal({
        visible: "true",
        title: "You can track your transaction below",
        text: (
          <HashLink href={hashLink} target="_blank">
            View on TRONSCAN: {hash}
          </HashLink>
        ),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getReferalLink = () => {
    if (contractUser.uid != "0") {
      const referalLink = `${window.location.protocol}//${window.location.host}?ref=${contractUser.uid} `;
      return referalLink;
    }

    return "You must invest first";
  };

  const goToAbout = (idPanel) => {
    history.push("/faqs",{ idPanel });
  }

  const handleWithdrawal = async (event) => {
    event.preventDefault();
    try {
      const hash = await contract.withdraw();
      const hashLink = urljoin(process.env.REACT_APP_NODE, "transaction", hash);

      setModal({
        visible: "true",
        title: "You can track your transaction below",
        text: (
          <HashLink href={hashLink} target="_blank">
            View on TRONSCAN: {hash}
          </HashLink>
        ),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleReinvest = async (event) => {
    event.preventDefault();
    try {
      const hash = await contract.reinvest();
      const hashLink = urljoin(process.env.REACT_APP_NODE, "transaction", hash);

      
      setModal({
        visible: "true",
        title: "You can track your transaction below",
        text: (
          <HashLink href={hashLink} target="_blank">
            View on TRONSCAN: {hash}
          </HashLink>
        ),
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <DashboardContainer>
        <HeaderBox>
          <div>
            <h2>Total Investment</h2>
            <h3>{contractGlobal.totalInvestments} </h3>
          </div>

          <div>
            <h2>Contract Balance</h2>
            <h3>{contractGlobal.getContractBalance} </h3>
          </div>

          <div>
            <h2>Daily Profit</h2>
            <h3>2%</h3>
          </div>
        </HeaderBox>
        <BoxContainer>
          <Box left>
            <h2>Deposit TRX to start earning</h2>
            <form onSubmit={handleInvestment}>
              <InvestContainer>
                <div className="label-input">
                  <p>
                    <b>Enter the amount</b>
                  </p>
                  <p>Available: {trxBalance} TRX</p>
                </div>
                <input
                  placeholder="100"
                  type="number"
                  name="name"
                  onChange={(event) => setInvestment(event.target.value)}
                />
                <div className="label-input small">
                  <p>A minimum of 100 TRX for deposits</p>
                </div>

                <Button type="submit" fill>Deposit</Button>
              </InvestContainer>
            </form>
          </Box>

          <Box>
            <h2>Dividens</h2>

            <h3>{contractUser.investorInfo.dividens}</h3>
            <Button
              onClick={handleWithdrawal}
              type="button"
              className="button-fill"
            >
              Withdraw
            </Button>

   
              <h2>Reinvest Wallet &nbsp;<InfoIcon onClick={ () => goToAbout(6)} /></h2> 


            <h3>
              {contractUser.investorInfo.reinvestWallet +
                contractUser.investorInfo.availableReferrerEarnings}
            </h3>
            <Button
              className="button-fill"
              onClick={handleReinvest}
              type="button"
            >
              Reinvest
            </Button>
          </Box>

          <Box>
            <h2 className="mb-10">Referal Info</h2>
            <ReferalItem>
              <p>Total Referral Reward Earning:</p>
              <p>{contractUser.investorInfo.referrerEarnings}</p>
            </ReferalItem>
            <ReferalItem>
              <p> Total Referral Reward Available:</p>
              <p>{contractUser.investorInfo.availableReferrerEarnings}</p>
            </ReferalItem>
            <ReferalItem>
              <p> Level 1 (10%) Referrals Deposits:</p>
              <p>{contractUser.investorInfo.level1RefCount}</p>
            </ReferalItem>
            <ReferalItem>
              <p>Level 2 (5%) Referrals Deposits:</p>
              <p>{contractUser.investorInfo.level2RefCount}</p>
            </ReferalItem>
            <ReferalItem>
              <p>Level 3 (3%) Referrals Deposits:</p>
              <p>{contractUser.investorInfo.level3RefCount}</p>
            </ReferalItem>

            <br />
            <hr></hr>
            <br />
            <div className="your-referal">
              <p>Your Referal Link:</p>
              <p>{getReferalLink()}</p>
            </div>
            <Button
              onClick={copyReferalLink}
              className="button-fill"
              type="button"
            >
              Copy Referal Link
            </Button>
          </Box>
        </BoxContainer>
        <Table contractUser={contractUser} />
      </DashboardContainer>
    </div>
  );
};
