import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {useState} from "react";

const AccordionItem = ({ classes, title, text, id, expanded }) => {

  const [expandedState, setExpandedState] = useState(id == expanded);

  const change = () => {
    setExpandedState(!expandedState);
  }

  return (
    <Accordion onChange={() => change() } expanded={expandedState} className={classes.theme}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography aling="left">{text}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
