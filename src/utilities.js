import { TRX_UNIT } from "./constant";

const hexToTrx = (data) => {
  return window.tronWeb.toDecimal(data._hex) / TRX_UNIT;
};

const hexToDecimal = (data) => {
  return window.tronWeb.toDecimal(data._hex);
};

const hexToUTF8 = (data) => {
    return window.tronWeb.toDecimal(data._hex);
}

export { hexToTrx, hexToDecimal,hexToUTF8 };
