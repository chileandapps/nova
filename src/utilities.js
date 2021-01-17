import { TRX_UNIT,MAX_DECIMAL } from "./constant";

const fixedDecimal = (decimal)  => {
  return Math.floor(decimal* (10**MAX_DECIMAL)) / (10**MAX_DECIMAL);
}

const hexToTrx = (data) => {
  var decimal =  window.tronWeb.toDecimal(data._hex) / TRX_UNIT  ;
  return fixedDecimal(decimal);
  ;
};

const hexToDecimal = (data) => {
  return window.tronWeb.toDecimal(data._hex);
};

const hexToUTF8 = (data) => {
    return window.tronWeb.toDecimal(data._hex);
}

export { hexToTrx, hexToDecimal,hexToUTF8,fixedDecimal };
