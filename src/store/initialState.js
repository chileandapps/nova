export const walletInfoInitialState = {
  address: "Login",
  balance: 0,
};

export const contractGlobalInfoInitialState = {
  getContractBalance: 0,
  totalInvestments: 0,
};

export const contractUserInfoInitialState = {
  uid: 0,
  referalLink: 'none',
  investorInfo: {
    referrerEarnings: 0,
    availableReferrerEarnings: 0,
    reinvestWallet: 0,
    referrer: 0,
    level1RefCount: 0,
    level2RefCount: 0,
    level3RefCount: 0,
    planCount: 0,
    checkpoint: 0,
    dividens: 0,
  },
  investmentPlan: [
    {
      investmentDates: "",
      investments: 0,
      currentDividends: 0,
      isExpireds: false,
    },
  ]
};

export const modalInitialState = {
  visible: false,
  title: 'title',
  text: {},
}