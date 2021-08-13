import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { Customized } from "../Components/Customized/Customized";

export default function Main() {
  const classes = useStyles();
  return (
    <Grid container style={{ display: "block"}}>
      <Grid item row style={{margin:'2em'}}>
        <Customized.BreadCrumbs separator=">" />
      </Grid>
      <Grid item row className={classes.gridFlex}>
        <Grid direction="column" className={classes.gridInner1}>
          <Customized.Lists />
        </Grid>
        <Grid direction="column" className={classes.gridInner}>
          <Grid className={classes.gridB}>
            <div className={classes.div}>
              <Typography variant='h6'>HFTmaxima Trading Platforms</Typography>
              <Typography variant='h3'>Have power over your Trading</Typography>
            </div>
            <Customized.Button text="Open new Account" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
