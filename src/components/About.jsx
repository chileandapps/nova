import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccordionItem from "./AccordionItem";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: "0 auto",
    "padding-bottom": "2vh",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: "white",
  },
  theme: {
    "background-color": "#343650",
    color: "#8385a9",
  },
}));



const About = () => {
  const classes = useStyles();
  const location = useLocation();


  return (
    <div className={classes.root}>
      <AccordionItem
        id="1"
        expanded={location.state.idPanel}
        classes={classes}
        title="What is TronNova.app?"
        text="TronNova.app is a ROI based smart contract where you as an investor will receive a fixed percentage which is agreed based upon your investment."
      />
      <AccordionItem
        id="2"
        expanded={location.state.idPanel}
        classes={classes}
        title="How do I join TronNova.app?"
        text="You'll need either of below wallets to start with TronNova.app: Tronlink, Tronwallet, Klever wallet."
      />
      <AccordionItem
        id="3"
        expanded={location.state.idPanel}
        classes={classes}
        title="What's the minimum investment to join TronNova.app?"
        text="100 trx is all you need to start your journey with TronNova.app"
      />
      <AccordionItem
        id="4"
        expanded={location.state.idPanel}
        classes={classes}
        title="How secure is TronNova.app?"
        text="Smart contract is open source and fully secured, no one can alter it, not even admin. 
        Though all the necessary measures and precautions has been taken and taken care off, it's solely dependent on the investors themselves to keep running the smart contract."
      />
      <AccordionItem
        id="5"
        expanded={location.state.idPanel}
        classes={classes}
        title="How does withdrawal work?"
        text="When you click withdraw, 50% of the profit is feed back to ´the reinvest wallet´ which will be used for reinvestment, and 50% is directly sent to your wallet"
      />
      <AccordionItem
        id="6"
        expanded={location.state.idPanel}
        classes={classes}
        title="How does the reinvest works?"
        text="Reinvest can be used always to compound profit. The sustainability of the contract is when there is funds in the contract. Thus when you reinvest two good things happens, the contract balance doesn't decreases and your profit increases due to compounding effect."
      />
      <AccordionItem
        id="7"
        expanded={location.state.idPanel}
        classes={classes}
        title="How does reinvest work (without withdrawal)?"
        text="When you don't withdraw on a daily basis, on the 100th day, you'll receive 200% profit. When you click on reinvest, the total amount will be compounded on your current capital. This earns you more profit."
      />
      <AccordionItem
        id="8"
        expanded={location.state.idPanel}
        classes={classes}
        title="What are the fees?"
        text="For every Investment, 2% of the investment goes for Marketing, and 6% goes for Development, Maintenance, Operations & Education.
        However this fees won't affect your Investment, if you invest 1000 Trx, you will earn based on 1000 Trx."
      />
    </div>
  );
};

export default About;
