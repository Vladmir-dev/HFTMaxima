import { Grid } from "@material-ui/core";
import React from "react";
import { Customized } from "../Customized/Customized";
import useStyles from "./styles";
export default function Upper() {
  const classes = useStyles();
  return (
    <Grid container className={classes.grid}>
      <Grid>
        <Customized.Carousel />
      </Grid>
    </Grid>
  );
}
