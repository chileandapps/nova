import { CONTRACT_ADDRESS,TRX_UNIT } from "./constant";
import { fixedDecimal } from "./utilities";

const getTronWeb = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tronWebState = {
        installed: !!window.tronWeb,
        loggedIn: window.tronWeb && window.tronWeb.ready,
      };

      if (tronWebState.installed && tronWebState.loggedIn) {
        // console.log("tronWeb",window.tronWeb);
        resolve();
      } else {
        reject(new Error("Something failed"));
      }
    }, 1000);
  });
};

//Returns the details of the contract at the specified address
const getContract = async () => {
  return await window.tronWeb.contract().at(CONTRACT_ADDRESS);
};

//Get user Address and Balance TRX
const getWalletInfo = async () => {
  let address = window.tronWeb.defaultAddress.base58;
  let balance = (await window.tronWeb.trx.getBalance(address)) / TRX_UNIT;
  balance = fixedDecimal(balance); 
  return {
    address,
    balance,
  };
};

export { getTronWeb, getContract, getWalletInfo };
