import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
  },
  root: {
    "max-width": "650px",
    margin: "0 auto",
    "margin-top": "30px",
    "margin-bottom": "2vh",
    'background-color': 'transparent',
  },
  body:{
    color: 'white'
  }
});



export default function InvestmentTable({ contractUser }) {
  const classes = useStyles();

  return (
    <TableContainer className={classes.root} component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">N°</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="right">Invested (TRX)</TableCell>
            <TableCell align="right">Paid Out (TRX)</TableCell>
            <TableCell align="right">Expired</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.body}>
          {contractUser.investmentPlan.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {index}
              </TableCell>
              <TableCell align="left">{row.investmentDates}</TableCell>
              <TableCell align="right">{row.investments}</TableCell>
              <TableCell align="right">{row.currentDividends}</TableCell>
              <TableCell align="right">
                {row.isExpireds ? "yes" : "no"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
