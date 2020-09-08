import React from "react";
import { Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const TableSkeleton = (props) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Skeleton animation="wave" height={30} />
        <Skeleton animation="wave" height={60} />
      </Grid>
    </Grid>
  );
};

export default TableSkeleton;
