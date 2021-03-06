import React from "react";
import { makeStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const CustomTable = (props) => {
  const classes = useStyles();

  const head = props.title.map((head, index) => {
    return (
      <TableCell align="left" key={index}>
        {head}
      </TableCell>
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>{head}</TableRow>
        </TableHead>
        <TableBody>
          {props.items}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
