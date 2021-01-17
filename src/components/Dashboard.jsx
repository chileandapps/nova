import React from "react";
import { useState, useContext } from "react";
import { ContractContext } from "./../store/context";
import { useLocation } from "react-router-dom";
import {
  Box,
  InvestContainer,
  Button,
  ReferalItem,
  DashboardContainer,
} from "./DashboardStyled";

export const Dashboard = ({ setModal, contractGlobal, contractUser, trxBalance }) => {
  const [investment, setInvestment] = useState(0);
  const contract = useContext(ContractContext);
  const location = useLocation();

  const handleInvestment = async (event) => {
    console.log("referalCode", "asd");
    event.preventDefault();
    try {
      const referalCode = location.search.split("=")[1];
      const code = isNaN(referalCode) ? 0 : referalCode;
      const hash = await contract.invest(investment, code);
      console.log(hash);
      setModal({
        visible: 'true',
        title: 'You can track your transaction below',
        text: `View on TRONSCAN: ${hash}`
      })

    } catch (error) {
      console.error(error);
    }
  };

  const handleWithdrawal = (event) => {
    event.preventDefault();
    try {
      contract.withdraw();
    } catch (error) {
      console.error(error);
    }
  };

  const handleReinvest = (event) => {
    event.preventDefault();
    try {
      contract.reinvest();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <DashboardContainer>
        <Box>
          <h2>Total Investment</h2>
          <h3>{contractGlobal.totalInvestments} </h3>

          <h2>Contract Balance</h2>
          <h3>{contractGlobal.getContractBalance} </h3>

          <h2>TRX Payout</h2>
          <h3>
            {contractGlobal.totalInvestments -
              contractGlobal.getContractBalance}{" "}
          </h3>
          <h2>Daily Profit</h2>
          <h3>25%</h3>
        </Box>

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
              <div className="label-input">
                <p>A minimum of 100 TRX for deposits</p>
              </div>

              <Button type="submit">Deposit</Button>
            </InvestContainer>
          </form>
        </Box>

        <Box>
          <h2>Dividens</h2>

          <h3>
            {contractUser.investorInfo.dividens +
              contractUser.investorInfo.availableReferrerEarnings}
          </h3>
          <Button
            onClick={handleWithdrawal}
            type="button"
            className="button-fill"
          >
            Withdraw
          </Button>

          <h2>Reinvest Wallet</h2>
          <h3>{contractUser.investorInfo.reinvestWallet}</h3>
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
            <p>{contractUser.investorInfo.level1RefCount}</p>
          </ReferalItem>
          <ReferalItem>
            <p>Level 3 (3%) Referrals Deposits:</p>
            <p>{contractUser.investorInfo.level1RefCount}</p>
          </ReferalItem>

          <br />
          <hr></hr>
          <br />
          <div className="your-referal">
            <p>Your Referal Link:</p>
            <p>{contractUser.referalLink}</p>
          </div>
          <Button className="button-fill" type="button">
            Copy Referal Link
          </Button>
        </Box>
      </DashboardContainer>
    </div>
  );
};
