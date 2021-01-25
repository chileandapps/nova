import { TRX_UNIT } from "./constant";
import { hexToTrx, hexToDecimal } from "./utilities";
import { contractUserInfoInitialState } from "./store/initialState";

class Contract {
  constructor(contract, userAddress) {
    this.contract = contract;
    this.userAddress = userAddress;
    // console.log("%c CONTRACT", LOG_COLOR, contract);
  }

  //Initialize
  async Initialize() {
    let uidHex = await this.contract.address2UID(this.userAddress).call();
    // console.log(uidHex);
    this.uid = hexToDecimal(uidHex);
  }

  subscribeEvents(render) {
    this.contract.onInvest().watch((err, event) => {

      // console.log('event');
      // if (err) {
      //   console.error('Error with "method" event:', err);
      // }
      if (!err) {
        // console.log("%c OnInvest", LOG_COLOR, event);
        // alert(event.transaction);
        render();
      }
    });

    this.contract.onWithdraw().watch((err, event) => {
      if (!err) {
        render();
      }
    });
    this.contract.onReinvest().watch((err, event) => {
      if (!err) {
        render();
      }
    });
  }

  getReferalLink() {
    return `http://localhost:3000?ref=${this.uid}`;
  }

  async getContractGlobalInfo() {
    return {
      getContractBalance: await this.getCurrentContractBalance(),
      totalInvestments: await this.getTotalInvestment(),
    };
  }

  async getContractUserInfo() {
    if (this.uid !== 0) {
      return {
        uid: this.uid,
        investorInfo: await this.getInvestorInfo(),
        investmentPlan: await this.getUserInvestmentPlan(),
      };
    }

    return contractUserInfoInitialState;
  }

  async getCurrentContractBalance() {
    const data = await this.contract.getBalance().call();
    return hexToTrx(data);
  }
  async getTotalInvestment() {
    const data = await this.contract.totalInvestments_().call();
    return hexToTrx(data);
  }
  //19
  async getInvestorInfo() {
    let investorInfo = await this.contract
      .getInvestorInfoByUID(this.uid)
      .call();
    // console.log("investorInfo", investorInfo);

    return {
      referrerEarnings: hexToTrx(investorInfo[0]),
      availableReferrerEarnings: hexToTrx(investorInfo[1]),
      reinvestWallet: hexToTrx(investorInfo[2]),
      referrer: hexToDecimal(investorInfo[3]),
      level1RefCount: hexToDecimal(investorInfo[4]),
      level2RefCount: hexToDecimal(investorInfo[5]),
      level3RefCount: hexToDecimal(investorInfo[6]),
      planCount: hexToDecimal(investorInfo[7]),
      checkpoint: new Date(
        hexToDecimal(investorInfo[8]) * 1000
      ).toLocaleString(),
      dividens: hexToTrx(investorInfo[9][0]),
    };
  }
  //8
  async getUserInvestmentPlan() {
    let userInvestmentPlan = await this.contract
      .getInvestmentPlanByUID(this.uid)
      .call();

    // console.log("userInvestmentPlan", userInvestmentPlan);

    var plan = new Array();

    userInvestmentPlan[0].forEach((element) => {
      plan.push({
        investmentDates: new Date(),
        investments: 0,
        currentDividends: 0,
        isExpireds: false,
      });
    });

    userInvestmentPlan[0].forEach((data, index) => {
      plan[index].investmentDates = new Date(
        hexToDecimal(data) * 1000
      ).toLocaleString();
    });

    userInvestmentPlan[1].forEach((data, index) => {
      plan[index].investments = hexToTrx(data);
    });

    userInvestmentPlan[2].forEach((data, index) => {
      plan[index].currentDividends = hexToTrx(data);
    });

    userInvestmentPlan[3].forEach((data, index) => {
      plan[index].isExpireds = data;
    });

    return plan;
  }

  async invest(investment, referalCode) {
    // console.log(LOG_COLOR,"INVEST", {
    //   investment,
    //   referalCode
    // });
    let result = await this.contract.invest(referalCode).send({
      // feeLimit:100_000_000,
      callValue: investment * TRX_UNIT,
      // tokenId:1000036,
      // tokenValue:100,
      // shouldPollResponse:true
    });

    return result;
  }

  async withdraw() {
    let result = await this.contract.withdraw().send({});
    return result;
  }

  async reinvest() {
    let result = await this.contract.reinvest().send({});
    return result;
  }
}

export { Contract };
